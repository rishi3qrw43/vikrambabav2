import './globals.css';
import { Inter } from 'next/font/google';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ToastProvider } from '../contexts/ToastContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'AI Financial Assistant',
  description: 'Your intelligent financial companion',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <ErrorBoundary>
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="container-custom flex h-16 items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <a href="/" className="flex items-center space-x-2">
                      <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                        AI Financial Assistant
                      </span>
                    </a>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                <div className="container-custom py-8">{children}</div>
              </main>
              <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="container-custom py-8">
                  <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      © {new Date().getFullYear()} AI Financial Assistant. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
