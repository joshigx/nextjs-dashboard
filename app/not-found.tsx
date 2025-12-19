import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">404 - Page Not Found</h2>
      <p className="mt-2 text-gray-600">Could not find requested resource</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Home
      </Link>
    </div>
  );
}
