'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main id="main-content" className="not-found"><span className="eyebrow">Something went wrong</span><h1>Let’s get you<br/>back on track.</h1><p>This page could not be loaded. Please try again.</p><button className="button button-navy" onClick={() => reset()}>Try again <span>↻</span></button></main>;
}
