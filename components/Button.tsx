import Link from 'next/link';

interface ButtonProps {
  text: string;
  url: string;
  style?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Button({
  text,
  url,
  style = 'primary',
  className = '',
}: ButtonProps) {
  const baseClasses =
    'inline-block px-8 py-4 rounded-lg font-semibold text-center transition-all transform hover:scale-105 hover:shadow-xl';
  
  const styleClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800',
    secondary:
      'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700',
    outline:
      'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
  };

  // Handle undefined/null url
  if (!url || typeof url !== 'string') {
    return (
      <button
        className={`${baseClasses} ${styleClasses[style]} ${className}`}
        disabled
      >
        {text}
      </button>
    );
  }

  const isExternal = url.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={`${baseClasses} ${styleClasses[style]} ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={url}
      className={`${baseClasses} ${styleClasses[style]} ${className}`}
    >
      {text}
    </Link>
  );
}
