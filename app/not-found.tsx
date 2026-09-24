import Link from 'next/link';

export default function NotFound() {
  return <main id="main-content" className="not-found"><span className="eyebrow">404 · Page not found</span><h1>This page has moved<br/>beyond our horizon.</h1><p>The link may be outdated or the page may not exist in this demonstration.</p><Link href="/" className="button button-navy">Return home <span>↗</span></Link></main>;
}
