import React from 'react'
import heroxoom from '../images/heroxoom.jpg'
import mggloster from '../images/mggloster.jpg'
import sleepwell from '../images/sleepwell.jpg'
import tatanamak from '../images/tatanamak.jpg'
import tataparrot from '../images/tataparot.jpg'
import drinkad from '../images/drinkad.jpg'
import realme from '../images/realme.jpg'
import pgmunni from '../images/pgmunni.jpg'
import tataTrust from '../images/tataTrust.jpg'
import accCEm from '../images/accCEm.jpg'
import Header from '../components/Header'

const Ads = () => {
    const ads = [
        {
            id: 1,
            title: "Hero Xoom Advertisement",
            description: "Hero Xoom Advertisement is a 2024 Indian Hindi-language advertisement for Hero Xoom, a brand of Hero. Starring Ranbir Kapoor ,the advertisement is part of successful campaign of Hero Xoom.",
            location: "Shot in the terrain of THANO FOREST near Dehradun Airport Road. Also this ad was shot at famous NEEM BEACH in Rishikesh.",
            image: heroxoom,
            link: "https://youtu.be/L8WBysfLU-g?si=YCvU9AsqSUqUx22D",
        },
        {
            id: 2,
            title: "Advanced Mg Gloster Advertisement",
            description: "Advanced Mg Gloster is a 2024 Indian Hindi-language advertisement for  Mg Gloster, a brand of Morris Garages India. with the tagline    #DriveUnstoppable ,the advertisement is part of successful campaign of Advanced Mg Gloster Black Storm.",
            location: "Shot in the visually stunning location of Vindhyavasini Temple situated between Haridwar and Rishikesh.",
            image: mggloster,
            link: "https://youtu.be/fSyilrGqreE?si=HZPrFApxEj4nu6QB",
        },
        {
            id: 3,
            title: "Sleepwell Matress AD",
            description: "Sleepwell is a 2024 Indian Hindi-language advertisement for Sleepwell Matresses,for brand  Sleepwell.The advertisement is clear depiction of brands' quality and part of successful campaign of Sleepwell.",
            location: "Shot in the visually stunning location of Vindhyavasini Temple situated between Haridwar and Rishikesh.",
            image: sleepwell,
            link: "https://youtu.be/rv67HG__45o?si=U1j_hNJKvu7tnF-l",
        },
        {
           id: 4,
           title: "Tata Namak(ad-1)",
           description: "Tata Namak is a 2023 Indian Hindi-language advertisement for Tata Namak, a brand of Tata.The advertisement is part of successful campaign of Tata Namak.",
           location: "Shot in the visually stunning location of The Mall in Haridwar.",
           image: tatanamak,
           link: "https://youtu.be/rv67HG__45o?si=U1j_hNJKvu7tnF-l",
        },
        {
            id: 5,
            title: "Tata Namak(ad-2)",
            description: "Tata Namak(ad-2) is a 2023 Indian Hindi-language advertisement for Tata Namak, a brand of Tata.The advertisement is part of multiple promotional advertisements for Tata Namak.",
            location: "Shot in the visually stunning location of The Mall in Haridwar.",
            image: tataparrot,
            link: "https://youtu.be/JXLOPc2KCYE?si=I6eTIdE1c8XJvIpC",
        },
        {
            id: 6,
            title: "MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI AD",
            description: "MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI is a 2024 Indian Hindi-language advertisement for MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI, a caffeine rich energy drink .The advertisement is part of successful campaign of MN NƯỚC TĂNG LỰC VỊ CÀ PHÊ WAKE-UP 247 MỚI in the Indian Subcontinent",
            location: "Shot in the visually stunning location of The Mall in Haridwar.",
            image: drinkad,
            link: "https://youtu.be/NsE03AHdPhs?si=A-7i2R-6UjIci0Y6",
        },
        {
            id: 7,
            title: "Realme Phone AD",
            description: "realme is a 2024 Indian Hindi-language advertisement for  mobile phones , for brand  realme.The advertisement is part of successful campaign of realme especially targetting Diwali season market",
            location: "Shot in the visually stunning location of The Mall in Haridwar.",
            image: realme,
            link: "https://youtu.be/oluZLs6Ky3U?si=AA5J3ZklXpTDtvqz",
        },
        {
            id: 8,
            title: "P&G Shiksha AD",
            description: "P&G Shiksha Advertisement is a 2022 Indian Hindi-language advertisement for P&G Shiksha, a brand of P&G. The advertisement is a part of the brand's campaign to promote education and the importance of education in one's life.",
            location: "Shot in the visually stunning location of The Mall in Haridwar.",
            image: pgmunni,
            link: "https://youtu.be/bErKJIWV_sU?si=Vtv_uRxMyua8riOs",
        },
        {
            id: 9,
            title: "Tata Trusts Ad",
            description: "Tata Trusts Ad is a 2023 Indian Hindi-language advertisement for Tata Trusts, a brand of Tata, to promote their initiative of providing water  to the underprivileged people of Tehri in India.The advertisement is part of multiple promotional advertisements for Tata Trusts initiative.",
            location:"Shot at Kanatal Range of Tehri Garhwal, Uttarakhand.",
            image: tataTrust,
            link: "https://youtu.be/JXLOPc2KCYE?si=I6eTIdE1c8XJvIpC",
        },
        {
            id: 10,
            title: "ACC Cement Ad",
            description: "ACC Cement Ad is a 2023 Indian Hindi-language advertisement for ACC Cement, a brand of ACC.The advertisement is part of multiple promotional advertisements for ACC Cement.",
           location:"Shot at Shrinagar;s scenic beauty ,also covering Tehri Garhwal for additional shots.",
            image: accCEm,
            link: "https://youtu.be/JXLOPc2KCYE?si=I6eTIdE1c8XJvIpC",
        },
    ]
  return (
    <>
      <Header />
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Advertisement Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {ads.map((ad) => (
            <div key={ad.id} className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
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

export default Ads