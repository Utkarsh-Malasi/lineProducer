import {React, useState, useEffect } from 'react'
import './index.css'
  
// Import components
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CallButton from './components/CallButton'
import GallerySection from './components/GallerySection'
import PlacesSection from './components/PlacesSection'
import TestimonialsSection from './components/TestimonialsSection'
// Import all project images for the gallery
import kashmir from './images/kashmir.jpg'
import pgmunni from './images/pgmunni.jpg'
import heroxoom from './images/heroxoom.jpg'
import mggloster from './images/mggloster.jpg'
import bbcuk from './images/bbcuk.jpg'
import tohaagaye from './images/tohaagaye.jpg'
import tatanamak from './images/tatanamak.jpg'
import sleepwell from './images/sleepwell.jpg'
import ishqme from './images/ishqme.jpg'
import tataparot from './images/tataparot.jpg'
import drinkad from './images/drinkad.jpg'
import dooriyan from './images/dooriyan.jpg'
import humdono from './images/humdono.jpg'
import jeet from './images/jeet.jpg'
import koiapna from './images/koiapna.jpg'
import darkscroll from './images/darkscroll.jpg'
import bestseler from './images/bestseler.jpg'
import realme from './images/realme.jpg'
import accCEm from './images/accCEm.jpg'
import tataTrust from './images/tataTrust.jpg'
import founderImage from './images/founder.jpg'

// Import images from images2 folder for gallery
import img0 from './images2/IMG-20250430-WA0000.jpg'
import img1 from './images2/IMG-20250430-WA0001.jpg'
import img2 from './images2/IMG-20250430-WA0002.jpg'
import img4 from './images2/IMG-20250430-WA0004.jpg'
import img5 from './images2/IMG-20250430-WA0005.jpg'
import img7 from './images2/IMG-20250430-WA0007.jpg'
import img8 from './images2/IMG-20250430-WA0008.jpg'
import img9 from './images2/IMG-20250430-WA0009.jpg'
import img10 from './images2/IMG-20250430-WA0010.jpg'
import img11 from './images2/IMG-20250430-WA0011.jpg'
import img12 from './images2/IMG-20250430-WA0012.jpg'
import img13 from './images2/IMG-20250430-WA0013.jpg'
import img14 from './images2/IMG-20250430-WA0014.jpg'
import img15 from './images2/IMG-20250430-WA0015.jpg'
import img16 from './images2/IMG-20250430-WA0016.jpg'
import img17 from './images2/IMG-20250430-WA0017.jpg'
import img18 from './images2/IMG-20250430-WA0018.jpg'
import img19 from './images2/IMG-20250430-WA0019.jpg'
import img20 from './images2/IMG-20250430-WA0020.jpg'
import img21 from './images2/IMG-20250430-WA0021.jpg'
import img22 from './images2/IMG-20250430-WA0022.jpg'
import img23 from './images2/IMG-20250430-WA0023.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Array of all project images for the diagonal gallery
  const galleryImages = [
    kashmir, pgmunni, heroxoom, mggloster, bbcuk, tohaagaye, tatanamak, sleepwell,
    ishqme, tataparot, drinkad, dooriyan, humdono, jeet, koiapna, darkscroll,
    bestseler, realme, accCEm, tataTrust,img1,img2,img8,img9,img16,img18,img19
  ]
