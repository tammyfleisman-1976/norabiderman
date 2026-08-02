const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 18);
});

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('[data-contact-form]');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const submitButton = form.querySelector('[data-submit-button]');
  const submitLabel = form.querySelector('[data-submit-label]');
  const status = form.querySelector('[data-form-status]');
  const endpoint = form.dataset.emailEndpoint;

  if (!endpoint || !status) return;

  submitButton?.setAttribute('disabled', 'true');
  form.setAttribute('aria-busy', 'true');
  if (submitLabel) submitLabel.textContent = 'Enviando…';
  status.className = 'form-status';
  status.textContent = '';

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'No fue posible enviar la consulta.');
    }

    form.reset();
    status.className = 'form-status form-success show';
    status.innerHTML = '<strong>Gracias.</strong> Tu consulta fue enviada correctamente. Nora o su equipo se pondrán en contacto con vos.';
  } catch (error) {
    status.className = 'form-status form-error show';
    status.innerHTML = 'No pudimos enviar tu consulta en este momento. Probá nuevamente o escribí a <a href="mailto:norabiderman@gmail.com">norabiderman@gmail.com</a>.';
    console.error('Error al enviar el formulario:', error);
  } finally {
    submitButton?.removeAttribute('disabled');
    form.removeAttribute('aria-busy');
    if (submitLabel) submitLabel.textContent = 'Enviar mi consulta';
  }
});
