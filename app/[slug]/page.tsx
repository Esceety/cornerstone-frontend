import fs from 'fs';
import path from 'path';
import { PersonCard } from '@/components/PersonCard';
import { TextBlock } from '@/components/TextBlock';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { ImageBlock } from '@/components/ImageBlock';
import { Divider } from '@/components/Divider';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Addon {
  type: string;
  id?: string | number;
  text?: string;
  images?: string[];
  data: Record<string, unknown>;
}

interface Column {
  addons: Addon[];
}

interface Section {
  type: string;
  settings: Record<string, unknown>;
  columns: Column[];
}

interface PageData {
  id: number;
  title: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  publishedAt: string;
  updatedAt: string;
  sections: Section[];
  images: string[];
  allText: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all pages
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'pages');

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.json'));

  // Exclude routes that have their own custom page.tsx files
  const excludedRoutes = ['team', 'about-new', 'contact', 'message-from-founder'];

  return files
    .map((file) => file.replace('.json', ''))
    .filter((slug) => !excludedRoutes.includes(slug))
    .map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const page = await getPageData(slug);

  

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.metaTitle || page.title || 'Cornerstone Deliverance',
    description: page.metaDescription || page.allText?.substring(0, 160) || '',
    openGraph: {
      title: page.metaTitle || page.title || 'Cornerstone Deliverance',
      description: page.metaDescription || '',
      images: page.metaImage ? [`/${page.metaImage}`] : [],
    },
  };
}

// Load page data
async function getPageData(slug: string): Promise<PageData | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      'pages',
      `${slug}.json`
    );
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading page ${slug}:`, error);
    notFound();
  }
}

// Render a single addon based on its type
function renderAddon(addon: Addon, index: number) {
  const { type, data } = addon;

  try {
    switch (type) {
      case 'person':
        if (!data?.name) notFound();
        return (
          <PersonCard
            key={index}
            name={String(data.name || '')}
            designation={String(data.designation || '')}
            image={String(data.image || '')}
            email={String(data.email || '')}
            phone={String(data.phone || '')}
          />
        );

      case 'heading':
      case 'sp_heading':
        if (!data?.text && !data?.title) notFound();
        return (
          <Heading
            key={index}
            text={data.text || data.title || ''}
            level={(data.level || 'h2') as 'h2'}
          />
        );

      case 'text_block':
      case 'sp_text':
        if (!data?.html && !addon.text) notFound();
        return (
          <TextBlock
            key={index}
            html={data.html || ''}
            text={addon.text}
            heading={data.heading}
          />
        );

      case 'button':
      case 'sp_button':
        if (!data?.text) notFound();
        return (
          <Button
            key={index}
            text={data.text}
            url={data.url || '#'}
            style={data.style || 'primary'}
          />
        );

      case 'image':
      case 'sp_image':
        if (!data?.src && !data?.image) notFound();
        return (
          <ImageBlock
            key={index}
            src={data.src || data.image}
            alt={data.alt || data.alt_text || ''}
            title={data.title}
          />
        );

      case 'divider':
        return <Divider key={index} />;

      case 'htmlContent':
        if (!data?.html && !addon.data?.htmlContent) notFound();
        return (
          <TextBlock
            key={index}
            html={data.html || addon.data?.htmlContent || ''}
          />
        );

      default:
        // For unknown types, try to extract text or render generically
        if (addon.text) {
          return <TextBlock key={index} text={addon.text} />;
        }
        notFound();
    }
  } catch (error) {
    console.error(`Error rendering addon type ${type}:`, error);
    notFound();
  }
}

// Get column width classes for Tailwind grid
function getColumnClasses(columnCount: number) {
  if (columnCount === 1) return 'col-span-12';
  if (columnCount === 2) return 'col-span-12 lg:col-span-6';
  if (columnCount === 3) {
    return 'col-span-12 md:col-span-6 lg:col-span-4';
  }
  if (columnCount === 4) return 'col-span-12 md:col-span-6 lg:col-span-3';
  return 'col-span-12';
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  const page = await getPageData(slug);

  if (!page) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Page Not Found
          </h1>
          <p className='text-gray-600'>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      {/* Page Header */}
      <header className='bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 shadow-xl'>
        <div className='container mx-auto px-4'>
          <h1 className='text-5xl font-bold'>{page.title}</h1>
        </div>
      </header>

      {/* Dynamic Sections */}
      {page.sections && page.sections.length > 0 ? (
        page.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className='container mx-auto px-4 py-12'>
            {section.columns && section.columns.length > 0 ? (
              <div className='grid grid-cols-12 gap-8'>
                {section.columns.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={getColumnClasses(section.columns.length)}
                  >
                    <div className='space-y-6'>
                      {column.addons && column.addons.length > 0
                        ? column.addons.map((addon, addonIndex) =>
                            renderAddon(addon, addonIndex)
                          )
                        : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))
      ) : (
        <section className='container mx-auto px-4 py-16'>
          <div className='text-center text-gray-500'>
            <p>No content available for this page yet.</p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12 mt-16'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            © 2025 Cornerstone Deliverance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
