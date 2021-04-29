import 'public/css/style.css';

import { SiteLayout } from '@/layout';
import { AppProvider } from '@/context/AppProvider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider pageProps={pageProps}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </AppProvider>
  );
};

export default MyApp;
