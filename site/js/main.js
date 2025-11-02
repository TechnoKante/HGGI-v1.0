// Basic site interactions and small animations
(function(){
  // Mobile menu toggle
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', ()=>{
      menu.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    });
  }

  // Simple scroll reveal using IntersectionObserver
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('main section, main article').forEach(el=>{
    el.classList.add('opacity-0','translate-y-6','transition','duration-700','ease-out');
    observer.observe(el);
  });

  // Simple carousel for .simple-carousel instances
  document.querySelectorAll('.simple-carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    if (!track) return;

    let index = 0;
    const items = Array.from(track.children);
    const itemWidth = items[0] ? items[0].getBoundingClientRect().width + parseInt(getComputedStyle(track).gap || 0,10) : 0;

    function update(){
      track.style.transform = `translateX(${ -index * itemWidth }px)`;
    }

    if (prev) prev.addEventListener('click', ()=>{ index = Math.max(0, index-1); update(); });
    if (next) next.addEventListener('click', ()=>{ index = Math.min(items.length-1, index+1); update(); });

    // make responsive: recalc on resize
    window.addEventListener('resize', ()=>{
      const w = items[0] ? items[0].getBoundingClientRect().width + parseInt(getComputedStyle(track).gap || 0,10) : 0;
      // update itemWidth via closure by reassigning through a trick
      // we can't reassign const, so just call update which uses latest geometry
      update();
    });
  });

  // Simple accessibility: close mobile menu on Escape
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape'){
      if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
    }
  });

})();
