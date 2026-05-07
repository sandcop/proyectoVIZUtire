const { useState, useEffect, useRef } = React;

const LOGOS = [
  { src: 'logos/bhp.png',          alt: 'BHP Minera Spence',     cls: 'lg-bhp' },
  { src: 'logos/codelco.png',      alt: 'Codelco Ministro Hales', cls: 'lg-codelco' },
  { src: 'logos/kaltire.png',      alt: 'Kal Tire',              cls: 'lg-kaltire' },
  { src: 'logos/lomas-bayas.png',  alt: 'Lomas Bayas',           cls: 'lg-lomas' },
  { src: 'logos/los-pelambres.png',alt: 'Los Pelambres',         cls: 'lg-pelambres' },
  { src: 'logos/michelin.png',     alt: 'Michelin',              cls: 'lg-michelin' },
];

function Marquee() {
  const loop = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="banner">
      <div className="track-wrap">
        <div className="track">
          {loop.map((logo, i) => (
            <div className={`logo-cell ${logo.cls}`} key={i}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Marquee />);