const galleryImages2=[
  img0, img1, img2, img4, img5, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23
]
  // Handle scroll events to update active section with throttling for performance
  useEffect(() => {
    // Throttle function to limit how often the scroll handler fires
    const throttle = (func, limit) => {
      let inThrottle
      return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit)
        }
      }
    }

    const handleScroll = () => {
      // Get all section elements
      const homeSection = document.getElementById('home')
      const aboutSection = document.getElementById('about')
      const servicesSection = document.getElementById('services')
      const projectsSection = document.getElementById('projects')
      const contactSection = document.getElementById('contact')
      
      // Get current scroll position with offset for earlier highlighting
      const currentPos = window.scrollY + 100
      
      // Update active section based on scroll position
      if (homeSection && currentPos < homeSection.offsetTop + homeSection.offsetHeight) {
        setActiveSection('home')
      } else if (aboutSection && currentPos < aboutSection.offsetTop + aboutSection.offsetHeight) {
        setActiveSection('about')
      } else if (servicesSection && currentPos < servicesSection.offsetTop + servicesSection.offsetHeight) {
        setActiveSection('services')
      } else if (projectsSection && currentPos < projectsSection.offsetTop + projectsSection.offsetHeight) {
        setActiveSection('projects')
      } else if (contactSection) {
        setActiveSection('contact')
      }
    }

    // Throttle scroll event to fire at most once every 100ms
    const throttledHandleScroll = throttle(handleScroll, 100)

    // Add passive: true for better scroll performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    // Initial call to set the active section on mount
    handleScroll()
    
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  // Enhanced scroll to section function with better performance
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Calculate the exact position accounting for fixed header
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      // Use requestAnimationFrame for smoother scrolling performance
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  // Project data
  const projects = [
    {
      id: 1,
      title: "THE KASHMIR FILES",
      description: "The Kashmir Files is a 2022 Indian Hindi-language historical drama film written and directed by Vivek Agnihotri. It stars Anupam Kher, Mithun Chakraborty.",
      location: "Mussorie [Library Chawk, Mall Road, Chaar Dukaan, Sister Bazaar]",
      image: kashmir,
      link: "https://youtu.be/A179apttY58",
      category: "film"
    },
    {
      id: 2,
      title: "MTV Dark Scroll",
      description: "MTV Dark Scroll – Muqabla Anjaan Se is an Indian paranormal reality television series. Filmed in Uttarakhand and hosted by Amit Sadh.",
      image: darkscroll,
      link: "https://youtu.be/_kPbVegpySM?si=fGl4dM91hXC7Pv4D",
      category: "tv"
    },
    {
      id: 3,
      title: "Bestseller",
      description: "Starring Mithun Chakraborty, Shruti Haasan, Arjan Bajwa, Gauhar Khan, Sonalee Kulkarni and Satyajeet Dubey in main roles.",
      image: bestseler,
      link: "https://youtu.be/7VYR2iwAShA?si=M_zG_IQgMMWPSHCW",
      category: "tv"
    },
    {
      id: 4,
      title: "Ishq Me Ghayal",
      description: "Tere Ishq Mein Ghayal is an Indian Hindi-language supernatural fantasy television series that aired on Colors TV.",
      image: ishqme,
      link: "https://youtu.be/1HfQ2fPp2fQ?si=LF8wuYiG8VMgoQJr",
      category: "tv"
    },
    {
      id: 5,
      title: "BBC StoryWork: Uttrakhand",
      description: "Open Your Eyes To India's Winter Wonderland, India Travel Vlog| Uttarakhand Tourism | BBC StoryWorks",
      image: bbcuk,
      link: "https://youtu.be/Y8ObIEbNKA8?si=modW4tUcIGksuEWH",
      category: "tv"
    },
    {
      id: 6,
      title: "Hero Xoom Advertisement",
      description: "Hero Xoom Advertisement is a 2024 Indian Hindi-language advertisement for Hero Xoom, starring Ranbir Kapoor.",
      image: heroxoom,
      link: "https://youtu.be/L8WBysfLU-g?si=YCvU9AsqSUqUx22D",
      category: "ad"
    },
    {
      id: 7,
      title: "Toh Aagaye Hum",
      description: "Toh Aagaye Hum is a Hindi language song sung by Jubin Nautiyal and Mithoon with over 60 million views.",
      image: tohaagaye,
      link: "https://youtu.be/Iwm9k12nLnw",
      category: "music"
    },
    {
      id: 8,
      title: "Sleepwell Matress AD",
      description: "Sleepwell is a 2024 Indian Hindi-language advertisement for Sleepwell Matresses, showcasing the brand's quality.",
      image: sleepwell,
      link: "https://youtu.be/rv67HG__45o?si=U1j_hNJKvu7tnF-l",
      category: "ad"
    },
    {
      id: 9,
      title: "Tata Namak",
      description: "Tata Salt advertisement showcasing the brand's quality and purity, filmed in scenic Uttarakhand locations.",
      image: tatanamak,
      link: "https://youtu.be/example1",
      category: "ad"
    },
    {
      id: 10,
      title: "Tata Parot",
      description: "Creative advertisement for Tata Parot products featuring stunning Himalayan backdrops.",
      image: tataparot,
      link: "https://youtu.be/example2",
      category: "ad"
    },
    {
      id: 11,
      title: "Drink AD Campaign",
      description: "Refreshing beverage advertisement filmed in the pristine natural settings of Uttarakhand.",
      image: drinkad,
      link: "https://youtu.be/example3",
      category: "ad"
    },
    {
      id: 12,
      title: "Dooriyan",
      description: "Emotional music video about distance and relationships, shot in picturesque mountain locations.",
      image: dooriyan,
      link: "https://youtu.be/example4",
      category: "music"
    },
    {
      id: 13,
      title: "Hum Dono",
      description: "Romantic music video featuring two lovers against the backdrop of Uttarakhand's natural beauty.",
      image: humdono,
      link: "https://youtu.be/example5",
      category: "music"
    },
    {
      id: 14,
      title: "Jeet",
      description: "Inspirational music video about overcoming challenges, filmed in various Uttarakhand locations.",
      image: jeet,
      link: "https://youtu.be/example6",
      category: "music"
    },
    {
      id: 15,
      title: "Koi Apna",
      description: "Heartfelt music video exploring themes of belonging and identity, set in rural Uttarakhand.",
      image: koiapna,
      link: "https://youtu.be/example7",
      category: "music"
    },
    {
      id: 16,
      title: "Realme Product Launch",
      description: "Dynamic product launch video for Realme smartphones, showcasing features against Uttarakhand's landscapes.",
      image: realme,
      link: "https://youtu.be/example8",
      category: "ad"
    },
    {
      id: 17,
      title: "ACC Cement Campaign",
      description: "Powerful advertisement highlighting ACC Cement's strength and reliability, filmed in mountainous terrain.",
      image: accCEm,
      link: "https://youtu.be/example9",
      category: "ad"
    },
    {
      id: 18,
      title: "Tata Trust Initiative",
      description: "Impactful documentary-style advertisement showcasing Tata Trust's community initiatives in Uttarakhand.",
      image: tataTrust,
      link: "https://youtu.be/example10",
      category: "ad"
    }
  ];

  // Services data
  const services = [
    {
      icon: "fas fa-video",
      title: "Film Production",
      description: "Full-service film production including pre-production planning, shooting, and post-production editing. We specialize in feature films, documentaries and short films."
    },
    {
      icon: "fas fa-ad",
      title: "Commercial Production",
      description: "Creative and impactful commercial production for brands and businesses. From concept development to final delivery, we create ads that resonate."
    },
    {
      icon: "fas fa-music",
      title: "Music Video Production",
      description: "Professional music video production services with creative direction, cinematography, and state-of-the-art equipment for artists and labels."
    },
    {
      icon: "fas fa-tv",
      title: "TV Series Production",
      description: "End-to-end television series production including script development, casting, filming, and post-production for various platforms and channels."
    },
    {
      icon: "fas fa-camera",
      title: "Location Services",
      description: "Comprehensive location scouting and management services in Uttarakhand. We handle permits, logistics, and local coordination for smooth productions."
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Event Management",
      description: "Complete event planning and execution services for film-related events, premieres, press conferences, and promotional activities in scenic Uttarakhand locations."
    }
  ];

  return (
    <div className="app-container bg-gray-50 text-gray-800">
      {/* Header Component */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Home Section Component */}
      <HomeSection scrollToSection={scrollToSection} galleryImages={galleryImages} />

 {/* Projects Section Component */}
 <ProjectsSection projects={projects} featuredProject={projects[0]} />

      {/* Gallery Section Component */}
      <GallerySection galleryImages={galleryImages2} />
      
      {/* Places Section Component */}
      <PlacesSection />

      {/* About Section Component */}
      <AboutSection founderImage={founderImage} />

      {/* Testimonials Section Component */}
      <TestimonialsSection />
     
      {/* Services Section Component */}
      <ServicesSection services={services} />
      {/* Contact Section Component */}
      <ContactSection />

      {/* Footer Component */}
      <Footer />
      <CallButton />
    </div>
  )
}

export default App
