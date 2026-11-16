export const vertex = /* glsl */ `
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const common = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec2 uPlane;
uniform float uTime;
uniform float uHover;
uniform float uVelocity;
uniform float uReveal;
uniform vec2 uMouse;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 2; i++) { v += a * noise(p); p *= 2.04; a *= 0.5; }
  return v;
}
float revealMask(vec2 uv) {
  float edge = uReveal * 1.2 - 0.1 + (noise(uv * vec2(6.0, 2.0)) - 0.5) * 0.06;
  return smoothstep(edge, edge - 0.05, uv.y);
}`;

// Image plane: exact object-fit cover, pointer-driven lens micro-zoom, clean specular edge on hover.
export const imageFragment = /* glsl */ `
${common}
uniform sampler2D tMap;
uniform vec2 uImage;
vec2 cover(vec2 uv) {
  vec2 r = vec2(
    min((uPlane.x / uPlane.y) / (uImage.x / uImage.y), 1.0),
    min((uPlane.y / uPlane.x) / (uImage.y / uImage.x), 1.0)
  );
  return uv * r + (1.0 - r) * 0.5;
}
void main() {
  vec2 uv = vUv;
  vec2 c = uv - 0.5;
  uv = 0.5 + c * (1.0 - uHover * 0.035);
  float dist = length(vUv - uMouse);
  uv += (uv - uMouse) * uHover * 0.015 * smoothstep(0.55, 0.0, dist);
  vec2 t = cover(uv);
  vec3 col = texture2D(tMap, t).rgb;
  // Subtle cobalt optical spotlight on hover without distorting legible UI text
  float sheen = smoothstep(0.65, 0.0, dist) * uHover;
  col += vec3(0.02, 0.06, 0.14) * sheen;
  gl_FragColor = vec4(col, 1.0) * revealMask(vUv);
}`;

// Procedural signal-field plane: seeded concentric wave lattice + contour lines in our palette.
export const proceduralFragment = /* glsl */ `
${common}
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;
uniform float uSeed;
void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uPlane.x / max(uPlane.y, 1.0), 1.0);
  vec2 p = (uv - 0.5) * aspect * 3.2;
  float t = uTime * 0.22;
  vec2 m = (uMouse - 0.5) * uHover * 0.55;
  float d1 = length(p - vec2(sin(uSeed + t * 0.5) * 0.4, cos(uSeed * 1.7) * 0.3) - m);
  float d2 = length(p + vec2(cos(uSeed * 2.1 - t * 0.4) * 0.5, sin(uSeed * 0.9) * 0.35));
  float wave = sin(d1 * (7.0 + mod(uSeed, 4.0)) - t * 2.2) + sin(d2 * 9.0 + t * 1.6);
  float field = fbm(p * 1.4 + uSeed * 4.0 + vec2(t * 0.3, -t * 0.2));
  float contour = smoothstep(0.18, 0.0, abs(fract(wave * 0.35 + field * 1.8) - 0.5));
  vec3 col = mix(uC1, uC2, smoothstep(-1.4, 1.4, wave * 0.6 + field));
  col = mix(col, uC3, contour * (0.55 + 0.35 * uHover));
  gl_FragColor = vec4(col, 1.0) * revealMask(vUv);
}`;
