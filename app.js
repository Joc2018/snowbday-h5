/* ============================================================
   可自定义文案 —— 直接改下面这些文字即可，不用动其它代码
   ============================================================ */
const COPY = {
  'cake.eyebrow': 'MAKE A WISH',
  'cake.title': '先许一个愿吧',
  'cake.sub': '点击烛火，或对着手机轻轻吹一吹',
  'cake.mic': '开启吹气感应',
  'cake.note': '不方便开启麦克风？直接点蜡烛也可以。',
  'cake.blown': '愿望已被星光收到 ✦',
  'cake.micFail': '当前浏览器不支持吹气感应，直接点烛火吧。',
  'cake.micListen': '听见你的呼吸啦，吹一下试试…',
  'cake.micDenied': '没有获得麦克风权限，点烛火也能许愿。',
  'carousel.next': '看一场花火 →',
  'fw.eyebrow': 'A LITTLE FIREWORKS SHOW',
  'fw.title': '这场花火，',
  'fw.titleEm': '只为你绽放',
  'fw.sub': '轻点夜空，再放一束',
  'fw.more': '✦ 再放一束烟花',
  'fw.next': '收下这封信 →',
  'letter.date': 'Nov. 22 / 2026',
  'letter.week': 'Jewel.',
  'letter.sideL': 'BIRTHDAY',
  'letter.sideR': 'WISH',
  'letter.heading': '生日快乐呀，',
  'letter.headingEm': '我的好朋友',
  'letter.lines': [
    'Hakuna Matata',
    '无忧无虑 梦想成真 一切顺利',
    '宇宙超级无敌大，祝你抵达所有想去的地方。每场想去的演唱会都顺利拿下，如愿见到想见的人~'
  ],
  'letter.sign': 'zou',
  'letter.signDate': '2026.11.22',
  'letter.envName': 'Hakuna Matata',
  'letter.envFoot': 'I was enchanted to meet you',
  'letter.openHint': '✦ 轻点信封，拆开这份祝福',
  'letter.replay': '再看一次星光'
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function applyCopy() {
  $$('[data-t]').forEach((el) => {
    const v = COPY[el.dataset.t];
    if (typeof v === 'string') el.textContent = v;
  });
  const lines = $('[data-lines="letter.lines"]');
  if (lines) lines.innerHTML = (COPY['letter.lines'] || []).map((t) => `<p>${t}</p>`).join('');
}
applyCopy();

/* ============================================================
   Scene flow with 3D camera transitions
   cake -> carousel -> fireworks -> letter
   ============================================================ */
const SCENES = ['cake', 'carousel', 'fireworks', 'letter'];
let current = 'cake';
let transitioning = false;

function show(id, opts = {}) {
  if (!SCENES.includes(id) || transitioning || id === current) return;
  const next = document.getElementById(id);
  const prev = document.getElementById(current);
  transitioning = true;

  if (prev && prev !== next) {
    prev.classList.remove('active');
    prev.classList.add('prev');
    setTimeout(() => prev.classList.remove('prev'), 1050);
  }
  next.classList.remove('prev');
  next.style.transform = 'translate3d(0,0,-420px) scale(.86)';
  next.classList.add('active');
  requestAnimationFrame(() => requestAnimationFrame(() => { next.style.transform = ''; }));

  current = id;

  if (id === 'fireworks' || id === 'letter') {
    startFireworks(); // continuous: does not restart if already running
  } else {
    stopFireworks();
  }
  if (id === 'letter' && !opts.keepLetter) resetLetter();

  setTimeout(() => { transitioning = false; }, 700);
}

/* ---- Act 1: candle ---- */
function blowCandle() {
  if ($('#flame').classList.contains('out')) return;
  $('#flame').classList.add('out');
  $('#cakeTap').classList.add('blown');
  $('#cakeNote').textContent = COPY['cake.blown'];
  setTimeout(() => show('carousel'), 1400);
}
$('#cakeTap').addEventListener('click', blowCandle);
$('#cakeTap').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') blowCandle();
});
$('#micBtn').addEventListener('click', async () => {
  if (!navigator.mediaDevices?.getUserMedia) {
    $('#cakeNote').textContent = COPY['cake.micFail'];
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const src = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    src.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);
    $('#cakeNote').textContent = COPY['cake.micListen'];
    const listen = () => {
      analyser.getByteFrequencyData(data);
      const vol = data.reduce((a, b) => a + b, 0) / data.length;
      if (vol > 26) {
        stream.getTracks().forEach((t) => t.stop());
        ctx.close();
        blowCandle();
      } else requestAnimationFrame(listen);
    };
    listen();
  } catch {
    $('#cakeNote').textContent = COPY['cake.micDenied'];
  }
});

