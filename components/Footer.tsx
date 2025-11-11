import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-new" className="text-gray-600 hover:text-purple-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-purple-700">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/programs-and-services" className="text-gray-600 hover:text-purple-700">
                  Programs & Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Community Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Donations/Events Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-4">Donations / Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/cornerstone/logo.png"
              alt="Cornerstone Ministries"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
          <p>© 2025 Cornerstone Deliverance & Development Ministries, Inc. All rights reserved.</p>
          <p className="mt-2">
            Developed by <span className="text-purple-700 font-semibold">Esceety</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
