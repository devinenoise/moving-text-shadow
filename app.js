const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const range = 500; // 500px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xRange = Math.round((x / width) * range - range / 2);
  const yRange = Math.round((y / width) * range - range / 2);

  text.style.textShadow = `
      ${xRange}px ${yRange}px 0 rgba(255,0,255,0.7),
      ${xRange * -1}px ${yRange}px 0 rgba(0,255,255,0.7),
      ${yRange}px ${xRange * -1}px 0 rgba(0,255,0,0.7),
      ${yRange * -1}px ${xRange}px 0 rgba(0,0,255,0.7)
    `;
}

hero.addEventListener('mousemove', shadow);
