import SeoData from 'types/SeoData';

const generateSEOData = ({ title, subtitle, date }: SeoData) => {
  return {
    title: title,
    description: subtitle,
    metadataBase: new URL(process.env.PROD_URL as string),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
      title: title,
      description: subtitle,
      url: process.env.PROD_URL,
      type: 'website',
      images: {
        url: `${process.env.PROD_URL}/api/ogp?title=${title}&date=${date}`,
        width: 1200,
        height: 600,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: subtitle,
      images: {
        url: `${process.env.PROD_URL}/api/ogp?title=${title}&date=${date}`,
        width: 1200,
        height: 600,
      },
      site: '@pull1102',
      creator: '@pull1102',
    },
  };
};

export default generateSEOData;
