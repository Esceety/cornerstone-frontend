import Image from 'next/image';

interface PersonCardProps {
  name: string;
  designation: string;
  image: string;
  email?: string;
  phone?: string;
}

export function PersonCard({
  name,
  designation,
  image,
  email,
  phone,
}: PersonCardProps) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl'>
      <div className='relative w-full h-96'>
        <Image
          src={`/${image}`}
          alt={name}
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white'>
        <h3 className='text-xl font-bold mb-1'>{name}</h3>
        <p className='text-blue-200 text-sm'>{designation}</p>

        {(email || phone) && (
          <div className='mt-4 pt-4 border-t border-blue-700 space-y-2'>
            {email && (
              <a
                href={`mailto:${email}`}
                className='block text-sm hover:text-blue-300 transition-colors'
              >
                📧 {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className='block text-sm hover:text-blue-300 transition-colors'
              >
                📞 {phone}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
