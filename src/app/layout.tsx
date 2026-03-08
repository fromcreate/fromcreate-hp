import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

export const metadata: Metadata = {
  title: 'FR0M CREATE | 理想を、現実に。',
  description: '株式会社FR0M CREATEの公式サイト。映像制作・SNS運用・クリエイターコミュニティ運営。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <StarField />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
