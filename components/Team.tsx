import Image from "next/image";

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

function Team() {

    // Team data
  const team = [
    { name: "Alex Johnson", role: "Lead Developer" },
    { name: "Sarah Chen", role: "Systems Architect" },
    { name: "Michael Torres", role: "Integration Specialist" },
  ]


    return ( 
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 backdrop-blur-sm"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400 backdrop-blur-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Meet the Team</h2>
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
     );
}

export default Team;