import type { ButtonHTMLAttributes, ReactNode } from "react";

export function Spinner({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`animate-spin ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Submit button with a built-in loading state: swaps its label for
 * `loadingText` + spinner, blocks duplicate submissions and announces the
 * busy state to assistive tech.
 */
export function SubmitButton({
  loading,
  loadingText,
  children,
  className = "",
  disabled,
  ...rest
}: {
  loading: boolean;
  loadingText: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      {...rest}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-live="polite"
      className={`${className} ${loading ? "cursor-wait !translate-y-0 opacity-90" : ""} disabled:cursor-not-allowed`}
    >
      {loading ? (
        <>
          <span>{loadingText}</span>
          <Spinner />
        </>
      ) : (
        children
      )}
    </button>
  );
}
