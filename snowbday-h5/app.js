const $ = (selector) => document.querySelector(selector);
const scenes = ['intro', 'cake', 'carousel', 'letter'];

function show(id) {
  scenes.forEach((name) => {
    const el = $('#' + name);
    const visible = name === id;
    el.hidden = !visible;
    el.classList.toggle('active', visible);
  });
  if (id !== 'carousel') closeViewer();
}

$('#startBtn').addEventListener('click', () => show('cake'));

function blowCandle() {
  if ($('#flame').classList.contains('out')) return;
  $('#flame').classList.add('out');
  $('#cakeTap').classList.add('blown');
  $('#cakeNote').textContent = '愿望已被星光收到 ✦';
  setTimeout(() => show('carousel'), 1300);
}
$('#cakeTap').addEventListener('click', blowCandle);
$('#cakeTap').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') blowCandle();
});
$('#micBtn').addEventListener('click', async () => {
  if (!navigator.mediaDevices?.getUserMedia) {
    $('#cakeNote').textContent = '当前浏览器不支持吹气感应，直接点烛火吧。';
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    const analyser = context.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);
    $('#cakeNote').textContent = '听见你的呼吸啦，吹一下试试…';
    const listen = () => {
      analyser.getByteFrequencyData(data);
      const volume = data.reduce((a, b) => a + b, 0) / data.length;
      if (volume > 26) {
        stream.getTracks().forEach((t) => t.stop());
        context.close();
        blowCandle();
      } else requestAnimationFrame(listen);
    };
    listen();
  } catch {
    $('#cakeNote').textContent = '没有获得麦克风权限，点烛火也能许愿。';
  }
});

/* ===== Carousel lamp ===== */
const lamp = $('#lamp');
const ring = $('#ring');
const photos = Array.from(document.querySelectorAll('.photo'));
const viewer = $('#viewer');
const viewerImg = $('#viewerImg');
const viewerCap = $('#viewerCap');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Decorative bulbs + scalloped trim, generated so the markup stays small.
const bulbs = $('#bulbs');
const scallop = $('#scallop');
for (let i = 0; i < 16; i += 1) {
  const bulb = document.createElement('i');
  bulb.className = 'bulb';
  bulb.style.setProperty('--d', (i * 0.14).toFixed(2) + 's');
  bulbs.appendChild(bulb);
  const dot = document.createElement('i');
  dot.className = 'scallop-dot';
  scallop.appendChild(dot);
}

let angle = 0;
let velocity = 0;
let dragging = false;
let lastX = 0;
let moved = 0;
let pressTarget = null;
const autoSpin = reduced || document.hidden ? 0 : 0.2;

function render() {
  if (!dragging && viewer.hidden) {
    angle += autoSpin + velocity;
    velocity *= 0.93;
    if (Math.abs(velocity) < 0.002) velocity = 0;
  }
  ring.style.setProperty('--angle', angle.toFixed(2) + 'deg');
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

lamp.addEventListener('pointerdown', (event) => {
  dragging = true;
  velocity = 0;
  lastX = event.clientX;
  moved = 0;
  pressTarget = event.target;
  lamp.setPointerCapture(event.pointerId);
  lamp.classList.add('dragging');
});
lamp.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  const dx = event.clientX - lastX;
  lastX = event.clientX;
  moved += Math.abs(dx);
  angle += dx * 0.38;
  velocity = dx * 0.1;
});
function endDrag() {
  if (!dragging) return;
  dragging = false;
  lamp.classList.remove('dragging');
  if (moved < 8) {
    const frame = pressTarget?.closest?.('.photo');
    if (frame) openViewer(frame);
  }
  pressTarget = null;
}
['pointerup', 'pointercancel'].forEach((type) => lamp.addEventListener(type, endDrag));

function openViewer(frame) {
  const img = frame.querySelector('img');
  viewerImg.src = img.getAttribute('src');
  viewerImg.alt = frame.dataset.caption || '';
  viewerCap.textContent = frame.dataset.caption || '';
  viewer.hidden = false;
}
function closeViewer() {
  viewer.hidden = true;
  viewerImg.removeAttribute('src');
}
$('#viewerClose').addEventListener('click', closeViewer);
viewer.addEventListener('click', (event) => {
  if (event.target === viewer) closeViewer();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !viewer.hidden) closeViewer();
});
photos.forEach((frame) => {
  frame.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openViewer(frame);
    }
  });
});

$('#letterBtn').addEventListener('click', () => show('letter'));
$('#replayBtn').addEventListener('click', () => {
  $('#flame').classList.remove('out');
  $('#cakeTap').classList.remove('blown');
  $('#cakeNote').textContent = '不方便开启麦克风？直接点蜡烛也可以。';
  show('intro');
});

// Deep link for previewing a single act, e.g. index.html#carousel
const initialScene = location.hash.slice(1);
if (scenes.includes(initialScene)) show(initialScene);
