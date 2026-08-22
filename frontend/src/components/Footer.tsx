import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white pt-20 pb-10 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-3xl tracking-tighter text-[#0F172A]">
                UMAV
              </span>
            </Link>
            <p className="text-[#64748B] text-lg max-w-sm">
              Content distribution, built for attention.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#0F172A] uppercase mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/#work" className="text-[#475569] hover:text-[#3B82F6] transition-colors">Work</Link></li>
              <li><Link href="/creators" className="text-[#475569] hover:text-[#3B82F6] transition-colors">Creators</Link></li>
              <li><Link href="/brands" className="text-[#475569] hover:text-[#3B82F6] transition-colors">Brands</Link></li>
              <li><Link href="/#network" className="text-[#475569] hover:text-[#3B82F6] transition-colors">Network</Link></li>
              <li><Link href="/about" className="text-[#475569] hover:text-[#3B82F6] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[#475569] hover:text-[#3B82F6] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#0F172A] uppercase mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#3B82F6] transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#3B82F6] transition-colors">TikTok</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#3B82F6] transition-colors">YouTube</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#3B82F6] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E2E8F0] text-sm text-[#64748B]">
          <p>© {new Date().getFullYear()} UMAV Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-[#0F172A] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#0F172A] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
