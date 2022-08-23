export default function ErrorFallback({ error }) {
  return (
    <div
      role="alert"
      className="bg-primary flex h-screen w-screen flex-col items-center justify-center"
    >
      <p className="text-3xl text-blue-500">Something went wrong:</p>
      <pre className="clr-gray-500">{error.message}</pre>
    </div>
  );
}
