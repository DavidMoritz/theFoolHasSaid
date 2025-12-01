import Link from 'next/link'
import { client } from '@/lib/sanity'
import { Quiz } from '@/types/sanity'

// Revalidate this page every 60 seconds
export const revalidate = 60

async function getAllQuizzes() {
  const query = `*[_type == "quiz"] | order(_createdAt desc) {
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
    return await client.fetch<Quiz[]>(query)
  } catch (error) {
    console.error('Error fetching quizzes:', error)
    return []
  }
}

export default async function QuizzesPage() {
  const quizzes = await getAllQuizzes()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Quizzes</h1>
          <p className="text-lg text-gray-600 mb-12">
            Test your knowledge of intelligent design, creation science, and the critique of evolutionary theory.
          </p>

        {quizzes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <Link
                key={quiz._id}
                href={`/quizzes/${quiz.slug.current}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600">
                    {quiz.title}
                  </h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {quiz.questions.length} {quiz.questions.length === 1 ? 'question' : 'questions'}
                  </span>
                </div>

                {quiz.description && (
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                )}

                {quiz.categories && quiz.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {quiz.categories.map((category) => (
                      <span
                        key={category._id}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 text-blue-600 font-semibold">
                  Start Quiz →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg mb-4">No quizzes available yet.</p>
            <p className="text-gray-500">
              Visit the{' '}
              <Link href="/studio" className="text-blue-600 hover:text-blue-700 font-semibold">
                Studio
              </Link>{' '}
              to create your first quiz.
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
