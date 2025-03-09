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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex-1 flex flex-col bg-gradient-to-b from-gray-900 to-black">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center px-4 py-12">
            <div className="welcome-logo mb-8">
              <Image
                src="/vikrambaba.png"
                alt="VikramBaba Logo"
                width={80}
                height={80}
                className="mx-auto rounded-2xl shadow-lg shadow-blue-500/10"
              />
            </div>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-2 text-center">
              How can I assist you with your finances today?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm text-center">
              I can help with investment strategies, financial planning, market analysis, and more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto w-full px-4">
              {[
                "What's your investment strategy recommendation?",
                "How can I start investing in stocks?",
                "Explain cryptocurrency basics",
                "Help me create a budget plan"
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="suggestion-button flex items-center gap-2 w-full rounded-xl p-4 text-left text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-400">
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
                className={`message-transition group ${message.role === 'assistant' ? 'bg-gray-800/50 backdrop-blur-sm' : ''}`}
              >
                <div className="max-w-3xl mx-auto px-4 py-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                      {message.role === 'user' ? (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-medium">U</span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-medium">AI</span>
                        </div>
                      )}
                    </div>
                    <div className="prose prose-invert flex-1 space-y-2">
                      <p className="text-gray-100 leading-7">{message.content}</p>
                    </div>
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-gray-400 hover:text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                          </svg>
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
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
            {isLoading && (
              <div className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center animate-pulse">
                    <span className="text-white text-sm font-medium">AI</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent pt-6">
        <div className="mx-auto max-w-3xl px-4 pb-6">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message VikramBaba..."
              className="chat-input w-full rounded-xl pl-4 pr-12 py-3 text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-gray-300 disabled:opacity-40 disabled:hover:text-gray-400 transition-colors"
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