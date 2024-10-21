import { useRouter } from 'next/router';
import dbConnect from '../../../lib/db';
import PageContent from '../../../models/PageContent';
import { GetServerSideProps } from 'next';

interface Content {
  content: {
    fa: string;
    en: string;
  };
}

interface AboutUsPageProps {
  content: Content | null;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  await dbConnect();
  const aboutUsContent = await PageContent.findOne({ page: 'about-us' }).lean();

  return {
    props: {
      content: aboutUsContent ? JSON.parse(JSON.stringify(aboutUsContent)) : null,
    },
  };
};

export default function AboutUsPage({ content }: AboutUsPageProps) {
  const { locale } = useRouter();

  if (!content) {
    return (
      <div>
        {locale === 'fa' ? 'هنوز محتوایی برای این صفحه وارد نشده است' : 'No content has been entered yet'}
      </div>
    );
  }

  return (
    <div>
      <h1>{locale === 'fa' ? 'درباره ما' : 'About Us'}</h1>
      <p>{locale === 'fa' ? content.content.fa : content.content.en}</p>
    </div>
  );
}