const { useState, useEffect, useRef } = React;

const R = window.__resources || {};

const LOGOS = [
  { src: R.logoBhp,         alt: 'BHP Minera Spence' },
  { src: R.logoCodelco,     alt: 'Codelco Ministro Hales' },
  { src: R.logoKaltire,     alt: 'Kal Tire' },
  { src: R.logoLomasBayas,  alt: 'Lomas Bayas' },
  { src: R.logoLosPelambres,alt: 'Los Pelambres' },
  { src: R.logoMichelin,    alt: 'Michelin' },
];

function Marquee() {
  const loop = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="banner">
      <div className="track-wrap">
        <div className="track">
          {loop.map((logo, i) => (
            <div className="logo-cell" key={i}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Marquee />);
