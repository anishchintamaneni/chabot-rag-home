# [ChatGPT-RAG AI Template]

# Integration Guide:
## Step 1: Host Both Projects  

- **Option 1:** Deploy both projects on the **same server** but under different paths (e.g., `/login` and `/app`).
- **Option 2:** Deploy each project on **different domains or subdomains** 
(e.g., `https://docquestui.cogniai.com/login` for `login_v1` and `https://docquestui.cogniai.com/userhome` for the Next.js app).  

### Example:  
- **Login app URL:** `https://docquestui.cogniai.com/login`  
- **Next.js app URL:** `https://docquestui.cogniai.com/userhome`  

---

## Step 2: Redirect `index.html` to Next.js Layout  
Modify the **login button** in `index.html` to redirect to the appropriate **Next.js route**.

### `login_v1/index.html` (Updated Button):
```html
<!-- <div class="container-login100-form-btn">
    <button type="button" class="login100-form-btn" id="loginButton">
        Login
    </button>
</div>

<script>
    document.getElementById('loginButton').addEventListener('click', () => {
        // Redirect to the Next.js dashboard or layout page
        window.location.href = "https://app.example.com/dashboard"; // Change to your Next.js app URL
    });
</script> -->



## Step 3: Handle Redirection in layout.tsx

<!-- ### `chatgpt-ai-template-main/app/api/layout.tsx` Example:
```tsx
'use client';
import React, { ReactNode, useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import theme from '@/theme/theme';
import routes from '@/routes';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const apiKey = localStorage.getItem('apiKey');
    if (!apiKey) {
      // Redirect to login if no API key is found
      router.push('https://login.example.com'); // Redirect to the login page
    }
  }, []);

  return (
    <html lang="en">
      <body id="root">
        <ChakraProvider theme={theme}>
          <Box>
            {/* Render child components */}
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
} -->
