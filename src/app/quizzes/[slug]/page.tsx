import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { Quiz } from '@/types/sanity'
import QuizPlayer from '@/components/QuizPlayer'
import { Metadata } from 'next'

async function getQuiz(slug: string) {
  const query = `*[_type == "quiz" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    questions,
    categories[]->{
      title,
      slug
    }
  }`

  try {
    const quiz = await client.fetch<Quiz>(query, { slug })
    return quiz
  } catch (error) {
    console.error('Error fetching quiz:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const quiz = await getQuiz(slug)

  if (!quiz) {
    return {
      title: 'Quiz Not Found',
    }
  }

  return {
    title: `${quiz.title} | The Fool Says`,
    description: quiz.description || `Test your knowledge with ${quiz.title}`,
  }
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const quiz = await getQuiz(slug)

  if (!quiz) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quizzes" className="hover:text-blue-600">Quizzes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{quiz.title}</span>
          </nav>

          {/* Quiz Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {quiz.categories && quiz.categories.length > 0 && (
              <div className="flex gap-2 mb-4">
                {quiz.categories.map((category) => (
                  <span
                    key={category._id}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl font-bold mb-4 text-gray-900">{quiz.title}</h1>

            {quiz.description && (
              <p className="text-lg text-gray-600 mb-4">{quiz.description}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-semibold">
                {quiz.questions.length} {quiz.questions.length === 1 ? 'Question' : 'Questions'}
              </span>
            </div>
          </div>

          {/* Quiz Player */}
          <QuizPlayer questions={quiz.questions} quizTitle={quiz.title} />

          {/* Back to Quizzes */}
          <div className="mt-8">
            <Link
              href="/quizzes"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Quizzes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
