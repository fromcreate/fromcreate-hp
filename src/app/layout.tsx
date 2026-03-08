import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FR0M CREATE | 理想を、現実に。',
  description: '株式会社FR0M CREATEの公式サイト。映像制作・SNS運用・クリエイターコミュニティ・After Effectsスクールを運営。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
