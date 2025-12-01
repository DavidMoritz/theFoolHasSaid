import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { Article } from '@/types/sanity'

async function getAllArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    author->{
      name
    },
    categories[]->{
      title,
      slug
    }
  }`

  try {
    return await client.fetch<Article[]>(query)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Articles</h1>
        <p className="text-lg text-gray-600 mb-12">
          Exploring the evidence for intelligent design and examining evolutionary claims through science and reason.
        </p>

        {articles.length > 0 ? (
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article._id} className="border-b border-gray-200 pb-8">
                <Link
                  href={`/articles/${article.slug.current}`}
                  className="flex flex-col md:flex-row gap-6 group"
                >
                  {article.mainImage && (
                    <div className="relative w-full md:w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(article.mainImage).width(400).height(300).url()}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    )}

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>By {article.author.name}</span>
                      <span>•</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      {article.categories && article.categories.length > 0 && (
                        <>
                          <span>•</span>
                          <div className="flex gap-2">
                            {article.categories.map((category) => (
                              <span
                                key={category._id}
                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                              >
                                {category.title}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="inline-block mt-4 text-blue-600 group-hover:text-blue-700 font-semibold">
                      Read More →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg mb-4">No articles published yet.</p>
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
    </div>
  )
}
