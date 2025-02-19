import React from 'react'
import Header from '../components/Header'
const KashmirFiles = () => {

  return (
    <>
    <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">The Kashmir Files</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe 
                className="w-full h-[500px]"
                src="https://www.youtube.com/embed/A179apttY58" 
                title="The Kashmir Files Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">About the Film</h2>
                <p className="text-gray-700 leading-relaxed">
                The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. The film presents a fictional storyline centred around the 1990 exodus of Kashmiri Hindus from Indian-administered Kashmir. It depicts the exodus and the events leading up to it as a genocide,a framing considered inaccurate by scholars.The film claims that such facts were suppressed by a conspiracy of silence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Location Details</h2>
                <p className="text-gray-700 leading-relaxed">
                  The film was primarily shot in Mussoorie, where several iconic locations were transformed to recreate Kashmir:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
                  <li>Library Chawk was modified to replicate the famous Laal Chawk of Kashmir</li>
                  <li>British era buildings in Sister Bazaar were used to recreate traditional Kashmiri houses</li>
                  <li>The historic Chaar Dukaan area was transformed to match Kashmir's architecture</li>
                  <li>Mall Road served as the main street setting for various scenes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Production Challenges</h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the main challenges faced during production was creating an authentic and immersive environment that would transport the audience to Kashmir. The production team worked meticulously on set design, paying careful attention to architectural details, street layouts, and cultural elements to ensure authenticity. Through extensive research and dedicated effort, they successfully transformed Mussoorie's locations into convincing representations of Kashmir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Cast & Crew</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-700">
                  <li><span className="font-semibold">Director:</span> Vivek Agnihotri</li>
                  <li><span className="font-semibold">Lead Actor:</span> Anupam Kher</li>
                  <li><span className="font-semibold">Supporting Actor:</span> Mithun Chakraborty</li>
                  <li><span className="font-semibold">Release Date:</span> 2022</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://youtu.be/A179apttY58" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Watch Official Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KashmirFiles