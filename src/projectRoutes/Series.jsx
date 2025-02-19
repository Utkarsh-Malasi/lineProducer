import React from 'react'
import darkscroll from '../images/darkscroll.jpg'
import bestseler from '../images/bestseler.jpg'
import ishqme from '../images/ishqme.jpg'
import bbcuk from '../images/bbcuk.jpg'
import Header from '../components/Header'
const Series = () => {

    const ads = [
        {
            id: 1,
            title: "MTV Dark Scroll",
            description: "MTV Dark Scroll – Muqabla Anjaan Se (transl. MTV Dark Scroll – Competition with the Unknown) is an Indian paranormal reality television series. Filmed in Uttarakhand and hosted by Amit Sadh. It broadcasts on MTV India from 16 August to 29 September 2024 and streams digitally on JioCinema. It also features paranormal experts Sarbajeet Mohanty and Pooja Vijay.",
            location: "Shot in the chilling and scary environment of Lambi Dehar Mines in Mussoorie.",
            image: darkscroll,
            link: "https://youtu.be/_kPbVegpySM?si=fGl4dM91hXC7Pv4D",
        },
        {
            id: 2,
            title: "Bestseller",
            description: " Starring Mithun Chakraborty, Shruti Haasan, Arjan Bajwa, Gauhar Khan, Sonalee Kulkarni and Satyajeet Dubey in main roles, the series premiered on Amazon Prime Video on 18 February 2022.",
            location: "Shot at a scenic beauty location of Dhanaulti, Uttarakhand. With houses resembling mountain cultures.",
            image: bestseler,
            link: "https://youtu.be/7VYR2iwAShA?si=M_zG_IQgMMWPSHCW",
        },
        {
            id: 3,
            title: "Ishq Me Ghayal",
            description: "Tere Ishq Mein Ghayal (transl. Wounded in Your Love) is an Indian Hindi-language supernatural fantasy television series that aired from 13 February 2023 to 9 June 2023 on Colors TV.",
            location: "Shot in the visually stunning location of Vindhyavasini Temple situated between Haridwar and Rishikesh.",
            image: ishqme,
            link: "https://youtu.be/1HfQ2fPp2fQ?si=LF8wuYiG8VMgoQJr",
        },
        {
           id: 4,
           title: "BBC StoryWork : Uttrakhand",
           description: "Open Your Eyes To India's Winter Wonderland, India Travel Vlog| Uttarakhand Tourism | BBC StoryWorks",
           location: "Shot in the visually stunning location of The Mall in Haridwar.",
           image: bbcuk,
           link: "https://youtu.be/Y8ObIEbNKA8?si=modW4tUcIGksuEWH",
        }
    ]
  return (
    <>
    <Header />
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Series Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {ads.map((ad) => (
            <div key={ad.id} className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img src={ad.image} alt={ad.title} className="w-full h-full object-contain" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">{ad.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{ad.description}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{ad.location}</p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg">
                    <a href={ad.link} target="_blank" rel="noopener noreferrer">
                      Watch Video
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Series