import Link from 'next/link';

interface NavigationProps {
  currentPage?: 'home' | 'about' | 'programs' | 'team' | 'contact';
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const linkClass = (page: string) =>
    currentPage === page
      ? 'text-orange-500 font-semibold hover:text-orange-600'
      : 'text-gray-700 hover:text-purple-600';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-purple-700 font-bold text-2xl">
            CORNERSTONE
          </Link>
          <div className="text-sm text-gray-600">1-912-216-1229</div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={linkClass('home')}>
            Home
          </Link>
          <Link href="/about-new" className={linkClass('about')}>
            About
          </Link>
          <Link href="/programs-and-services" className={linkClass('programs')}>
            Programs and Services
          </Link>
          <Link href="/team" className={linkClass('team')}>
            Team
          </Link>
          <Link href="/contact" className={linkClass('contact')}>
            Contact
          </Link>
        </div>
        
        <Link
          href="/contact"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
}
