// script.js - small UI interactions
document.addEventListener('DOMContentLoaded', function(){
  // Current year in footer
  const y = new Date().getFullYear(); document.getElementById('year').textContent = y;

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Simple analytics hook: count WhatsApp clicks locally
  const waButtons = document.querySelectorAll('a[href*="wa.me"]');
  waButtons.forEach(b => b.addEventListener('click', ()=>{
    try{ localStorage.waClicks = (parseInt(localStorage.waClicks||'0')+1); }catch(e){}
  }));

  // Improve accessibility for details elements
  document.querySelectorAll('details').forEach(d=>{
    d.addEventListener('toggle', ()=> d.setAttribute('aria-expanded', d.open));
  });
});
