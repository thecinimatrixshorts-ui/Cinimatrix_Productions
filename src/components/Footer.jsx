import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const footerLinks = [
  {href: "/films", label: "Films"},
    {href: "/photos", label: "Photos "},
     {href: "/services", label: "Services  "},
    {href: "/testimonials", label: "Testimonials"},
    {href: "/brands", label: "Brands"},
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Cinimatix Productions. All rights reserved.
            </p>
            <br />
          <p>Developed by Fazal Ahmed</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
           <div className='flex items-center gap-4 animate-fade-in  animate-delay-400'>
                        <span className='text-sm text-muted-foreground'>Follow me</span>
                        {[
                            { icon: FaYoutube,
                                href:'https://youtube.com/@the.cinimatrix.production?si=CjFtHLP6bfpXVwPh'},
                            { icon: 
                                FaInstagram,
                                 href:'https://www.instagram.com/cinimatrixproduction?igsh=OTQ5cmdzYnc1MTFx'},
                                 { icon: 
                                FaFacebook,
                                 href:'https://www.facebook.com/share/1NU8csPC6j/?mibextid=wwXIfr'},
                        ].map((social, idx) => (
                            <a 
                            key={idx} 
                            target="_blank"
                            rel="noreferrer"
                            href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                                <social.icon className='h-5 w-5'/>
                                </a>  
                        ))}
                    </div>
                   </div>
        </div>

    </footer>
  );
};