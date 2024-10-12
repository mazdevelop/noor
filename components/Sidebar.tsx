import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <ul>
        <li><Link href="/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/admin/products">Products</Link></li>
        <li><Link href="/admin/articles">Articles</Link></li>
      </ul>
    </aside>
  );
}