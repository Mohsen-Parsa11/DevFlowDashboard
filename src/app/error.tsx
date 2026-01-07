'use client';
import ErrorComponent from "./components/error";

export default function RootError({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorComponent reset={reset} error={error} />;
}
