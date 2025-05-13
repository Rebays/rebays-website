import Image from "next/image"
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icon";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";


export default function Home() {
 
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      
      <Header/>

      <main className="flex-1">
        <Hero/>
        <Services/>
        <About/>
        <Team/>
        <Contact/>
      </main>

     <Footer/>

    </div>
  )
}
