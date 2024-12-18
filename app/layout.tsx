'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { ChakraProvider, Box, Portal, useDisclosure } from '@chakra-ui/react';
import theme from '@/theme/theme';
import routes from '@/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import { getActiveRoute, getActiveNavbar } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import AppWrappers from './AppWrappers';
import '@/styles/App.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    // Redirect to login if username or password is not found
    if (!username || !password) {
      router.push('https://docquestui.cogniai.com/login'); // Redirect to the login page
    }
  }, []);

  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>
          <ChakraProvider theme={theme}>
            {pathname?.includes('register') || pathname?.includes('sign-in') ? (
              children
            ) : (
              <Box>
                <Sidebar setApiKey={setApiKey} routes={routes} />
                <Box
                  // pt={{ base: '60px', md: '100px' }}
                  float="right"
                  minHeight="50vh"
                  height="100%"
                  // overflow="auto"
                  position="relative"
                  maxHeight="100%"
                  w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
                  maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
                >
                  <Portal>
                    <Box>
                      <Navbar
                        setApiKey={setApiKey}
                        onOpen={onOpen}
                        logoText={'ChatBot-Rag'}
                        brandText={getActiveRoute(routes, pathname)}
                        secondary={getActiveNavbar(routes, pathname)}
                      />
                    </Box>
                  </Portal>
                  <Box
                    mx="auto"
                    // p={{ base: '20px', md: '30px' }}
                    pe="20px"
                    minH="70vh"
                    // pt="50px"
                  >
                    {children} {/* Render the child components here */}
                  </Box>
                  <Box>
                    <Footer />
                  </Box>
                </Box>
              </Box>
            )}
          </ChakraProvider>
        </AppWrappers>
      </body>
    </html>
  );
}
