import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        {/* Critical CSS for production */}
        <style dangerouslySetInnerHTML={{ 
          __html: `
            html, body {
              background-color: #111 !important;
              color: #f3f4f6 !important;
              min-height: 100vh;
              width: 100%;
            }
            
            /* Animation keyframes */
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            /* Common styles */
            .message-transition {
              opacity: 0;
              transform: translateY(10px);
              animation: fadeIn 0.5s ease-in-out forwards !important;
            }
            
            .welcome-logo {
              opacity: 0;
              transform: translateY(20px);
              animation: slideIn 0.5s ease-out forwards !important;
            }
            
            .chat-input {
              background-color: rgb(31, 41, 55) !important;
              border: 1px solid rgb(55, 65, 81) !important;
              outline: none !important;
              transition: all 0.2s !important;
            }
            
            .chat-input:focus {
              border-color: rgb(59, 130, 246) !important;
              box-shadow: 0 0 0 1px rgb(59, 130, 246) !important;
            }
            
            .primary-button {
              background-color: rgb(37, 99, 235) !important;
              transition: background-color 0.2s !important;
            }
            
            .primary-button:hover {
              background-color: rgb(29, 78, 216) !important;
            }
            
            .suggestion-button {
              background-color: rgba(31, 41, 55, 0.5) !important;
              border: 1px solid rgb(55, 65, 81) !important;
              transition: all 0.2s !important;
            }
            
            .suggestion-button:hover {
              background-color: rgba(55, 65, 81, 0.5) !important;
              border-color: rgb(75, 85, 99) !important;
            }
          `
        }} />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 