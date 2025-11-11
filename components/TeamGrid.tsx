import Link from 'next/link';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  link: string;
}

interface TeamGridProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  columns?: 3 | 4 | 5;
  showBioButton?: boolean;
  variant?: 'light' | 'dark';
}

export function TeamGrid({
  title,
  subtitle,
  members,
  columns = 5,
  showBioButton = true,
  variant = 'dark',
}: TeamGridProps) {
  const bgClass = variant === 'dark' ? 'bg-gray-900' : 'bg-white';
  const cardBgClass = variant === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200';
  const titleClass = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleClass = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const nameClass = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const roleClass = variant === 'dark' ? 'text-orange-400' : 'text-orange-500';
  const linkClass = variant === 'dark' 
    ? 'text-gray-300 hover:text-white' 
    : 'text-gray-600 hover:text-purple-700';
  
  const gridClass = columns === 5 
    ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5' 
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-4xl md:text-5xl font-bold ${titleClass} mb-4`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl ${subtitleClass} max-w-3xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridClass} gap-8 max-w-7xl mx-auto`}>
          {members.map((member, index) => (
            <div
              key={index}
              className={`group ${cardBgClass} rounded-xl overflow-hidden text-center hover:shadow-xl transition-shadow`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`font-bold text-lg mb-1 ${nameClass}`}>
                  {member.name}
                </h3>
                <p className={`${roleClass} text-sm mb-3`}>
                  {member.title}
                </p>
                {showBioButton && (
                  <Link
                    href={member.link}
                    className={`inline-block bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-orange-600 transition-colors`}
                  >
                    CLICK FOR DETAIL BIO
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
