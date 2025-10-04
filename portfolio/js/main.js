(function(){
  // Small helper: select
  const $ = (s, el=document)=> el.querySelector(s);
  const navToggle = $('#navToggle');
  const primaryNav = $('#primaryNav');
  const year = $('#year');
  const contactForm = $('#contactForm');
  const formMessage = $('#formMessage');

  // set year
  if(year) year.textContent = new Date().getFullYear();

  // mobile nav toggle
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', ()=>{
      const open = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  // basic contact form handler — does not send email but shows confirmation
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = $('#name').value.trim();
      const email = $('#email').value.trim();
      const msg = $('#message').value.trim();
      if(!name || !email || !msg){
        formMessage.textContent = 'Please complete all fields.';
        return;
      }
      formMessage.textContent = 'Thanks! Your message is saved (mobile demo). Include your preferred contact method in README.';
      contactForm.reset();
    });
  }

})();