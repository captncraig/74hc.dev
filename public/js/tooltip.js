const tip = document.createElement('div');
tip.className = 'pin-tooltip';
document.body.appendChild(tip);

document.addEventListener('mouseover', e => {
  const el = e.target.closest('[data-desc]');
  if (!el) return;
  tip.textContent = el.dataset.desc;
  tip.classList.add('visible');
});

document.addEventListener('mousemove', e => {
  if (!tip.classList.contains('visible')) return;
  const x = e.clientX + 14;
  const y = e.clientY + 14;
  const right = x + tip.offsetWidth + 4;
  tip.style.left = (right > window.innerWidth ? e.clientX - tip.offsetWidth - 10 : x) + 'px';
  tip.style.top = y + 'px';
});

document.addEventListener('mouseout', e => {
  if (!e.target.closest('[data-desc]')) return;
  tip.classList.remove('visible');
});
