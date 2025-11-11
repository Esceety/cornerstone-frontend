import Image from 'next/image';

interface ImageBlockProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

export function ImageBlock({
  src,
  alt,
  title,
  className = '',
}: ImageBlockProps) {
  return (
    <div
      className={`relative w-full h-96 rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      <Image
        src={`/${src}`}
        alt={alt || title || 'Image'}
        fill
        className='object-cover'
      />
      {title && (
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
          <p className='text-white font-semibold'>{title}</p>
        </div>
      )}
    </div>
  );
}
