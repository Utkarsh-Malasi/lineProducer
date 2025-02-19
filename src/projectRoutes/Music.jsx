import React from 'react'
import tohaagaye from '../images/tohaagaye.jpg'
import humdono from '../images/humdono.jpg'
import dooriyan from '../images/dooriyan.jpg'
import jeet from '../images/jeet.jpg'
import koiapna from '../images/koiapna.jpg'
import Header from '../components/Header'
const Music = () => {

    const ads = [
        {
            id: 1,
            title: "Toh Aagaye Hum",
            description: "Toh Aagaye Hum is a Hindi language song and is sung by Jubin Nautiyal and Mithoon.This melody has crossed over 60 million views across youtube.",
            location: "Shot in the cold and scenic environment of The Mall Road of Mussoorie.",
            image: tohaagaye,
            link: "https://youtu.be/Iwm9k12nLnw",
        },
        {
            id: 2,
            title: "Hum Dono",
            description: "Hum Dono is a Hindi language song sung by Arko starring Aparshakti Khurana and Jasmin Bhasin under the production of Zee Music Originals ,crossing over 10 million views across youtube.",
            location: "Shot at a scenic lap of George Everest and calm environment of Budhha Temple situated at outskirts of Musoorie , Uttarakhand.",
            image: humdono,
            link: "https://youtu.be/o1rv1I61JRc?si=hlSR_pgLiAT_1rEw",
        },
        {
            id: 3,
            title: "VYRL PRESENTS 'Dooriyan'",
            description: "VYRL Originals presents Dooriyan sung by the youth sensation Raghav Chaitanya and the music video stars Shivin Narang and Apoorva Arora, crossing over 13 million views on youtube.",
            location: "Shot in the chilling and mountainous environment of Dhanaulti , Uttarakhand.",
            image: dooriyan,
            link: "https://youtu.be/uszM-IbTyUM?si=S9OxYxICiUFFclhN",
        },
        {
           id: 4,
           title: "Tu Jeet Ki Zubaan",
           description: "Tu Jeet Ki Zuban is a Hindi language song and is sung by Romy and Harman Nazim,starring Karanveer Bohra crossing over 2 million views on youtube.",
           location: "Shot in the visually stunning location of The Dehradun Valley in Uttarakhand.",
           image: jeet,
           link: "https://youtu.be/prVvHKqhrsQ?si=yPENd3DRkvQ-Veaz",
        },
        {
            id: 5,
            title: "Koi Apna Nahi Hota",
            description: "Koi Apna Nahi Hota is a Hindi album released in 2023 starring Gautam Gulati and Akshita Mudgal composed by Harman Nazim, crossing over 2 million views on youtube.",
            location: "Shot in the visually stunning location of Rishikesh.",
            image: koiapna,
            link: "https://youtu.be/q0Fk3JD-6BY?si=NoDXRfc3-z-9WTCD",
        }   
    ]
  return (
    <>
    <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Music Videos</h1>
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

export default Music