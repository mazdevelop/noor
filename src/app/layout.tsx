import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './globals.css';
import 'remixicon/fonts/remixicon.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}