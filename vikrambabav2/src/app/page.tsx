import Image from 'next/image'
import ChatInterface from '@/components/ChatInterface'

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="hidden md:flex w-[260px] bg-gray-900 flex-col border-r border-gray-800">
        {/* New Chat Button */}
        <div className="p-4">
          <button className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-3 text-sm font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
            New Chat
          </button>
        </div>

        {/* Recent Chats */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 transition-colors text-left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
              </svg>
              Investment Strategy Discussion
            </button>
            <button className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 transition-colors text-left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
              </svg>
              Retirement Planning
            </button>
          </div>
        </div>

        {/* User Menu */}
        <div className="border-t border-gray-800 p-4">
          <button className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 transition-colors">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
            <span className="flex-1 text-left">My Account</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden border-b border-gray-800 bg-black/50 backdrop-blur-sm">
          <div className="px-4 py-3 flex items-center justify-between">
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <Image
                src="/vikrambaba.png"
                alt="VikramBaba Logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <h1 className="text-base font-medium text-gray-100">VikramBaba</h1>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Chat Interface */}
        <ChatInterface />
      </div>
    </div>
  )
}
