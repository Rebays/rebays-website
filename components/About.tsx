import Button from "./ui/Button";
import Image from "next/image";

function About() {
    return ( 
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-teal-900/10 blur-[100px]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-teal-500/20 to-slate-800/30 backdrop-blur-sm p-1">
                    <div className="h-full w-full rounded-[calc(2rem-4px)] overflow-hidden bg-slate-950/80 backdrop-blur-sm">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="About Rebays"
                        fill
                        className="object-cover mix-blend-luminosity opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400 backdrop-blur-sm w-fit">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Empowering Businesses Through Technology
                </h2>
                <p className="text-slate-400 md:text-lg">
                  At Rebays, we&apos;re a team of passionate developers and tech enthusiasts dedicated to solving complex
                  business challenges through innovative software solutions.
                </p>
                <p className="text-slate-400 md:text-lg">
                  Our mission is to handle the technical complexities so you can focus on what matters most - growing
                  your business and serving your customers.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-900/20">
                    <span className="absolute inset-0 flex items-center justify-center">Our Approach</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
     );
}

export default About;