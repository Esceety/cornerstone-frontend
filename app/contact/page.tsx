import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import fs from 'fs';
import path from 'path';

interface ContactContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  contactInfo: {
    title: string;
    locations: Array<{
      title: string;
      address: string;
    }>;
    phone: string;
    fax: string;
    email: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    fields: Array<{
      name: string;
      label: string;
      type: string;
      placeholder: string;
      required: boolean;
      rows?: number;
    }>;
    submitText: string;
  };
}

async function getContactContent(): Promise<ContactContent> {
  const contentPath = path.join(process.cwd(), 'content', 'contact-content.json');
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  return content;
}

export const metadata = {
  title: 'Contact Us - Cornerstone Deliverance',
  description: 'Get in touch with Cornerstone Deliverance & Development Ministries. We serve communities in Florida and Georgia.',
};

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="contact" />

      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        image={content.hero.image}
        height="medium"
      />

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              {content.contactInfo.title}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Location Cards */}
              {content.contactInfo.locations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900">{location.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{location.address}</p>
                </div>
              ))}

              {/* Phone Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                </div>
                <a href={`tel:${content.contactInfo.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-orange-500 text-lg font-semibold">
                  {content.contactInfo.phone}
                </a>
              </div>

              {/* Fax Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">Fax</h3>
                </div>
                <p className="text-gray-700 text-lg font-semibold">{content.contactInfo.fax}</p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">Email</h3>
                </div>
                <a href={`mailto:${content.contactInfo.email}`} className="text-gray-700 hover:text-purple-600 break-all">
                  {content.contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              {content.contactForm.title}
            </h2>
            <p className="text-gray-600 text-center text-lg mb-12">
              {content.contactForm.subtitle}
            </p>
            
            <form className="space-y-6">
              {content.contactForm.fields.map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block text-gray-700 font-semibold mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={field.rows || 6}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  )}
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {content.contactForm.submitText}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '450px' }}>
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
