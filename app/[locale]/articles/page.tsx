import { useRouter } from 'next/router';
import dbConnect from '../../../lib/db';
import Article from '../../../models/Article';
import { GetServerSideProps } from 'next';

interface Article {
  _id: string;
  title: {
    fa: string;
    en: string;
  };
}

interface ArticlesPageProps {
  articles: Article[] | null;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  await dbConnect();
  const articles = await Article.find().lean();

  return {
    props: {
      articles: articles.length ? JSON.parse(JSON.stringify(articles)) : null,
    },
  };
};

export default function ArticlesPage({ articles }: ArticlesPageProps) {
  const { locale } = useRouter();

  if (!articles) {
    return (
      <div>
        {locale === 'fa' ? 'هنوز مقاله‌ای وارد نشده است' : 'No articles have been entered yet'}
      </div>
    );
  }

  return (
    <div>
      <h1>{locale === 'fa' ? 'مقالات' : 'Articles'}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>{locale === 'fa' ? article.title.fa : article.title.en}</li>
        ))}
      </ul>
    </div>
  );
}