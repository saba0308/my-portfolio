import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 text-center">
      <h1 className="text-8xl font-bold text-blue-600">404</h1>

      <h2 className="mt-6 text-4xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-300">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
}