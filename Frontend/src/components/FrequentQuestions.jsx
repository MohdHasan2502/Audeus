

const FrequentQuestions = () => {
  return (



    <> 
    
    {/*frequent Questions */}
    
    <div className="flex flex-col items-center mt-32 px-4 w-full">
    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
      Frequently Asked Questions
    </h1>

    {/* FAQ Items */}
    <div className="w-full max-w-4xl space-y-6">
      {/* Question 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
          What is text-to-speech (TTS)?
        </h4>
        <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
          Text-to-speech (TTS) is a technology that converts written text
          into spoken audio. Our app uses advanced TTS to read aloud your
          PDFs, Word Docs, ebooks, text, and more, allowing you to listen
          while reading along.
        </p>
      </div>

      {/* Question 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
          How can I benefit from text-to-speech?
        </h4>
        <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
          By listening while reading along, you&apos;ll absorb information
          faster, maintain focus longer, and power through your reading list
          and backlog with less fatigue and frustration. Transform daunting
          reading tasks into a manageable, efficient process and finally
          achieve the mastery and productivity you&apos;ve been striving
          for, while getting valuable time back. Whether you&apos;re a law
          student buried in case briefs, a grad student researching your
          thesis, or an executive swamped with keeping up with the latest
          developments in your industry, Audeus can help you break through
          the overwhelm.
        </p>
      </div>

      {/* Question 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
          Will the app save my place in a document?
        </h4>
        <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
          Yes, the app automatically saves your place, so you can pause and
          resume listening anytime without losing your spot. This feature is
          perfect for long documents or when you are listening in multiple
          sessions.
        </p>
      </div>

      {/* Question 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
          Can I contact the team if I have any questions?
        </h4>
        <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
          Of course! Our team is always happy to answer any questions you
          may have. Simply visit our contact page to submit a request or
          send us an email.
        </p>
      </div>
    </div>
  </div>

  <hr /></>
  )
}

export default FrequentQuestions