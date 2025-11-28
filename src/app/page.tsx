import Link from 'next/link'
import { client } from '@/lib/sanity'
import { Article } from '@/types/sanity'

async function getFeaturedArticles() {
  const query = `*[_type == "article" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title,
      slug
    }
  }`

  try {
    return await client.fetch<Article[]>(query)
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    return []
  }
}

async function getRecentArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{
      name
    }
  }`

  try {
    return await client.fetch<Article[]>(query)
  } catch (error) {
    console.error('Error fetching recent articles:', error)
    return []
  }
}

export default async function Home() {
  const [featuredArticles, recentArticles] = await Promise.all([
    getFeaturedArticles(),
    getRecentArticles(),
  ])

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">The Fool Has Said</h1>
            <p className="text-xl mb-4 text-blue-100">
              "The fool says in his heart, 'There is no God.'" - Psalm 14:1
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Exploring the evidence for intelligent design and examining the scientific and logical foundations of creation
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/articles"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Read Articles
              </Link>
              <Link
                href="/quizzes"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Take a Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article._id}
                  href={`/articles/${article.slug.current}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {article.mainImage && (
                    <div className="h-48 bg-gray-200"></div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    )}
                    <div className="text-sm text-gray-500">
                      By {article.author.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
            <Link href="/articles" className="text-blue-600 hover:text-blue-700 font-semibold">
              View All →
            </Link>
          </div>

          {recentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((article) => (
                <Link
                  key={article._id}
                  href={`/articles/${article.slug.current}`}
                  className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                  )}
                  <div className="text-sm text-gray-500">
                    By {article.author.name} • {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-lg mb-4">No articles yet. Check back soon!</p>
              <p className="text-gray-500">
                Visit the{' '}
                <Link href="/studio" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Studio
                </Link>{' '}
                to create your first article.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Test Your Knowledge</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Challenge your understanding of intelligent design, creation science, and the critique of evolutionary theory with our interactive quizzes.
          </p>
          <Link
            href="/quizzes"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Quizzes
          </Link>
        </div>
      </section>
    </div>
  )
}
