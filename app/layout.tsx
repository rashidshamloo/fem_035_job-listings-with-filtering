// next
import { Metadata } from 'next';

// redux toolkit + style registry providers
import Providers from '@/lib/Providers';

// global styles
import GlobalStyles from '@/app/styles/GlobalStyles';

// font
import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--league-spartan',
});

// metadata
export const metadata: Metadata = {
  title: 'Job Listings',
  icons: [{ rel: 'icon', type: 'image/png', url: '/images/favicon-32x32.png' }],
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
