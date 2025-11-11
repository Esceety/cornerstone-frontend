import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'dark';
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  variant = 'dark',
}: CTASectionProps) {
  const bgClass = variant === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const titleClass = variant === 'dark' ? 'text-orange-400' : 'text-gray-900';
  const subtitleClass = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`${bgClass} py-16 ${variant === 'dark' ? 'border-t border-gray-800' : ''}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold ${titleClass} mb-3`}>
          {title}
        </h2>
        <p className={`${subtitleClass} text-lg mb-8`}>
          {subtitle}
        </p>
        <Link
          href={buttonLink}
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded font-bold text-lg hover:bg-orange-600 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
