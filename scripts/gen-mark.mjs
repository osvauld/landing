// The Osvauld mark: two arms of r = a·θ^p, the second rotated 180°. Two histories that
// converge on one point by syncing; neither arm is the server. p ≈ 1 is near-Archimedean,
// so every turn (every sync) is the same step closer.
// Run: node scripts/gen-mark.mjs  →  public/brand/*.svg, public/favicon.svg
import { mkdirSync, writeFileSync } from "node:fs";

const f = (v) => String(Math.round(v * 1000) / 1000);
const FG = "#edf2ff", ACCENT = "#83adff", BG = "#10141d";

// Tapered arm as a filled outline in a [-1.2, 1.2]² box, round caps at both ends.
function arm({ T, p, w0, w1 }) {
  const N = 360, t1 = T * 2 * Math.PI, a = (1.12 - w1 / 2) / Math.pow(t1, p);
  const P = (t) => { const r = a * Math.pow(Math.max(t, 1e-9), p); return [r * Math.cos(t), r * Math.sin(t)]; };
  const W = (t) => (w0 + (w1 - w0) * t / t1) / 2;
  const L = [], R = [];
  for (let i = 0; i <= N; i++) {
    const t = t1 * i / N, q = P(t), q2 = P(t + 1e-4), dx = q2[0] - q[0], dy = q2[1] - q[1], m = Math.hypot(dx, dy) || 1, w = W(t);
    L.push([q[0] - dy / m * w, q[1] + dx / m * w]); R.push([q[0] + dy / m * w, q[1] - dx / m * w]);
  }
  const pts = (a) => a.map((q) => f(q[0]) + " " + f(q[1])).join("L");
  const wE = W(t1), wS = W(0);
  return `M${pts(L)}A${f(wE)} ${f(wE)} 0 0 0 ${pts(R.slice().reverse())}A${f(wS)} ${f(wS)} 0 0 0 ${f(L[0][0])} ${f(L[0][1])}Z`;
}

// Full mark for large sizes; heavy mark (fewer, wider turns) for 32px and below.
const FULL = { T: 1.75, p: 1.05, w0: 0.01, w1: 0.085 };
const HEAVY = { T: 1.25, p: 1.05, w0: 0.06, w1: 0.26 };

function svg(shape, { fg = FG, accent = ACCENT, bg = null, round = true, pad = 0.08 } = {}) {
  const d = arm(shape), s = 1.2 + pad;
  const tile = bg ? `<rect x="${f(-s)}" y="${f(-s)}" width="${f(2 * s)}" height="${f(2 * s)}"${round ? ` rx="${f(s * 0.45)}"` : ""} fill="${bg}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(-s)} ${f(-s)} ${f(2 * s)} ${f(2 * s)}">${tile}` +
    `<path fill="${fg}" d="${d}"/><path fill="${accent}" transform="rotate(180)" d="${d}"/></svg>\n`;
}

mkdirSync("public/brand", { recursive: true });
const out = {
  "public/brand/osvauld-mark.svg": svg(FULL, { pad: 0.02 }),
  "public/brand/osvauld-mark-small.svg": svg(HEAVY, { pad: 0.02 }),
  "public/brand/osvauld-mark-mono.svg": svg(FULL, { fg: "currentColor", accent: "currentColor", pad: 0.02 }),
  "public/brand/osvauld-mark-mono-small.svg": svg(HEAVY, { fg: "currentColor", accent: "currentColor", pad: 0.02 }),
  "public/brand/osvauld-icon.svg": svg(FULL, { bg: BG }),
  "public/favicon.svg": svg(HEAVY, { bg: BG }),
  "public/brand/apple-touch-icon.svg": svg(HEAVY, { bg: BG, round: false, pad: 0.35 }),
};
for (const [path, s] of Object.entries(out)) writeFileSync(path, s);
console.log(Object.keys(out).join("\n"));
