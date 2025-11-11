interface TextBlockProps {
  html: string;
  text?: string;
  heading?: string;
  className?: string;
}

export function TextBlock({
  html,
  text,
  heading,
  className = '',
}: TextBlockProps) {
  return (
    <div className={`${className}`}>
      {heading && (
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>{heading}</h3>
      )}
      {html ? (
        <div
          className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-strong:text-gray-900'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : text ? (
        <div className='text-gray-700 leading-relaxed whitespace-pre-wrap'>
          {text}
        </div>
      ) : null}
    </div>
  );
}
