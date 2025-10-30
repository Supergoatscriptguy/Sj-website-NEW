import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'blue' | 'purple' | 'red' | 'orange' | 'cyan';
  icon?: ReactNode;
  className?: string;
}

export function Badge({ children, variant = 'default', icon, className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 border-white/20 text-slate-200',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    red: 'bg-red-500/10 border-red-500/20 text-red-300',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-300',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-sm font-medium ${variants[variant]} ${className}`}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </div>
  );
}
