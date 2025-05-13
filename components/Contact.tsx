import Button from "./ui/Button";
import Icons from "./ui/Icon";

function Contact() {
    return ( 
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
                    <span className="text-slate-300">www.rebays.com.sb</span>
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
     );
}

export default Contact;