import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Achievments from './components/Achievments';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class='container  mt-24 mx-auto px-10'>
     <HeroSection />
     <Achievments/>
     <div className='mx-14'>
     <AboutSection/>
     </div>
     <div className='mt-20'>
     <ProjectSection/>
     </div>
     <EmailSection/>
      </div>
    <Footer/>
    </main>
  )
}
