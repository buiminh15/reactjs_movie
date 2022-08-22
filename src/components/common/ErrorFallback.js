export default function ErrorFallback({ error }) {
  return (
    <div role="alert" className="w-screen h-screen flex flex-col items-center justify-center bg-primary">
      <p className="text-blue-500 text-3xl">Something went wrong:</p>
      <pre className="clr-gray-500">{error.message}</pre>
    </div>
  );
}