/* ---- Act 2 -> 3 ---- */
$('#letterBtn').addEventListener('click', () => show('fireworks'));

/* ---- Act 3 -> 4 ---- */
$('#fwNextBtn').addEventListener('click', () => show('letter'));
$('#fwMoreBtn').addEventListener('click', () => fwSalvo(3));

/* ---- Act 4: open the letter ---- */
function openLetter() {
  const stage = $('#letterStage');
  if (stage.classList.contains('opened')) return;
  stage.classList.add('opened');
  $('#letter').classList.add('revealed');
  $('#openHint').textContent = '';
  fwSalvo(4);
}
$('#envelope').addEventListener('click', openLetter);
$('#envelope').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') openLetter();
});
function resetLetter() {
  const stage = $('#letterStage');
  stage.classList.remove('opened');
  $('#letter').classList.remove('revealed');
  $('#openHint').textContent = COPY['letter.openHint'];
}

/* ---- replay ---- */
$('#replayBtn').addEventListener('click', () => {
  $('#flame').classList.remove('out');
  $('#cakeTap').classList.remove('blown');
  $('#cakeNote').textContent = COPY['cake.note'];
  resetLetter();
  show('cake');
});

/* ============================================================
   Hanabi — grand fireworks festival, canvas backdrop
   ============================================================ */
const fwCanvas = $('#fwCanvas');
const fwCtx = fwCanvas ? fwCanvas.getContext('2d') : null;
const FW_PALETTES = [
  ['#fff1b8', '#ffc657', '#ff8a5c', '#ffffff'],
  ['#ffd9ef', '#ff8fc7', '#c86bff', '#fff6ff'],
  ['#dff3ff', '#8fd8ff', '#6f8dff', '#ffffff'],
  ['#fff6df', '#ffd98a', '#ff9ec4', '#fffdf3'],
  ['#eafff3', '#9df5cf', '#66c2ff', '#ffffff'],
];
let fwRaf = 0, fwRunning = false, fwLast = 0, fwNext = 0;
let fwRockets = [], fwParts = [], fwW = 0, fwH = 0;

