import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Segment {
  text: string;
  color: string;
  textColor: string;
}

const segments: Segment[] = [
  { text: '🎁 Приз', color: 'from-cyan-500 to-cyan-400', textColor: 'text-slate-900' },
  { text: '💎 Бонус', color: 'from-purple-600 to-purple-500', textColor: 'text-white' },
  { text: '⭐ Подарок', color: 'from-pink-600 to-pink-500', textColor: 'text-white' },
  { text: '🎉 Сюрприз', color: 'from-cyan-500 to-cyan-400', textColor: 'text-slate-900' },
  { text: '🏆 Выигрыш', color: 'from-purple-600 to-purple-500', textColor: 'text-white' },
  { text: '✨ Награда', color: 'from-pink-600 to-pink-500', textColor: 'text-white' },
  { text: '🎊 Презент', color: 'from-cyan-500 to-cyan-400', textColor: 'text-slate-900' },
  { text: '💝 Подарок', color: 'from-purple-600 to-purple-500', textColor: 'text-white' },
];

export default function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [prize, setPrize] = useState('');
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    
    const winningIndex = 0;
    const segmentAngle = 360 / segments.length;
    const targetAngle = 360 * 5 + (winningIndex * segmentAngle) + (segmentAngle / 2);
    const newRotation = rotation + targetAngle;
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setPrize(segments[winningIndex].text);
      setShowWinDialog(true);
    }, 4000);
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute top-0 -translate-y-8 z-20">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[40px] border-l-transparent border-r-transparent border-t-primary drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-50 animate-pulse-glow" />
          
          <div className="relative">
            <div className="absolute inset-0 rounded-full shadow-neon-cyan" />
            
            <div
              ref={wheelRef}
              className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-primary/50 transition-transform duration-[4000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {segments.map((segment, index) => {
                const angle = (360 / segments.length) * index;
                const segmentAngle = 360 / segments.length;

                return (
                  <div
                    key={index}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.tan((segmentAngle * Math.PI) / 360) * 50}% 0%)`,
                      transformOrigin: 'center',
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${segment.color} border-r border-slate-900/30`}>
                      <div
                        className={`absolute top-[20%] left-1/2 -translate-x-1/2 text-sm font-bold ${segment.textColor} whitespace-nowrap`}
                        style={{
                          transform: `rotate(${segmentAngle / 2}deg)`,
                          transformOrigin: 'center',
                        }}
                      >
                        {segment.text}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border-4 border-primary shadow-neon-cyan flex items-center justify-center z-10">
                <Icon name="Sparkles" size={32} className="text-primary animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={spinWheel}
        disabled={isSpinning}
        size="lg"
        className="mt-12 px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent text-slate-900 hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-neon-cyan hover:shadow-neon-purple relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-3">
          <Icon name="Zap" size={24} className="animate-pulse-glow" />
          {isSpinning ? 'КРУТИТСЯ...' : 'КРУТИТЬ КОЛЕСО'}
          <Icon name="Zap" size={24} className="animate-pulse-glow" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>

      <Dialog open={showWinDialog} onOpenChange={setShowWinDialog}>
        <DialogContent className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-primary shadow-neon-cyan">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              ПОЗДРАВЛЯЕМ! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-6 py-6">
            <div className="text-6xl animate-bounce">{prize.split(' ')[0]}</div>
            <p className="text-2xl text-primary font-bold animate-pulse-glow">
              Вы выиграли {prize}!
            </p>
            <p className="text-muted-foreground">
              Свяжитесь с нами для получения приза
            </p>
            <Button
              onClick={() => setShowWinDialog(false)}
              className="mt-6 bg-gradient-to-r from-primary to-secondary text-slate-900 hover:scale-110 transition-transform shadow-neon-cyan"
            >
              <Icon name="Trophy" size={20} className="mr-2" />
              Забрать приз
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
