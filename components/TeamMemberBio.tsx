import Image from 'next/image';

interface TeamMemberBioProps {
  name: string;
  title: string;
  image: string;
  bio: string[];
}

export function TeamMemberBio({ name, title, image, bio }: TeamMemberBioProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
                  <div className="inline-block">
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 font-semibold">
                      {title}
                    </p>
                    <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-purple-900 m-0">Biography</h3>
                  </div>
                </div>

                {bio.map((paragraph, index) => (
                  <div key={index} className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  </div>
                ))}

                {/* Decorative Element */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
