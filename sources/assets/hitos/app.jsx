/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakSlider, TweakToggle */
const { useState, useEffect, useRef, useMemo } = React;

const DEFAULTS = { "speed": 1, "autoplay": true, "loop": true, "showGrid": true };

const VB_W = 1280;
const VB_H = 720;
const Y_BASE = 360;
const BUMP_UP = 36;
const BUMP_DOWN = 36;

const STOPS = [
  { x: 90,   year: "2007",   side: "up",   pin: 1, pinSide: "up"   },
  { x: 220,  year: "2010",   side: "down", pin: 2, pinSide: "down" },
  { x: 360,  year: "2011",   side: "up",   pin: 3, pinSide: "up"   },
  { x: 490,  year: "2012",   side: "down", pin: 4, pinSide: "down" },
  { x: 625,  year: "2013",   side: "up",   pin: 5, pinSide: "up"   },
  { x: 760,  year: "2015",   side: "down", pin: 6, pinSide: "down" },
  { x: 895,  year: "2018",   side: "up",   pin: null              },
  { x: 1035, year: "2021",   side: "up",   pin: 7, pinSide: "up"   },
  { x: 1160, year: "2023 →", side: "up",   pin: 8, pinSide: "down" }
];

const stopY = (s) => Y_BASE + (s.side === "up" ? -BUMP_UP : BUMP_DOWN);

function buildSegments() {
  const segs = [];
  for (let i = 0; i < STOPS.length - 1; i++) {
    const a = STOPS[i], b = STOPS[i + 1];
    segs.push({ a, b, active: a.side === "up" && b.side === "up" });
  }
  return segs;
}

function segmentPathD(seg) {
  const ay = stopY(seg.a), by = stopY(seg.b);
  const c1x = seg.a.x + (seg.b.x - seg.a.x) * 0.4;
  const c2x = seg.a.x + (seg.b.x - seg.a.x) * 0.6;
  return `M ${seg.a.x} ${ay} C ${c1x} ${ay}, ${c2x} ${by}, ${seg.b.x} ${by}`;
}

function PinShape({ color, flip }) {
  return (
    <svg viewBox="0 0 30 38" xmlns="http://www.w3.org/2000/svg"
         style={{ transform: flip ? "rotate(180deg)" : "none" }}>
      <path d="M15 0 C6.7 0 0 6.4 0 14.4 C0 25 15 38 15 38 C15 38 30 25 30 14.4 C30 6.4 23.3 0 15 0 Z" fill={color} />
    </svg>
  );
}

function LogoBox({ name, style: s }) {
  const cls = ["logo-box", s === "tall" ? "tall" : "", s === "wide" ? "wide" : ""].filter(Boolean).join(" ");
  return <div className={cls}>{name}</div>;
}

const CONTENT = {
  "2007": {
    above: [
      { kind: "logo",  name: "UCN", style: "tall" },
      { kind: "label", text: "Inicio de\nInvestigación" },
      { kind: "label", text: "Convenio UCN" }
    ],
    below: []
  },
  "2010": {
    above: [],
    below: [{ kind: "logo", name: "CORE — Consejo Regional", style: "wide" }]
  },
  "2011": {
    above: [{ kind: "label", text: "Patente en 6 países." }],
    below: []
  },
  "2012": {
    above: [{ kind: "label", text: "Fabricación\nPrototipo" }],
    below: []
  },
  "2013": {
    above: [
      { kind: "logo",  name: "CORFO — Empaquetamiento", style: "wide" },
      { kind: "label", text: "Gestión Innovación" },
      { kind: "logo",  name: "3M" }
    ],
    below: []
  },
  "2015": {
    above: [],
    below: [{ kind: "logo", name: "Avonni — Premio Nac. Innovación", style: "wide" }]
  },
  "2018": {
    above: [
      { kind: "label", text: "Servicios" },
      { kind: "grid",  logos: [{ name: "BHP" }, { name: "CODELCO" }, { name: "Antofagasta\nMinerals" }, { name: "AngloAmerican" }] }
    ],
    below: []
  },
  "2021": { above: [], below: [] },
  "2023 →": {
    above: [{ kind: "logo", name: "Avonni — Premio Nac. Innovación", style: "wide" }],
    below: []
  }
};

function SegmentPath({ d, active, progress }) {
  const ref = useRef(null);
  const [len, setLen] = useState(0);
  useEffect(() => { if (ref.current) setLen(ref.current.getTotalLength()); }, [d]);
  return (
    <path ref={ref} d={d} fill="none"
      stroke={active ? "#ef3b3b" : "#2c2c2c"}
      strokeWidth={active ? 5 : 4}
      strokeLinecap="round"
      strokeDasharray={len || 0}
      strokeDashoffset={len ? len * (1 - progress) : 0}
    />
  );
}

function ContentItem({ item }) {
  if (item.kind === "logo") return <LogoBox name={item.name} style={item.style} />;
  if (item.kind === "label") return <div className="card-label">{item.text}</div>;
  if (item.kind === "grid") return (
    <div className="logos-grid">
      {item.logos.map((lg, i) => <LogoBox key={i} name={lg.name} style={null} />)}
    </div>
  );
  return null;
}

