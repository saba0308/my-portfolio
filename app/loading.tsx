export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
}