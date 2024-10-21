import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LogoutPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    signOut({ redirect: false }).then(() => {
      router.push('/admin/auth/login');
    });
  }, [router]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}
