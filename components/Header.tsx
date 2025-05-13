import Link from "next/link";
import Button from "@/components/ui/Button";
import Icons from "./ui/Icon";

function Header() {
    return ( 
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
     );
}

export default Header;