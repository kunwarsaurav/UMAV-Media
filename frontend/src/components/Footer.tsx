import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-primary/15 bg-bg-primary/95 pt-20 pb-10 font-sans relative overflow-hidden">
      {/* Decorative ambient background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-4 group mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="UMAV Logo" 
                  className="w-full h-full object-contain transition-transform duration-350 group-hover:scale-110 filter drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" 
                />
              </div>
              <span className="font-heading font-black text-2xl md:text-3xl tracking-[0.2em] bg-gradient-to-r from-text-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent uppercase mt-0.5">
                UMAV
              </span>
            </Link>
            <p className="text-text-secondary text-base max-w-sm">
              Content distribution, built for scale and attention.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest text-text-primary uppercase mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              <li><Link href="/#work" className="text-text-secondary hover:text-brand-accent transition-colors">Work</Link></li>
              <li><Link href="/#creators" className="text-text-secondary hover:text-brand-accent transition-colors">Creators</Link></li>
              <li><Link href="/#brands" className="text-text-secondary hover:text-brand-accent transition-colors">Brands</Link></li>
              <li><Link href="/#network" className="text-text-secondary hover:text-brand-accent transition-colors">Network</Link></li>
              <li><Link href="/#about" className="text-text-secondary hover:text-brand-accent transition-colors">About</Link></li>
              <li><Link href="/#contact" className="text-text-secondary hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest text-text-primary uppercase mb-6">Social Network</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-brand-accent transition-colors">TikTok</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-brand-accent transition-colors">YouTube</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-brand-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-primary/10 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} UMAV Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <Link href="/" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
