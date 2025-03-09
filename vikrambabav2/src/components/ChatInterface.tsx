'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      const response = await new Promise<Message>(resolve => 
        setTimeout(() => resolve({ 
          role: 'assistant', 
          content: 'Thank you for your question about finance. As your AI financial advisor, I aim to provide accurate and helpful guidance. However, please note that my responses are for informational purposes only and should not be considered as professional financial advice. Always consult with qualified financial professionals for personalized recommendations.' 
        }), 1000)
      );
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex-1 flex flex-col bg-gray-900">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center px-4 py-12">
            <div className="welcome-logo mb-8">
              <Image
                src="/vikrambaba.png"
                alt="VikramBaba Logo"
                width={64}
                height={64}
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2 text-center">
              How can I assist you with your finances today?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm text-center">
              I can help with investment strategies, financial planning, market analysis, and more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl mx-auto w-full">
              {[
                "What's your investment strategy recommendation?",
                "How can I start investing in stocks?",
                "Explain cryptocurrency basics",
                "Help me create a budget plan"
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="flex items-center gap-2 w-full bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-left text-sm text-gray-100 border border-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="pb-32 pt-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`group ${message.role === 'assistant' ? 'bg-gray-800' : ''}`}
              >
                <div className="max-w-3xl mx-auto px-4 py-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                      {message.role === 'user' ? (
                        <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                          <span className="text-blue-600 text-sm font-medium">U</span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-teal-600/10 border border-teal-600/20 flex items-center justify-center">
                          <span className="text-teal-600 text-sm font-medium">AI</span>
                        </div>
                      )}
                    </div>
                    <div className="prose prose-invert flex-1 space-y-2">
                      <p className="text-gray-100 leading-7">{message.content}</p>
                    </div>
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 invisible group-hover:visible">
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400">
                            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                          </svg>
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400">
                            <path d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-3.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-.75-.75H10.5a.75.75 0 01-.75-.75V3.75z" />
                            <path d="M7.151 12.023a3.75 3.75 0 009.198 0 .75.75 0 00-.634-1.025l-4.5-.75a.75.75 0 00-.83.75v.603a.75.75 0 001.042.698 1.5 1.5 0 01-.271.096 1.875 1.875 0 01-2.197-.759.75.75 0 00-.926-.363l-.675.225z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-900/0 pt-6">
        <div className="mx-auto max-w-3xl px-4 pb-6">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message VikramBaba..."
              className="w-full bg-gray-800 text-gray-100 text-sm rounded-xl pl-4 pr-12 py-3 border border-gray-700 focus:border-gray-600 focus:ring-0 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-gray-300 disabled:opacity-40 disabled:hover:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-2">
            VikramBaba can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
} 