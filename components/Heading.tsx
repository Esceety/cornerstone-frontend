interface HeadingProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function Heading({ text, level = 'h2', className = '' }: HeadingProps) {
  const baseClasses = 'font-bold text-gray-900';
  const sizeClasses = {
    h1: 'text-5xl md:text-6xl mb-6',
    h2: 'text-4xl md:text-5xl mb-4',
    h3: 'text-3xl md:text-4xl mb-3',
    h4: 'text-2xl md:text-3xl mb-2',
    h5: 'text-xl md:text-2xl mb-2',
    h6: 'text-lg md:text-xl mb-2',
  };

  const Component = level;

  return (
    <Component className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
      {text}
    </Component>
  );
}
