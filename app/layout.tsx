'use client';
import React, { ReactNode, useEffect } from 'react';
import { ChakraProvider, Box, Portal, useDisclosure } from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation';

import theme from '@/theme/theme';
import routes from '@/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import AppWrappers from './AppWrappers';
import { getActiveRoute, getActiveNavbar } from '@/utils/navigation'; // Ensure proper import
import '@/styles/App.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';
//import Login from '@/components/login/login';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { onOpen } = useDisclosure();

  const setApiKey = (apiKey: string) => {
    console.log('API Key set:', apiKey);
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    // if (!username || !password && pathname !== '/login') {
    //   router.push('/login');
    // }
  }, [router, pathname]);

  if (pathname === '/login') {
    return (
      <html lang="en">
        <body id="root">
          <Login />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body id="root">
        <AppWrappers>
          <ChakraProvider theme={theme}>
            <Box>
              <Sidebar routes={routes} />
              <Box
                float="right"
                minHeight="50vh"
                height="100%"
                position="relative"
                maxHeight="100%"
                w={{ base: '100%', xl: 'calc(100% - 290px)' }}
                maxWidth={{ base: '100%', xl: 'calc(100% - 290px)' }}
              >
                <Portal>
                  <Navbar
                    onOpen={onOpen}
                    logoText="ChatBot-Rag"
                    brandText={getActiveRoute(routes, pathname)}
                    secondary={getActiveNavbar(routes, pathname)}
                    setApiKey={setApiKey}
                  />
                </Portal>
                <Box mx="auto" pe="20px" minH="70vh">
                  {children}
                </Box>
                <Footer />
              </Box>
            </Box>
          </ChakraProvider>
        </AppWrappers>
      </body>
    </html>
  );
}
