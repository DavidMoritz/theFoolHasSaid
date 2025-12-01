import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            The Fool Says
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/articles" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Articles
            </Link>
            <Link href="/quizzes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Quizzes
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
