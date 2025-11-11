import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: 'small' | 'medium' | 'large';
  cta?: {
    text: string;
    link: string;
  };
}

export function Hero({
  title,
  subtitle,
  image,
  height = 'medium',
  cta,
}: HeroProps) {
  const heightClass = {
    small: 'h-[400px]',
    medium: 'h-[500px]',
    large: 'h-[600px]',
  }[height];

  return (
    <section className={`relative ${heightClass} mt-16`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <div>
          {subtitle && (
            <p className="text-white text-xl mb-2 tracking-wider">{subtitle}</p>
          )}
          <h1 className="text-white text-7xl md:text-8xl font-bold mb-8 tracking-tight">
            {title}
          </h1>
          {cta && (
            <Link
              href={cta.link}
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
