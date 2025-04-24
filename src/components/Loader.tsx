
export const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="64"
      height="64"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      className="animate-spin w-16 h-16 text-theme-highlight"
    >
      {/* Left half C */}
      <path d="M60 20 A30 30 0 0 0 60 80" />
      {/* Right half C */}
      <path d="M40 20 A30 30 0 0 1 40 80" />
    </svg>
  </div>
);
