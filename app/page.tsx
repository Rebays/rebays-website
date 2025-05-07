import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

// Simple SVG icons as inline components
const Icons = {
  Layers: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  ),
  Code: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Database: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Globe: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Cpu: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  ),
  MessageSquare: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  Settings: (props: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
}

// Button component
function Button({
  children,
  className = "",
  variant = "primary",
  size = "default",
  fullWidth = false,
  ...props
}: {
  children: ReactNode
  className?: string
  variant?: "primary" | "outline"
  size?: "default" | "sm" | "lg"
  fullWidth?: boolean
  // [key: string]: any
}) {
  const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium"

  const sizeClasses = {
    sm: "h-8 px-3 py-1 text-xs rounded-full",
    default: "h-10 px-4 py-2 text-sm rounded-full",
    lg: "h-12 px-6 py-3 text-base rounded-full",
  }

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-900/20",
    outline: "border border-white/10 bg-white/5 text-teal-400 hover:bg-white/10 hover:text-teal-300 backdrop-blur-sm",
  }

  const widthClass = fullWidth ? "w-full" : ""

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`

  return (
    <button className={classes} {...props}>
      <span className="absolute inset-0 flex items-center justify-center">{children}</span>
    </button>
  )
}

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

// Team member card component
function TeamMemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal-500/20 via-teal-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm"></div>
      <div className="relative flex flex-col items-center space-y-4 rounded-2xl bg-slate-900/40 p-6 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-4px]">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
          <div className="h-full w-full overflow-hidden rounded-full">
            <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
          </div>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-teal-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

// Social icon component
function SocialIcon({ name, path }: { name: string; path: string }) {
  return (
    <Link href="#" className="group relative">
      <span className="absolute -inset-2 rounded-full bg-teal-500/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/10 group-hover:text-teal-400">
        <span className="sr-only">{name}</span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d={path} />
        </svg>
      </div>
    </Link>
  )
}

// Main page component
export default function Home() {
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

  // Team data
  const team = [
    { name: "Alex Johnson", role: "Lead Developer" },
    { name: "Sarah Chen", role: "Systems Architect" },
    { name: "Michael Torres", role: "Integration Specialist" },
  ]

  // Social media data
  const socialMedia = [
    {
      name: "Twitter",
      path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    },
    {
      name: "GitHub",
      path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      name: "LinkedIn",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] h-[80%] w-[70%] rounded-full bg-teal-900/10 blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] h-[70%] w-[60%] rounded-full bg-slate-800/20 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-900/20">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/80 to-teal-600/80 blur-sm"></span>
              <span className="relative text-xl font-bold text-white">R</span>
            </div>
            <span className="text-xl font-bold text-white">Rebays</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors">
              About
            </Link>
            <Link href="#team" className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:inline-flex border-white/10 bg-white/5 text-teal-400 hover:bg-white/10 hover:text-teal-300 backdrop-blur-sm"
          >
            Get Started
          </Button>
          <button className="md:hidden text-slate-200 p-2">
            <Icons.Settings className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1">
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
                    Rebays delivers innovative software solutions and seamless system integrations to power your
                    business forward.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-900/20">
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

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 backdrop-blur-sm"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400 backdrop-blur-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Meet the Experts</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of skilled developers and tech specialists are ready to tackle your most challenging
                  projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {team.map((member, index) => (
                <TeamMemberCard key={index} name={member.name} role={member.role} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-teal-900/10 blur-[100px]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400 backdrop-blur-sm w-fit">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-slate-400 md:text-lg">
                  Get in touch with our team to discuss how we can help you leverage technology to achieve your business
                  goals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-teal-500/10 p-1.5">
                      <Icons.Globe className="h-4 w-4 text-teal-400" />
                    </div>
                    <span className="text-slate-300">www.rebays.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-teal-500/10 p-1.5">
                      <Icons.MessageSquare className="h-4 w-4 text-teal-400" />
                    </div>
                    <span className="text-slate-300">info@rebays.com</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal-500/20 via-teal-500/10 to-transparent blur-sm"></div>
                <div className="relative rounded-2xl bg-slate-900/40 backdrop-blur-sm p-6">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-slate-300">
                          First name
                        </label>
                        <input
                          id="first-name"
                          placeholder="John"
                          className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-300 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-slate-300">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          placeholder="Doe"
                          className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-300 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <input
                        id="email"
                        placeholder="john.doe@example.com"
                        className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-300 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-300 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 min-h-[120px] backdrop-blur-sm"
                      />
                    </div>
                    <Button className="w-full relative overflow-hidden rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-900/20">
                      <span className="absolute inset-0 flex items-center justify-center">Send Message</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-xl py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-900/20">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/80 to-teal-600/80 blur-sm"></span>
              <span className="relative text-xl font-bold text-white">R</span>
            </div>
            <span className="text-xl font-bold text-white">Rebays</span>
          </div>
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Rebays. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social, index) => (
              <SocialIcon key={index} name={social.name} path={social.path} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
