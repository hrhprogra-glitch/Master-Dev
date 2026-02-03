import { RockstarReveal } from '../components/ScrollReveal';

export const Expertise = () => {
  return (
    <div className="bg-transparent"> {/* El RockstarReveal ya maneja su propio fondo, asegúrate de que sea bg-transparent */}
      <RockstarReveal>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto border-l-2 border-brand-gold/20 pl-12 py-10">
            <h2 className="text-brand-gold text-7xl font-black uppercase italic mb-6">Expertise_</h2>
            <p className="text-white/60 text-2xl font-light italic leading-relaxed">
              Especialistas en la creación de ecosistemas digitales donde la velocidad y la seguridad no son negociables.
            </p>
          </div>
        </div>
      </RockstarReveal>
    </div>
  );
};