function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return window.scrollTo({top:0,behavior:'smooth'});
  const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
  window.scrollTo({top:y,behavior:'smooth'});
}

(function heroParallax(){
  const heroBg = document.querySelector('.hero-bg .wave');
  const mockup = document.querySelector('.mockup');
  if(!heroBg) return;

  window.addEventListener('mousemove', (e)=>{
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    const dx = (e.clientX - cx)/cx;
    const dy = (e.clientY - cy)/cy;
    heroBg.style.transform = `translate3d(${dx*8}px, ${dy*6}px, 0) rotate(${dx*3}deg)`;
    if(mockup) mockup.style.transform = `translate3d(${dx*-6}px, ${dy*-4}px, 0)`;
  });

  document.querySelectorAll('.fade-in').forEach((el,i)=>el.style.animationDelay = (i*120)+'ms');
})();

document.querySelectorAll('img').forEach(img=>{ img.loading = 'lazy' });
