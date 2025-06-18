// --- Lógica del Menú Hamburguesa y Scrollspy ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica del Menú Hamburguesa ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cierra el menú móvil al hacer clic en un enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Lógica de la Navegación Activa (Scrollspy) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const options = {
        rootMargin: '-50% 0px -50% 0px', // Activa el enlace cuando la sección está en el centro
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar clase 'active' de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Obtener el ID de la sección actual
                const id = entry.target.getAttribute('id');
                
                // Encontrar el enlace correspondiente y añadirle la clase 'active'
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Scroll suave para enlaces internos ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
