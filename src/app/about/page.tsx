import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | The Fool Says',
  description: 'Learn about our mission to present the evidence for intelligent design and examine evolutionary theory.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">About The Fool Says</h1>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 small-change-01">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The fool says in his heart, 'There is no God.'" - Psalm 14:1
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website exists to present compelling evidence for intelligent design as the most logical explanation for life on Earth,
                while examining the claims and assumptions of evolutionary theory through critical analysis.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What We Believe</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  The complexity and design evident in nature point to an intelligent Creator
                </li>
                <li>
                  Scientific evidence, when examined objectively, supports the concept of intelligent design
                </li>
                <li>
                  Many claims of evolutionary theory require examination and critical thinking
                </li>
                <li>
                  The Biblical account of creation provides a coherent framework for understanding the origin of life
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We approach these topics with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Scientific inquiry:</strong> Examining evidence from biology, geology, astronomy, and other disciplines
                </li>
                <li>
                  <strong>Logical reasoning:</strong> Applying critical thinking to evolutionary claims and design arguments
                </li>
                <li>
                  <strong>Biblical foundation:</strong> Grounding our understanding in Scripture while engaging with scientific evidence
                </li>
                <li>
                  <strong>Respectful dialogue:</strong> Encouraging thoughtful discussion and the exchange of ideas
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What You'll Find Here</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Articles:</strong> In-depth examinations of intelligent design evidence, critiques of evolutionary theory,
                  and explorations of how science and faith intersect.
                </p>
                <p>
                  <strong>Quizzes:</strong> Interactive assessments to test and expand your knowledge of creation science,
                  intelligent design, and the challenges facing evolutionary theory.
                </p>
                <p>
                  <strong>Community Discussion:</strong> Engage with articles through our comment system and join the conversation
                  about these important topics.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Join the Discussion</h3>
              <p className="text-gray-700">
                We encourage readers to think critically, ask questions, and engage respectfully with the content and
                with one another. Whether you're a skeptic, a seeker, or a believer, we welcome your participation
                in this important dialogue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
