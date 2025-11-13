import SpinWheel from '@/components/SpinWheel';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(155,135,245,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,110,0.1),transparent_50%)]" />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4 bg-slate-900/50 backdrop-blur-sm border border-primary/30 px-6 py-2 rounded-full">
            <Icon name="Sparkles" size={20} className="text-primary animate-pulse-glow" />
            <span className="text-primary text-sm font-semibold tracking-wider">ФУТУРИСТИЧЕСКАЯ РУЛЕТКА</span>
            <Icon name="Sparkles" size={20} className="text-primary animate-pulse-glow" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">
            КОЛЕСО УДАЧИ
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-300 max-w-2xl mx-auto leading-relaxed font-light">
            Испытай свою удачу! Крути колесо и выигрывай гарантированный приз в неоновом стиле будущего
          </p>
        </header>

        <div className="flex justify-center items-center mb-16">
          <SpinWheel />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: 'Zap',
              title: 'Мгновенный результат',
              description: 'Узнай свой приз сразу после остановки колеса',
              gradient: 'from-cyan-500 to-cyan-400',
            },
            {
              icon: 'Gift',
              title: 'Гарантированный приз',
              description: 'Каждый участник получает ценный подарок',
              gradient: 'from-purple-600 to-purple-500',
            },
            {
              icon: 'Sparkles',
              title: 'Футуристичный дизайн',
              description: 'Неоновые эффекты и плавные анимации',
              gradient: 'from-pink-600 to-pink-500',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-neon-cyan group-hover:shadow-neon-purple transition-shadow`}>
                <Icon name={feature.icon as any} size={32} className="text-slate-900" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2 font-['Orbitron']">
                {feature.title}
              </h3>
              
              <p className="text-cyan-200/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-20 text-center space-y-4 border-t border-primary/20 pt-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="Info" size={16} />
            <p className="text-sm">
              Результат генерируется случайным образом. Все участники получают приз.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-primary/60">
            <button className="hover:text-primary transition-colors flex items-center gap-2 group">
              <Icon name="Mail" size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Связаться</span>
            </button>
            <button className="hover:text-primary transition-colors flex items-center gap-2 group">
              <Icon name="HelpCircle" size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Помощь</span>
            </button>
            <button className="hover:text-primary transition-colors flex items-center gap-2 group">
              <Icon name="Shield" size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Правила</span>
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground/60 mt-8">
            © 2024 Футуристическая рулетка. Технологии будущего уже здесь.
          </p>
        </footer>
      </div>

      <div className="fixed top-4 right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-4 left-4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1s' }} />
    </div>
  );
}
