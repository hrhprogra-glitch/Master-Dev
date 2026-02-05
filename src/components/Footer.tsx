import { motion } from 'framer-motion';
import { 
  SiGithub, SiWhatsapp, SiGmail, SiLinkedin, 
  SiInstagram, SiX, SiTiktok, SiFacebook, SiYoutube,
  SiFiverr 
} from 'react-icons/si';

const socialGroups = [
  {
    title: 'Professional / Contact',
    links: [
      { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/hrhprogra-glitch', color: 'hover:text-white' },
      { name: 'LinkedIn', icon: <SiLinkedin />, url: 'https://www.linkedin.com/in/master-dev-51622a3ab/', color: 'hover:text-[#0A66C2]' },
      { name: 'Fiverr', icon: <SiFiverr />, url: 'https://es.fiverr.com/sellers/hrh154/edit', color: 'hover:text-[#1DBF73]' },
      { name: 'Email', icon: <SiGmail />, url: 'mailto:hrh.progra@gmail.com', color: 'hover:text-[#EA4335]' },
      { name: 'WhatsApp', icon: <SiWhatsapp />, url: 'https://wa.me/51946000608', color: 'hover:text-[#25D366]' },
    ]
  },
  {
    title: 'Social Media',
    links: [
      { name: 'YouTube', icon: <SiYoutube />, url: 'https://www.youtube.com/channel/UCvVGziz5MWhAa0HAjEPmfZw', color: 'hover:text-[#FF0000]' },
      { name: 'Instagram', icon: <SiInstagram />, url: 'https://www.instagram.com/master.dev2/', color: 'hover:text-[#E4405F]' },
      { name: 'TikTok', icon: <SiTiktok />, url: 'https://www.tiktok.com/@hrhprogra', color: 'hover:text-[#ff0050]' },
      { name: 'Facebook', icon: <SiFacebook />, url: 'https://www.facebook.com/profile.php?id=61584367826080', color: 'hover:text-[#1877F2]' },
      { name: 'X', icon: <SiX />, url: 'https://x.com/HRHPROGRA', color: 'hover:text-white' }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden font-tech border-t border-brand-gold/10 z-20">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          <div className="text-center lg:text-left space-y-4 w-full lg:w-1/3">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">
              MASTER<span className="text-brand-gold">DEV</span>_
            </h2>
            <p className="text-brand-gold/60 text-[10px] tracking-[0.3em] uppercase font-bold">
              System_Status: <span className="text-green-500 animate-pulse">ONLINE</span>
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest">
              © 2026 Developed by <span className="text-brand-gold font-bold">HRH & Jesus</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-2/3 justify-center lg:justify-end">
            {/* Se eliminó groupIndex para evitar el aviso de variable no usada */}
            {socialGroups.map((group) => (
              <div key={group.title} className="flex flex-col items-center lg:items-end relative z-20">
                <h3 className="text-brand-gold/40 text-[9px] uppercase tracking-[0.2em] font-bold mb-4 border-b border-brand-gold/10 pb-1">
                  {group.title}
                </h3>
                <div className="flex gap-4 flex-wrap justify-center">
                  {/* Se eliminó index para evitar el aviso de variable no usada */}
                  {group.links.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className={`text-xl text-white/50 transition-colors duration-300 ${link.color} relative group z-30 p-2 block`}
                    >
                      {link.icon}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[8px] font-bold uppercase tracking-widest px-2 py-1 backdrop-blur-md whitespace-nowrap pointer-events-none">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};