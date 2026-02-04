import { motion } from 'framer-motion';
import { 
  SiGithub, SiWhatsapp, SiGmail, SiLinkedin, 
  SiInstagram, SiX, SiTiktok, SiFacebook, SiYoutube 
} from 'react-icons/si';

// Definimos los grupos de redes
const socialGroups = [
  {
    title: 'Professional / Contact',
    links: [
      { 
        name: 'GitHub', 
        icon: <SiGithub />, 
        url: 'https://github.com/harrymusic14', 
        color: 'hover:text-white'
      },
      { 
        name: 'LinkedIn', 
        icon: <SiLinkedin />, 
        url: 'https://linkedin.com/in/tu-usuario', 
        color: 'hover:text-[#0A66C2]'
      },
      { 
        name: 'Email', 
        icon: <SiGmail />, 
        url: 'mailto:contacto@masterdev.com', 
        color: 'hover:text-[#EA4335]'
      },
      { 
        name: 'WhatsApp', 
        icon: <SiWhatsapp />, 
        url: 'https://wa.me/51982493208', 
        color: 'hover:text-[#25D366]'
      },
    ]
  },
  {
    title: 'Social Media',
    links: [
      { 
        name: 'YouTube', 
        icon: <SiYoutube />, 
        url: 'https://youtube.com/tu-canal', 
        color: 'hover:text-[#FF0000]'
      },
      { 
        name: 'Instagram', 
        icon: <SiInstagram />, 
        url: 'https://instagram.com/tu-usuario', 
        color: 'hover:text-[#E4405F]'
      },
      { 
        name: 'TikTok', 
        icon: <SiTiktok />, 
        url: 'https://tiktok.com/@tu-usuario', 
        color: 'hover:text-[#ff0050]'
      },
      { 
        name: 'Facebook', 
        icon: <SiFacebook />, 
        url: 'https://facebook.com/tu-usuario', 
        color: 'hover:text-[#1877F2]'
      },
      { 
        name: 'X', 
        icon: <SiX />, 
        url: 'https://x.com/tu-usuario', 
        color: 'hover:text-white'
      }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden font-tech border-t border-brand-gold/10">
      
      {/* Decoración de fondo (Red y Luces) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* LADO IZQUIERDO: MARCA Y DERECHOS */}
          <div className="text-center lg:text-left space-y-4 w-full lg:w-1/3">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">
              MASTER<span className="text-brand-gold">DEV</span>_
            </h2>
            <div className="space-y-2">
              <p className="text-brand-gold/60 text-[10px] tracking-[0.3em] uppercase font-bold">
                System_Status: <span className="text-green-500 animate-pulse">ONLINE</span>
              </p>
              <div className="h-[1px] w-20 bg-brand-gold/20 mx-auto lg:mx-0 my-2" />
              <p className="text-white/40 text-[10px] uppercase tracking-widest">
                © 2026 Developed by <span className="text-brand-gold font-bold">HRH & Jesus</span>
              </p>
              <p className="text-white/20 text-[9px] uppercase tracking-widest">
                All Rights Reserved. Secure Connection.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: GRUPOS DE REDES */}
          <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-2/3 justify-center lg:justify-end">
            {socialGroups.map((group, groupIndex) => (
              <div key={group.title} className="flex flex-col items-center lg:items-end">
                {/* Título del Grupo */}
                <h3 className="text-brand-gold/40 text-[9px] uppercase tracking-[0.2em] font-bold mb-4 border-b border-brand-gold/10 pb-1">
                  {group.title}
                </h3>
                
                {/* Iconos del Grupo */}
                <div className="flex gap-4 flex-wrap justify-center">
                  {group.links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (groupIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className={`text-xl text-white/50 transition-colors duration-300 ${link.color} relative group`}
                    >
                      {/* Icono */}
                      {link.icon}
                      
                      {/* Tooltip Tecnológico */}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[8px] font-bold uppercase tracking-widest px-2 py-1 backdrop-blur-md whitespace-nowrap pointer-events-none">
                        {link.name}
                      </span>

                      {/* Brillo inferior al hover */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#d4af37]" />
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BARRA INFERIOR DECORATIVA */}
        <div className="mt-16 flex items-center justify-between opacity-30">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <div className="mx-4 text-[8px] text-brand-gold tracking-[0.5em] whitespace-nowrap">END_OF_LINE</div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        </div>
      </div>
    </footer>
  );
};