function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(tweaks.autoplay);
  const rafRef = useRef(null);
  const lastTRef = useRef(null);

  const segments = useMemo(() => buildSegments(), []);
  const totalLen = segments.length;
  const duration = 8.5 / Math.max(0.1, tweaks.speed);

  useEffect(() => {
    if (!playing) { cancelAnimationFrame(rafRef.current); lastTRef.current = null; return; }
    function tick(t) {
      if (lastTRef.current == null) lastTRef.current = t;
      const dt = (t - lastTRef.current) / 1000;
      lastTRef.current = t;
      setProgress(p => {
        const np = p + dt / duration;
        if (np >= 1) {
          if (tweaks.loop) { setTimeout(() => { setProgress(0); setPlaying(true); }, 1800); setPlaying(false); return 1; }
          setPlaying(false); return 1;
        }
        return np;
      });
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing, duration, tweaks.loop]);

  const drawnFraction = progress * totalLen;
  const reveals = useMemo(
    () => STOPS.map((s, i) => i === 0 ? progress > 0.005 : drawnFraction >= i - 0.05),
    [drawnFraction, progress]
  );

  const handlePlayPause = () => { if (progress >= 1) { setProgress(0); setPlaying(true); } else setPlaying(p => !p); };
  const handleRestart = () => { setProgress(0); setPlaying(true); };
  const handleSkipEnd = () => { setPlaying(false); setProgress(1); };

  const xPct = (x) => `${(x / VB_W) * 100}%`;
  const yPct = (y) => `${(y / VB_H) * 100}%`;

  return (
    <div className="page">
      <div className="controls" role="toolbar">
        <button className="ctrl-btn" onClick={handleRestart} title="Reiniciar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
        <button className="ctrl-btn primary" onClick={handlePlayPause}>
          {playing
            ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>Pausar</>
            : <><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>Reproducir</>
          }
        </button>
        <button className="ctrl-btn" onClick={handleSkipEnd} title="Saltar al final">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4l10 8-10 8z" fill="currentColor" stroke="none"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
        </button>
        <span className="progress-pill">{Math.round(progress * 100).toString().padStart(3, "0")}%</span>
      </div>

      <div className="stage">
        {!tweaks.showGrid && <style>{`.stage::before{display:none!important;}`}</style>}
        <div className="timeline-wrap">
          <svg className="tl" viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="none">
            {segments.map((seg, i) => {
              const segProgress = Math.max(0, Math.min(1, drawnFraction - i));
              return <SegmentPath key={i} d={segmentPathD(seg)} active={seg.active} progress={segProgress} />;
            })}
          </svg>

          {STOPS.map((s, i) => {
            const shown = reveals[i];
            const isUp = s.side === "up";
            return (
              <React.Fragment key={`yr-${i}`}>
                <div className={`yeardot ${shown ? "shown" : ""} ${isUp ? "" : "idle"}`}
                     style={{ left: xPct(s.x), top: yPct(stopY(s)) }} />
                <div className={`yearlabel ${shown ? "shown" : ""} ${isUp ? "" : "muted"}`}
                     style={{ left: xPct(s.x), top: yPct(stopY(s) + 16) }}>
                  {s.year}
                </div>
              </React.Fragment>
            );
          })}

          {STOPS.map((s, i) => {
            const c = CONTENT[s.year];
            if (!c || s.pin == null) return null;
            const shown = reveals[i];
            const isTop = s.pinSide === "up";
            const baseY = stopY(s);
            const pinCenterY = isTop ? baseY - 8 - 19 : baseY + 8 + 19;
            return (
              <div key={`pin-${i}`} className={`pin ${shown ? "shown" : ""}`}
                   style={{ left: xPct(s.x), top: yPct(pinCenterY) }}>
                <PinShape color={isTop ? "#ef3b3b" : "#2c2c2c"} flip={!isTop} />
                <div className="num" style={{ top: isTop ? 8 : 18 }}>{s.pin}</div>
              </div>
            );
          })}

          {STOPS.map((s, i) => {
            const c = CONTENT[s.year];
            if (!c || c.above.length === 0) return null;
            const shown = reveals[i];
            const baseY = stopY(s);
            const hasTopPin = s.pin != null && s.pinSide === "up";
            return (
              <div key={`above-${i}`} className={`card up ${shown ? "shown" : ""}`}
                   style={{ left: xPct(s.x), bottom: `calc(${100 - (baseY / VB_H) * 100}% + ${hasTopPin ? 64 : 18}px)` }}>
                {[...c.above].reverse().map((item, k) => <ContentItem key={k} item={item} />)}
              </div>
            );
          })}

          {STOPS.map((s, i) => {
            const c = CONTENT[s.year];
            if (!c || c.below.length === 0) return null;
            const shown = reveals[i];
            const baseY = stopY(s);
            const hasBottomPin = s.pin != null && s.pinSide === "down";
            return (
              <div key={`below-${i}`} className={`card down ${shown ? "shown" : ""}`}
                   style={{ left: xPct(s.x), top: `calc(${(baseY / VB_H) * 100}% + ${hasBottomPin ? 64 : 38}px)` }}>
                {c.below.map((item, k) => <ContentItem key={k} item={item} />)}
              </div>
            );
          })}
        </div>

        <div className="scrub"><div className="scrub-fill" style={{ width: `${progress * 100}%` }} /></div>
        <div className="legend">
          <span><span className="sw active"></span>Tramo activo</span>
          <span><span className="sw idle"></span>Tramo intermedio</span>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
