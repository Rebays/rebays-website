import Icons from "./ui/Icon";

// Service card component
function ServiceCard({  title, description }: {  title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal-500/20 to-slate-800/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute inset-px rounded-[calc(1rem-1px)] bg-slate-950/90"></div>
      <div className="relative z-10 flex flex-col items-center space-y-4 p-6">
        <div className="rounded-full bg-gradient-to-br from-teal-500/20 to-teal-500/5 p-3 shadow-inner">
          
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-center text-sm text-slate-400">{description}</p>
      </div>
    </div>
  )
}

function Services() {
     // Service data
  const services = [
    {
      icon: Icons.Code,
      title: "Custom Development",
      description: "Bespoke software solutions designed to address your unique business challenges.",
    },
    {
      icon: Icons.Layers,
      title: "System Integration",
      description: "Seamlessly connect your existing systems for improved efficiency and data flow.",
    },
    {
      icon: Icons.Database,
      title: "Data Management",
      description: "Robust solutions for storing, processing, and analyzing your business data.",
    },
    {
      icon: Icons.Globe,
      title: "Web Applications",
      description: "Responsive, scalable web applications built with modern technologies.",
    },
    {
      icon: Icons.Cpu,
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to streamline your operations.",
    },
    {
      icon: Icons.MessageSquare,
      title: "Tech Consulting",
      description: "Expert guidance on technology strategy and implementation.",
    },
  ]
    return ( 
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 backdrop-blur-sm"></div>
                  <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400 backdrop-blur-sm">
                          Our Services
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                          Comprehensive Tech Solutions
                        </h2>
                        <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          From custom software development to system integration, we deliver end-to-end solutions tailored to
                          your business needs.
                        </p>
                      </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                      {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                      ))}
                    </div>
                  </div>
                </section>
     );
}

export default Services;