export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Fool Has Said</h3>
            <p className="text-gray-400">
              Exploring the evidence for intelligent design and examining the claims of evolutionary theory.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="/quizzes" className="text-gray-400 hover:text-white transition-colors">
                  Quizzes
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Biblical Foundation</h4>
            <p className="text-gray-400 italic">
              "The fool says in his heart, 'There is no God.'"
              <br />
              <span className="text-sm">- Psalm 14:1</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} The Fool Has Said. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
