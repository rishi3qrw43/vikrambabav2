export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100" />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  );
} 