export default function Loading() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center justify-center mb-4">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
      <div className="space-y-3">
        <div className="h-8 w-36 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-24 bg-gray-200 rounded-md animate-pulse mb-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
