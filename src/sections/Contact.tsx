// src/sections/Contact.tsx
export const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-transparent font-tech text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-5xl md:text-7xl font-black uppercase italic tracking-tighter">INICIAR PROYECTO</h2>
          <p className="text-brand-gold/50 text-xs tracking-[0.5em] uppercase mt-2">Briefing_System_v1.0</p>
        </div>

        <form className="space-y-6 bg-black/40 backdrop-blur-xl p-8 md:p-12 border border-brand-gold/10">
          
          {/* CAMPO LARGO: NOMBRE O EMPRESA */}
          <div className="space-y-2">
            <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Nombre Completo o Empresa *</label>
            <input 
              required 
              type="text" 
              placeholder="Escribe el nombre legal de la empresa..."
              className="w-full bg-white/[0.03] border border-white/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none uppercase transition-colors" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Email *</label>
              <input required type="email" className="w-full bg-white/[0.03] border border-white/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none uppercase transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Teléfono</label>
              <input type="tel" className="w-full bg-white/[0.03] border border-white/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none uppercase" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Presupuesto (S/)</label>
              <input type="text" placeholder="Ej: 5000" className="w-full bg-white/[0.03] border border-white/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none uppercase" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Entrega deseada</label>
              <input type="date" className="w-full bg-white/[0.03] border border-white/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-white/40 uppercase" />
            </div>
          </div>

          {/* ... resto del formulario igual ... */}
          <div className="space-y-2">
            <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Detalles del proyecto *</label>
            <textarea required rows={4} className="w-full bg-white/[0.03] border border-white/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none uppercase resize-none"></textarea>
          </div>

          <button type="submit" className="w-full py-6 bg-brand-gold text-brand-black font-black uppercase tracking-[0.5em] text-xs hover:bg-white transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            ENVIAR_SOLICITUD
          </button>
        </form>
      </div>
    </section>
  );
};