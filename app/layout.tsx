import type { Metadata } from 'next';
import { Noto_Serif_TC } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CommonProvider from '@/providers/common-provider';
import ReduxProvider from '@/providers/redux-provider';
import { Provider } from 'react-redux';
import store from '@/store';

// Import Swiper styles
import 'swiper/css';
import '@/styles/globals.css';
import '@/styles/index.css';

const notoSerifTC = Noto_Serif_TC({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enjoyment Hotel',
  description: 'Enjoyment Hotel - booking',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSerifTC.className}>
        <ReduxProvider>
          {/* <Provider store={store}> */}
          <CommonProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CommonProvider>
        </ReduxProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
