import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Oops!</h1>
        <p className="text-xl text-neutral-600 mb-8">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </p>
        <a 
          href="/"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
