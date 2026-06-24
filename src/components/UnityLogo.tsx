import logoImg from '../assets/logo.png';

export default function UnityLogo({ className = "w-8 h-8", showText = false }: { className?: string; showText?: boolean }) {
  if (showText) {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src={logoImg} 
          className="h-10 w-auto object-contain" 
          alt="Unity Small Finance Bank Logo" 
        />
      </div>
    );
  }

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <img 
        src="/favicon.png" 
        className="w-full h-full object-contain rounded-full" 
        alt="Unity Bank Icon" 
      />
    </div>
  );
}