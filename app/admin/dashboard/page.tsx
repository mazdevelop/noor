import { useSession } from 'next-auth/react';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/router';

export default function DashboardPage(): JSX.Element {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/admin/auth/login');
    return null;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main>
        <h1>{router.locale === 'fa' ? 'داشبورد' : 'Dashboard'}</h1>
        {/* Add dashboard content here */}
      </main>
    </div>
  );
}
