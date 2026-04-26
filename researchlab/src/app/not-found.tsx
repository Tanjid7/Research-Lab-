import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-pad">
      <div className="text-center space-y-6">
        <div className="font-display text-9xl font-bold gradient-text">404</div>
        <h1 className="font-display text-3xl font-bold">Page Not Found</h1>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex">Back to Home</Link>
      </div>
    </div>
  )
}
