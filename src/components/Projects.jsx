import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import kashmir from '../images/kashmir.jpg'
import pgmunni from '../images/pgmunni.jpg'
import heroxoom from '../images/heroxoom.jpg'
import mggloster from '../images/mggloster.jpg'
import bbcuk from '../images/bbcuk.jpg'
import tohaagaye from '../images/tohaagaye.jpg'
import tatanamak from '../images/tatanamak.jpg'
import sleepwell from '../images/sleepwell.jpg'
import ishqme from '../images/ishqme.jpg'
import tataparrot from '../images/tataparot.jpg'
import drinkad from '../images/drinkad.jpg'
import dooriyan from '../images/dooriyan.jpg'
import humdono from '../images/humdono.jpg'
import jeet from '../images/jeet.jpg'
import koiapna from '../images/koiapna.jpg'
import darkscroll from '../images/darkscroll.jpg'
import bestseler from '../images/bestseler.jpg'
import realme from '../images/realme.jpg'
import accCEm from '../images/accCEm.jpg'
import tataTrust from '../images/tataTrust.jpg'
import Header from './Header'

const Projects = () => {
  const navigate = useNavigate()
  const projects = [
    {
      id: 1,
      title: "THE KASHMIR FILES",
      description: "The Kashmir Files is a 2022 Indian Hindi-language historical drama film written and directed by Vivek Agnihotri. It stars Anupam Kher, Mithun Chakraborty. The film is based on the 2018 documentary The Kashmir Files: The Story of Kashmir Files",
      location: "Mussorie[Library Chawk,Mall Road,Chaar Dukaan,Sister Bazaar]",
      backend: "We being enthused by the story of Kashmir Files, we decided to give our best .We modified the library chawk of Mussoorie into the famous Laal Chawk of Kashmir, used the british era building of Sister Bazaar and the famous chaar dukaan to replicate houses of Kashmir.We also used the famous Mall Road of Mussoorie as the main street of Kashmir.The main challenge was to create a realistic and immersive environment that would transport the audience to Kashmir ,but thanks to my team ,and thier mammoth efforts we were able to create a stunning set.",
      image: kashmir,
      link: "https://youtu.be/A179apttY58",
      route: "/projects/kashmirFiles"
    },
    {
      id: 2,
      title: "MTV Dark Scroll",
      description: "MTV Dark Scroll – Muqabla Anjaan Se (transl. MTV Dark Scroll – Competition with the Unknown) is an Indian paranormal reality television series.[1] Filmed in Uttarakhand and hosted by Amit Sadh. It broadcasts on MTV India from 16 August to 29 September 2024 and streams digitally on JioCinema.[2] It also features paranormal experts Sarbajeet Mohanty and Pooja Vijay.",
      image: darkscroll,
      link: "https://youtu.be/_kPbVegpySM?si=fGl4dM91hXC7Pv4D",
      route: "/projects/tv-series"
    },

    {
      id: 3,
      title: "Bestseller",
      description: " Starring Mithun Chakraborty, Shruti Haasan, Arjan Bajwa, Gauhar Khan, Sonalee Kulkarni and Satyajeet Dubey in main roles, the series premiered on Amazon Prime Video on 18 February 2022.",
      image: bestseler,
      link: "https://youtu.be/7VYR2iwAShA?si=M_zG_IQgMMWPSHCW",
      route: "/projects/tv-series"
    },
    {
      id: 4,
      title: "Ishq Me Ghayal",
      description: "Tere Ishq Mein Ghayal (transl. Wounded in Your Love) is an Indian Hindi-language supernatural fantasy television series that aired from 13 February 2023 to 9 June 2023 on Colors TV.",
      image: ishqme,
      link: "https://youtu.be/1HfQ2fPp2fQ?si=LF8wuYiG8VMgoQJr",
      route: "/projects/tv-series"
    },
    {
      id: 5,
      title: "BBC StoryWork : Uttrakhand",
      description: "Open Your Eyes To India's Winter Wonderland, India Travel Vlog| Uttarakhand Tourism | BBC StoryWorks",
      image: bbcuk,
      link: "https://youtu.be/Y8ObIEbNKA8?si=modW4tUcIGksuEWH",
      route: "/projects/tv-series"
    },

    {
      id: 6,
      title: "Hero Xoom Advertisement",
      description: "Hero Xoom Advertisement is a 2024 Indian Hindi-language advertisement for Hero Xoom, a brand of Hero. Starring Ranbir Kapoor ,the advertisement is part of successful campaign of Hero Xoom.",
      image: heroxoom,
      link: "https://youtu.be/L8WBysfLU-g?si=YCvU9AsqSUqUx22D",
      route: "/projects/ads"
    },
    {
      id: 7,
      title: "Advanced Mg Gloster Advertisement",
      description: "Advanced Mg Gloster is a 2024 Indian Hindi-language advertisement for  Mg Gloster, a brand of Morris Garages India. with the tagline    #DriveUnstoppable ,the advertisement is part of successful campaign of Advanced Mg Gloster Black Storm.",
      image: mggloster,
      link: "https://youtu.be/fSyilrGqreE?si=HZPrFApxEj4nu6QB",
      route: "/projects/ads"
    },

    {
      id: 8,
      title: "Toh Aagaye Hum",
      description: " Toh Aagaye Hum is a Hindi language song and is sung by Jubin Nautiyal and Mithoon.This melody has crossed over 60 million views across youtube.",
      image: tohaagaye,
      link: "https://youtu.be/Iwm9k12nLnw",
      route: "/projects/musicVideo"
    },
    {
      id: 9,
      title: "Hum Dono",
      description: "Hum Dono is a Hindi language song sung by Arko starring Aparshakti Khurana and Jasmin Bhasin under the production of Zee Music Originals ,crossing over 10 million views across youtube.",
      image: humdono,
      link: "https://youtu.be/o1rv1I61JRc?si=hlSR_pgLiAT_1rEw",
      route: "/projects/musicVideo"
    },
    {
      id: 10,
      title: "VYRL PRESENTS 'Dooriyan'",
      description: "VYRL Originals presents Dooriyan sung by the youth sensation Raghav Chaitanya and the music video stars Shivin Narang and Apoorva Arora, crossing over 13 million views on youtube.",
      image: dooriyan,
      link: "https://youtu.be/uszM-IbTyUM?si=S9OxYxICiUFFclhN",
      route: "/projects/musicVideo"
    },
    {
      id: 11,
      title: "Tu Jeet Ki Zubaan",
      description: "Tu Jeet Ki Zuban is a Hindi language song and is sung by Romy and Harman Nazim,starring Karanveer Bohra crossing over 2 million views on youtube.",
      image: jeet,
      link: "https://youtu.be/prVvHKqhrsQ?si=yPENd3DRkvQ-Veaz",
      route: "/projects/musicVideo"
    },
    {
      id: 12,
      title: "Koi Apna Nahi Hota",
      description: "Koi Apna Nahi Hota is a Hindi album released in 2023 starring Gautam Gulati and Akshita Mudgal composed by Harman Nazim, crossing over 2 million views on youtube.",
      image: koiapna,
      link: "https://youtu.be/q0Fk3JD-6BY?si=NoDXRfc3-z-9WTCD",
      route: "/projects/musicVideo"
    }, 
    {
      id: 13,
      title: "Sleepwell Matress AD",
      description: "Sleepwell is a 2024 Indian Hindi-language advertisement for Sleepwell Matresses,for brand  Sleepwell.The advertisement is clear depiction of brands' quality and part of successful campaign of Sleepwell.",
      image: sleepwell,
      link: "https://youtu.be/rv67HG__45o?si=U1j_hNJKvu7tnF-l",
      route: "/projects/ads"
    },
    {
      id: 14,
      title: "Tata Namak(ad-1)",
      description: "Tata Namak is a 2023 Indian Hindi-language advertisement for Tata Namak, a brand of Tata.The advertisement is part of successful campaign of Tata Namak.",
      image: tatanamak,
      link: "https://youtu.be/0HxCj_vfoTc?si=msskS-lpELlC1FK7",
      route: "/projects/ads"
    },
     {
      id: 15,
      title: "Tata Namak(ad-2)",
      description: "Tata Namak(ad-2) is a 2023 Indian Hindi-language advertisement for Tata Namak, a brand of Tata.The advertisement is part of multiple promotional advertisements for Tata Namak.",
      image: tataparrot,
      link: "https://youtu.be/JXLOPc2KCYE?si=I6eTIdE1c8XJvIpC",
      route: "/projects/ads"
    },
    {
      id: 16,
      title: "Tata Trusts Ad  ",
      description: "Tata Trusts Ad is a 2023 Indian Hindi-language advertisement for Tata Trusts, a brand of Tata, to promote their initiative of providing water  to the underprivileged people of Tehri in India.The advertisement is part of multiple promotional advertisements for Tata Trusts initiative.",
      image: tataTrust,
      link: "https://youtu.be/JXLOPc2KCYE?si=I6eTIdE1c8XJvIpC",
      route: "/projects/ads"
    },
    {
      id: 17,
      title: "ACC Cement Ad  ",
      description: "ACC Cement Ad is a 2023 Indian Hindi-language advertisement for ACC Cement, a brand of ACC.The advertisement is part of multiple promotional advertisements for ACC Cement.",
      image: accCEm,
      link: "https://youtu.be/JXLOPc2KCYE?si=I6eTIdE1c8XJvIpC",
      route: "/projects/ads"
    },
    {
      id: 18,
      title: "MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI AD",
      description: "MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI is a 2024 Indian Hindi-language advertisement for MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI, a caffeine rich energy drink .The advertisement is part of successful campaign of MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI in the Indian Subcontinent",
      image: drinkad,
      link: "https://youtu.be/NsE03AHdPhs?si=A-7i2R-6UjIci0Y6",
      route: "/projects/ads"
    },
    {
      id: 19,
      title: "Realme Phone AD",
      description: "realme is a 2024 Indian Hindi-language advertisement for  mobile phones , for brand  realme.The advertisement is part of successful campaign of realme especially targetting Diwali season market",
      image: realme,
      link: "https://youtu.be/oluZLs6Ky3U?si=AA5J3ZklXpTDtvqz",
      route: "/projects/ads"
    },
    {
      id: 20,
      title: "P&G SHIKSHA AD",
      description: "P&G Shiksha Advertisement is a 2022 Indian Hindi-language advertisement for P&G Shiksha, a brand of P&G. The advertisement is a part of the brand's campaign to promote education and the importance of education in one's life.",
      image: pgmunni,
      link: "https://youtu.be/bErKJIWV_sU?si=Vtv_uRxMyua8riOs",
      route: "/projects/ads"
    },
  ];

  return (
    <>  
      <Header />
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col h-full"
            onClick={() => navigate(project.route)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-fit"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
              </div>
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
                <h1 className='text-center text-black font-bold text-xl mt-2'>Click to know more...</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects