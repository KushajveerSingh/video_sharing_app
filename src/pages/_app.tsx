import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';

import '../globals.css';
import { Navbar, Sidebar } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Assume page is SSR initially
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  // Don't show any components if we are still SSR
  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}>
      <div>
        <Navbar />

        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>

          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