function fwResize() {
  if (!fwCanvas) return;
  fwW = window.innerWidth; fwH = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  fwCanvas.width = Math.round(fwW * dpr);
  fwCanvas.height = Math.round(fwH * dpr);
  fwCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function fwLaunch(x, y, scale) {
  scale = scale || 1;
  const sx = x == null ? fwW * (0.12 + Math.random() * 0.76) : x;
  const ty = y == null ? fwH * (0.10 + Math.random() * 0.42) : y;
  fwRockets.push({
    x: sx, y: fwH + 14, ty,
    vx: (Math.random() - 0.5) * 0.5,
    vy: -(6.6 + Math.random() * 2.8),
    pal: FW_PALETTES[(Math.random() * FW_PALETTES.length) | 0],
    scale, trail: [],
  });
}

function fwSalvo(n) {
  for (let i = 0; i < n; i += 1) {
    setTimeout(() => { if (fwRunning) fwLaunch(null, null, 0.9 + Math.random() * 0.55); }, i * 150);
  }
}

function fwBurst(r) {
  const { x, y, pal, scale } = r;
  const ring = Math.random() < 0.55;
  const count = Math.round((90 + Math.random() * 75) * scale);
  for (let i = 0; i < count; i += 1) {
    const a = ring
      ? (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.08
      : Math.random() * Math.PI * 2;
    const sp = (ring ? 2.3 + Math.random() * 0.95 : Math.pow(Math.random(), 0.6) * 3.3 + 0.4) * scale;
    fwParts.push({
      x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 1, decay: 0.005 + Math.random() * 0.009,
      color: pal[(Math.random() * pal.length) | 0],
      size: (0.9 + Math.random() * 1.5) * scale,
      trail: [], twinkle: Math.random() < 0.4, seed: Math.random() * 6.28,
    });
  }
  fwParts.push({ x, y, vx: 0, vy: 0, life: 1, decay: 0.055, color: '#ffffff', size: 16 * scale, trail: [], flash: true });
}

function fwFrame(now) {
  if (!fwRunning) return;
  const dt = Math.min(2.2, Math.max(0.4, (now - fwLast) / 16.67 || 1));
  fwLast = now;
  fwCtx.clearRect(0, 0, fwW, fwH);

  if (now > fwNext) {
    fwSalvo(2 + ((Math.random() * 3) | 0));
    fwNext = now + 900 + Math.random() * 900;
  }
  fwCtx.globalCompositeOperation = 'lighter';

  for (let i = fwRockets.length - 1; i >= 0; i -= 1) {
    const r = fwRockets[i];
    r.trail.push([r.x, r.y]);
    if (r.trail.length > 8) r.trail.shift();
    r.x += r.vx * dt; r.y += r.vy * dt; r.vy += 0.055 * dt;
    fwCtx.strokeStyle = r.pal[0]; fwCtx.lineWidth = 2; fwCtx.globalAlpha = 0.75;
    fwCtx.beginPath();
    r.trail.forEach((p, j) => (j ? fwCtx.lineTo(p[0], p[1]) : fwCtx.moveTo(p[0], p[1])));
    fwCtx.lineTo(r.x, r.y); fwCtx.stroke();
    fwCtx.globalAlpha = 1; fwCtx.fillStyle = '#fffbe8';
    fwCtx.beginPath(); fwCtx.arc(r.x, r.y, 2.4 * r.scale, 0, 6.283); fwCtx.fill();
    if (r.y <= r.ty || r.vy > -1.4) {
      fwBurst(r);
      fwRockets.splice(i, 1);
    }
  }

  for (let i = fwParts.length - 1; i >= 0; i -= 1) {
    const p = fwParts[i];
    p.life -= p.decay * dt;
    if (p.life <= 0) { fwParts.splice(i, 1); continue; }
    if (!p.flash) {
      p.trail.push([p.x, p.y]);
      if (p.trail.length > 5) p.trail.shift();
      p.vx *= Math.pow(0.986, dt);
      p.vy = p.vy * Math.pow(0.986, dt) + 0.028 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
    }
    const flick = p.twinkle ? 0.55 + 0.45 * Math.sin(now * 0.02 + p.seed) : 1;
    const a = Math.max(0, Math.min(1, p.life)) * flick;
    if (p.trail.length > 1) {
      fwCtx.strokeStyle = p.color; fwCtx.globalAlpha = a * 0.5; fwCtx.lineWidth = Math.max(0.6, p.size * 0.7);
      fwCtx.beginPath();
      p.trail.forEach((q, j) => (j ? fwCtx.lineTo(q[0], q[1]) : fwCtx.moveTo(q[0], q[1])));
      fwCtx.lineTo(p.x, p.y); fwCtx.stroke();
    }
    fwCtx.globalAlpha = a; fwCtx.fillStyle = p.color;
    fwCtx.shadowColor = p.color; fwCtx.shadowBlur = p.flash ? 30 : 8;
    fwCtx.beginPath(); fwCtx.arc(p.x, p.y, p.size * (p.flash ? p.life : 1), 0, 6.283); fwCtx.fill();
    fwCtx.shadowBlur = 0;
  }

  fwCtx.globalAlpha = 1;
  fwCtx.globalCompositeOperation = 'source-over';
  fwRaf = requestAnimationFrame(fwFrame);
}

function startFireworks() {
  if (!fwCtx || fwRunning) return; // continuous across fireworks -> letter
  fwRunning = true;
  fwCanvas.classList.add('on');
  fwRockets = []; fwParts = [];
  fwResize();
  fwLast = performance.now(); fwNext = fwLast + 250;
  fwSalvo(4);
  fwRaf = requestAnimationFrame(fwFrame);
}

function stopFireworks() {
  fwRunning = false;
  if (fwRaf) cancelAnimationFrame(fwRaf);
  fwRaf = 0; fwRockets = []; fwParts = [];
  fwCanvas.classList.remove('on');
  if (fwCtx) fwCtx.clearRect(0, 0, fwW, fwH);
}

window.addEventListener('resize', () => { if (fwRunning) fwResize(); });
fwCanvas && fwCanvas.addEventListener('pointerdown', (e) => fwLaunch(e.clientX, e.clientY, 1.05));

/* deep link for previewing a single act: #carousel / #fireworks / #letter */
const initial = location.hash.slice(1);
if (SCENES.includes(initial) && initial !== 'cake') {
  $('#cake').classList.remove('active');
  document.getElementById(initial).classList.add('active');
  current = initial;
  if (initial === 'fireworks' || initial === 'letter') startFireworks();
  if (initial === 'letter') resetLetter();
}
