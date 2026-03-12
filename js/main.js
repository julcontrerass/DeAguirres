/**
 * De Aguirres - Adoración Bíblica
 * UX/UI Interactions, Custom Cursor, i18n, Music Player
 */

document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // 1. TRANSLATIONS (ES / EN)
    // ===================================
    const translations = {
        es: {
            'nav.about': 'Nosotros',
            'nav.series': 'La Serie',
            'nav.music': 'Música',
            'nav.support': 'Colaborar',
            'nav.contact': 'Contacto',
            'hero.subtitle': 'Adoración Bíblica',
            'hero.discover': 'Descubrir',
            'about.quote': '"Nuestro deseo es simple: mostrar quién es Dios. De Él hablan nuestras canciones."',
            'series.label': 'La Serie',
            'series.title': 'Nuestra Historia',
            'series.description': 'Una travesía audiovisual sobre cómo Dios unió nuestros caminos y ministerio.',
            'series.part1': 'Parte 1',
            'series.part2': 'Parte 2',
            'series.part3': 'Parte 3',
            'series.encounter': 'Encuentro',
            'series.testimony': 'Testimonio',
            'series.covenant': 'Pacto',
            'music.label': 'Lanzamientos',
            'music.title': 'Música',
            'music.latest': 'Último Sencillo',
            'music.other': 'Otras Canciones',
            'music.single': 'Sencillo',
            'music.live': 'En Vivo',
            'music.caeelsol.desc': 'Un canto que nos invita a celebrar el día de reposo que el Creador separó desde el principio de los tiempos.',
            'contact.label': 'Contacto',
            'contact.title': 'Solicitud para Evento',
            'contact.question': '"¿Te interesa invitar a DE AGUIRRES a tu evento?"',
            'contact.description': 'Leemos con atención cada invitación. Completá el formulario y contanos sobre tu evento y el corazón detrás de la invitación.',
            'contact.cta': 'Completar Formulario',
            'support.label': 'Apoyo',
            'support.title': 'Donaciones',
            'support.subtitle': '"Sé parte del proyecto y ayúdanos a crecer"',
            'support.description': 'Siembra en nuestro ministerio. Tu generosidad nos permite seguir creando y compartiendo adoración bíblica.',
            'footer.dev': 'Desarrollado por TukiCode',
            'player.choose': 'Elegir canción',
            'player.playing': 'Reproduciendo',
            'disco.label': 'Discografía',
            'disco.title': 'Nuestra Música'
        },
        en: {
            'nav.about': 'About',
            'nav.series': 'The Series',
            'nav.music': 'Music',
            'nav.support': 'Support',
            'nav.contact': 'Contact',
            'hero.subtitle': 'Biblical Worship',
            'hero.discover': 'Discover',
            'about.quote': '"Our desire is simple: to show who God is. Our songs speak of Him."',
            'series.label': 'The Series',
            'series.title': 'Our Story',
            'series.description': 'An audiovisual journey about how God united our paths and ministry.',
            'series.part1': 'Part 1',
            'series.part2': 'Part 2',
            'series.part3': 'Part 3',
            'series.encounter': 'Encounter',
            'series.testimony': 'Testimony',
            'series.covenant': 'Covenant',
            'music.label': 'Releases',
            'music.title': 'Music',
            'music.latest': 'Latest Single',
            'music.other': 'Other Songs',
            'music.single': 'Single',
            'music.live': 'Live',
            'music.caeelsol.desc': 'A song that invites us to celebrate the day of rest that the Creator set apart from the beginning of time.',
            'contact.label': 'Contact',
            'contact.title': 'Event Request',
            'contact.question': '"Interested in inviting DE AGUIRRES to your event?"',
            'contact.description': 'We carefully read every invitation. Fill out the form and tell us about your event and the heart behind the invitation.',
            'contact.cta': 'Fill Out Form',
            'support.label': 'Support',
            'support.title': 'Donations',
            'support.subtitle': '"Be part of the project and help us grow"',
            'support.description': 'Sow into our ministry. Your generosity allows us to keep creating and sharing biblical worship.',
            'footer.dev': 'Developed by TukiCode',
            'player.choose': 'Choose song',
            'player.playing': 'Now playing',
            'disco.label': 'Discography',
            'disco.title': 'Our Music'
        }
    };

    let currentLang = 'es';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update all lang buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // Language switcher listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });


    // ===================================
    // 2. CUSTOM CURSOR (Rita Payés Style)
    // ===================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover effect on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .group');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursorDot.classList.add('hide');
            cursorRing.classList.add('hide');
        });
        document.addEventListener('mouseenter', () => {
            cursorDot.classList.remove('hide');
            cursorRing.classList.remove('hide');
        });
    }


    // ===================================
    // 3. HERO ENTRANCE ANIMATION
    // ===================================
    const heroElements = document.querySelectorAll('.hero-entrance, .hero-entrance-title, .hero-entrance-subtitle, .hero-entrance-image');
    heroElements.forEach((el, index) => {
        setTimeout(() => el.classList.add('visible'), 200 + (index * 250));
    });


    // ===================================
    // 4. MOBILE MENU TOGGLE
    // ===================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuText = document.getElementById('menu-text');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.style.display = 'flex';
            requestAnimationFrame(() => {
                mobileMenu.classList.remove('pointer-events-none', 'opacity-0');
            });
            menuText.textContent = 'Cerrar';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('pointer-events-none', 'opacity-0');
            menuText.textContent = 'Menu';
            document.body.style.overflow = '';
            setTimeout(() => { mobileMenu.style.display = 'none'; }, 500);
        }
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
        menuLinks.forEach(link => {
            link.addEventListener('click', () => { if (isMenuOpen) toggleMenu(); });
        });
    }


    // ===================================
    // 5. NAVBAR SCROLL EFFECT
    // ===================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-4');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('shadow-lg', 'py-4');
            navbar.classList.add('py-6');
        }
    });


    // ===================================
    // 6. SCROLL REVEAL ANIMATIONS
    // ===================================
    const revealSelectors = '.reveal, .reveal-slow, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade';
    const revealElements = document.querySelectorAll(revealSelectors);

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));


    // ===================================
    // 7. PARALLAX IMAGES
    // ===================================
    const parallaxImages = document.querySelectorAll('.aspect-\\[4\\/5\\] img, .aspect-video img');

    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            parallaxImages.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    img.style.transform = `translateY(${-(rect.top * 0.05)}px) scale(1.05)`;
                }
            });
        });
    });


    // ===================================
    // 8. MUSIC PLAYER (YouTube background)
    // ===================================
    const musicBtn = document.getElementById('music-player-btn');
    const musicPanel = document.getElementById('music-panel');
    const trackItems = document.querySelectorAll('.music-track-item');
    const nowPlayingName = document.getElementById('now-playing-name');
    const currentSongName = document.getElementById('current-song-name');
    const playIcon = document.getElementById('play-icon');
    let isPanelOpen = false;
    let currentTrackId = '1QgCxxPGkTXZ20m6rA9VOm';

    function selectTrack(trackId, trackName) {
        currentTrackId = trackId;

        // Update active state in list
        trackItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-track') === trackId);
        });
        if (nowPlayingName) nowPlayingName.textContent = trackName;
        if (currentSongName) currentSongName.textContent = trackName;

        // Load & play the corresponding YouTube video
        if (typeof songVideoIds !== 'undefined') {
            const song = songVideoIds.find(s => s.trackId === trackId);
            if (song && typeof ytLoadVideo === 'function') {
                ytLoadVideo(song.videoId);
            }
        }
    }

    // Track item click
    trackItems.forEach(item => {
        item.addEventListener('click', () => {
            selectTrack(item.getAttribute('data-track'), item.getAttribute('data-name'));
        });
    });

    // Music button: single click toggles play/pause, long press or when panel closed opens panel
    if (musicBtn) {
        // Add a pause/play button inside the panel
        const pauseBtn = document.createElement('button');
        pauseBtn.className = 'music-track-item';
        pauseBtn.style.cssText = 'justify-content:center; margin-top:0.5rem; border-top:1px solid rgba(255,237,210,0.1); padding-top:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; font-size:0.65rem;';
        pauseBtn.setAttribute('data-i18n-pause', 'true');
        pauseBtn.textContent = 'Pausar';
        musicPanel.appendChild(pauseBtn);

        pauseBtn.addEventListener('click', () => {
            if (typeof ytTogglePlay === 'function') ytTogglePlay();
            // Update button text
            setTimeout(() => {
                pauseBtn.textContent = (typeof ytIsPlaying !== 'undefined' && ytIsPlaying) ? 'Pausar' : 'Reproducir';
            }, 100);
        });

        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isPanelOpen = !isPanelOpen;
            musicPanel.classList.toggle('open', isPanelOpen);
        });
    }

    // Close panel on click outside
    document.addEventListener('click', (e) => {
        if (isPanelOpen && !musicPanel.contains(e.target) && !musicBtn.contains(e.target)) {
            isPanelOpen = false;
            musicPanel.classList.remove('open');
        }
    });


    // ===================================
    // 9. SCROLL INDICATOR HIDE
    // ===================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }

});
