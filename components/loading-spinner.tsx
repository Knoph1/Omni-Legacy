export function LoadingSpinner({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
