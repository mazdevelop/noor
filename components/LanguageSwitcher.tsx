import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, query, asPath } = router;

  const changeLanguage = (lang: string) => {
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('fa')}>FA</button>
    </div>
  );
}