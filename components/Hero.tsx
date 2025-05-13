import Button from "./ui/Button";
import Image from "next/image";

function Hero() {
    return ( 
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
                  <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                          <div className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2 mr-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                            </span>
                            Software Solutions
                          </div>
                          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                            We think tech,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
                              so you can think business
                            </span>
                          </h1>
                          <p className="max-w-[600px] text-slate-400 md:text-xl">
                          Rebays offers innovative software solutions and seamless system integrations designed to effectively advance your business.
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row border ">
                          <Button  className="relative overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-900/20">
                            Get in Touch
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full border-white/10 bg-white/5 text-teal-400 hover:bg-white/10 hover:text-teal-300 backdrop-blur-sm"
                          >
                            Our Services
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-teal-500/20 to-slate-800/30 backdrop-blur-sm p-1">
                            <div className="h-full w-full rounded-[calc(2rem-4px)] overflow-hidden bg-slate-950/80 backdrop-blur-sm">
                              <Image
                                src="/placeholder.svg?height=450&width=450"
                                alt="Hero Image"
                                fill
                                className="object-cover mix-blend-luminosity opacity-80"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
     );
}

export default Hero;