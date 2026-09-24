'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  ['About', '/about'], ['Operations', '/operations'], ['Businesses', '/business'],
  ['Sustainability', '/sustainability'], ['Media', '/newsroom'], ['Investors', '/investors'], ['Careers', '/careers'],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState('');
  return <>
    <div className="utility"><div className="wrap utility-inner"><span>Independent energy, considered for tomorrow.</span><div><Link href="/investors">Investor centre</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div></div></div>
    <header className="header"><div className="wrap header-inner">
      <Link href="/" className="brand" aria-label="Northstar Energy home"><span className="brand-mark">N<span>↗</span></span><span className="brand-copy">NORTHSTAR<small>ENERGY GROUP</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <div className="nav-item" key={href} onMouseEnter={() => setMenu(label)} onMouseLeave={() => setMenu('')}><Link href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined}>{label}<span className="chevron">⌄</span></Link>{menu === label && <div className="nav-pop"><strong>{label}</strong><p>Explore our {label.toLowerCase()} and discover how we work.</p><Link href={href}>Overview <span>↗</span></Link><Link href={`${href}/${label === 'Businesses' ? 'refineries' : label === 'About' ? 'who-we-are' : label === 'Sustainability' ? 'environment' : 'reports'}`}>Featured areas <span>↗</span></Link><Link href="/quick-links">All resources <span>↗</span></Link></div>}</div>)}</nav>
      <Link className="search-link" href="/search" aria-label="Search">⌕</Link>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
    </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <div key={href}><div className="mobile-row"><Link onClick={() => setOpen(false)} href={href}>{label}</Link><button aria-expanded={menu === label} onClick={() => setMenu(menu === label ? '' : label)}>{menu === label ? '−' : '+'}</button></div>{menu === label && <div className="mobile-sub"><Link onClick={() => setOpen(false)} href={href}>Overview</Link><Link onClick={() => setOpen(false)} href="/quick-links">Resources</Link></div>}</div>)}<Link href="/search" onClick={() => setOpen(false)}>Search the site ↗</Link></nav>}</header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-top"><div><Link href="/" className="brand brand-light"><span className="brand-mark">N<span>↗</span></span><span className="brand-copy">NORTHSTAR<small>ENERGY GROUP</small></span></Link><p>Independent energy, considered for tomorrow.</p></div><div className="footer-col"><b>Explore</b><Link href="/about">About us</Link><Link href="/operations">Our operations</Link><Link href="/business">Our businesses</Link><Link href="/sustainability">Sustainability</Link></div><div className="footer-col"><b>Resources</b><Link href="/newsroom">Newsroom</Link><Link href="/investors">Investors</Link><Link href="/careers">Careers</Link><Link href="/quick-links">Quick links</Link></div><div className="footer-col"><b>Get in touch</b><Link href="/contact">Contact</Link><Link href="/complaints-feedback">Feedback</Link><Link href="/about/corporate-governance">Governance</Link><Link href="/about/rti">Accessibility</Link></div></div><div className="footer-bottom"><span>© 2026 Northstar Energy Group · Independent portfolio demonstration</span><div><Link href="/about/corporate-governance">Privacy</Link><Link href="/about/corporate-governance">Terms</Link><Link href="/about/rti">Accessibility</Link></div></div></div></footer>;
}

export function SearchBox() {
  const [query, setQuery] = useState('');
  return <form action="/search" className="search-box"><label className="sr-only" htmlFor="site-search">Search this website</label><input id="site-search" name="q" value={query} onChange={e => setQuery(e.target.value)} placeholder="What are you looking for?"/><button aria-label="Submit search">Search <span>↗</span></button></form>;
}
