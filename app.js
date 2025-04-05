// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Header con efecto de scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animación de aparición al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos a animar
const animateElements = document.querySelectorAll('.gallery-item, .feature, .amenidad, .edificio-image, .contact-form');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Animación para elementos que aparecen con fade-in
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
});

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el formulario
        // Por ahora solo mostramos un mensaje de éxito
        const formElements = contactForm.elements;
        let isValid = true;
        
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].type !== 'submit' && formElements[i].value.trim() === '') {
                isValid = false;
                formElements[i].style.borderColor = 'red';
            } else if (formElements[i].type !== 'submit') {
                formElements[i].style.borderColor = '';
            }
        }
        
        if (isValid) {
            alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    });
}

// Añadir clase de animación cuando la página está cargada
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-item, .feature, .amenidad').forEach(el => {
        el.classList.add('animate');
    });
});

// Estilo para elementos animados
document.head.insertAdjacentHTML('beforeend', `
<style>
.animate {
    animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
`);