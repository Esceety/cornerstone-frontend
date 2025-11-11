import Image from 'next/image';

interface FounderMessageProps {
  title: string;
  subtitle: string;
  image: string;
  message: string;
  signature: string;
  founderName?: string;
  founderTitle?: string;
}

export function FounderMessage({
  title,
  subtitle,
  image,
  message,
  signature,
  founderName = "Andrew James Jones",
  founderTitle = "Executive Director"
}: FounderMessageProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Column with Decorative Arrow */}
            <div className="relative lg:order-1 order-2">
              <div className="relative">
                {/* Decorative Arrow */}
                <div className="absolute -top-12 -left-8 hidden lg:block">
                  <svg width="200" height="100" viewBox="0 0 200 100" fill="none" className="text-orange-400">
                    <path 
                      d="M10 10 Q100 50, 190 90" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path 
                      d="M190 90 L180 85 M190 90 L185 100" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Founder Image Card */}
                <div className="relative bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                  <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={image}
                      alt={founderName}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Name Plate */}
                  <div className="mt-6 text-center bg-gray-900 text-white py-4 px-6 rounded-lg">
                    <p className="text-xl font-bold">{founderName}</p>
                    <p className="text-sm text-gray-300 mt-1">{founderTitle}</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-10 blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:order-2 order-1">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {title}
                </h2>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"></div>
                  <p className="text-purple-600 font-semibold text-lg tracking-wide">
                    {subtitle}
                  </p>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-6">
                <div className="relative pl-6 border-l-4 border-orange-500">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {message}
                  </p>
                </div>

                {/* Quote Decoration */}
                <div className="bg-gradient-to-r from-purple-50 to-orange-50 border-l-4 border-purple-600 p-6 rounded-r-lg my-8">
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-purple-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic text-base leading-relaxed">
                      "At the end of the day, every business is in the people business — if your business doesn't care about people, then you're out of business."
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t-2 border-gray-200">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                    {signature}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Founder & Executive Director</p>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-600">
                  <p className="text-2xl font-bold text-purple-600">25+</p>
                  <p className="text-sm text-gray-600">Years of Service</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-500">
                  <p className="text-2xl font-bold text-orange-500">12+</p>
                  <p className="text-sm text-gray-600">Non-Profit Organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
