import { RiBookOpenLine, RiTranslate2 } from "react-icons/ri";

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <div className="section-badge">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            Qualifications & Learning
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Education & Languages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My academic background and linguistic capabilities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education Card */}
          <div className="group rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
             <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-500" />
             <div className="p-6 sm:p-8">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                   <RiBookOpenLine className="text-primary" size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-foreground">Education</h3>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div>
                   <h4 className="font-semibold text-lg">M.Sc.</h4>
                   <p className="text-muted-foreground">Savitribai Phule Pune University</p>
                   <p className="text-sm text-primary font-medium mt-1">2019</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Languages Card */}
          <div className="group rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
             <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-500" />
             <div className="p-6 sm:p-8">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                   <RiTranslate2 className="text-primary" size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-foreground">Languages</h3>
                 </div>
               </div>
               
               <div className="flex flex-wrap gap-3">
                 {["English", "Hindi", "Marathi"].map((lang) => (
                   <span key={lang} className="px-4 py-2 rounded-lg bg-muted text-foreground border border-border font-medium">
                     {lang}
                   </span>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
