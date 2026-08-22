import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#151515] bg-[#050505] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-3xl tracking-tighter text-[#ededed]">
                UMAV
              </span>
            </Link>
            <p className="text-[#a3a3a3] text-lg max-w-sm">
              Content distribution, built for attention.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#ededed] uppercase mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/creators" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">Creators</Link></li>
              <li><Link href="/brands" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">Brands</Link></li>
              <li><Link href="/about" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#ededed] uppercase mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">TikTok</a></li>
              <li><a href="#" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">YouTube</a></li>
              <li><a href="#" className="text-[#a3a3a3] hover:text-[#00FF66] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#151515] text-sm text-[#525252]">
          <p>© {new Date().getFullYear()} UMAV Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#a3a3a3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#a3a3a3] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
