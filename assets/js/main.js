// TIDElabs Main JavaScript - UngaBunga 2050
// Retro-futuristic interactive functionality

class TIDELabsApp {
    constructor() {
        this.init();
        this.bindEvents();
        this.startAnimations();
    }

    init() {
        console.log('🚀 TIDElabs initializing...');
        console.log('📡 UngaBunga 2050 protocol activated');
        
        // Initialize components
        this.initNavigation();
        this.initCounters();
        this.initTerminal();
        this.initMetrics();
        
        console.log('✅ System ready for temporal experiments');
    }

    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', this.handleNavigation.bind(this));
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.smoothScroll.bind(this));
        });

        // Window resize handler
        window.addEventListener('resize', this.handleResize.bind(this));

        // Keyboard shortcuts
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
    }

    initNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        // Intersection Observer for active navigation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.6
        });

        sections.forEach(section => observer.observe(section));
    }

    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const start = performance.now();
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(easeOutQuart * target);
                
                counter.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            
            requestAnimationFrame(updateCounter);
        };

        // Trigger counter animation when in view
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateCounter(entry.target);
                }
            });
        });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    initTerminal() {
        const terminal = document.querySelector('.terminal-body');
        if (!terminal) return;

        const commands = [
            { delay: 1000, text: 'Scanning temporal anomalies...', type: 'output' },
            { delay: 2000, text: 'Nostalgia levels: MAXIMUM', type: 'success' },
            { delay: 3000, text: 'Retro-synthesis complete', type: 'success' },
            { delay: 4000, text: 'run_experiment --type=temporal_flux', type: 'command' }
        ];

        let commandIndex = 0;
        
        const addTerminalLine = (text, type = 'output') => {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            
            if (type === 'command') {
                line.innerHTML = `
                    <span class="prompt">tide@labs:~$</span>
                    <span class="command">${text}</span>
                `;
            } else {
                line.innerHTML = `<span class="output ${type}">${text}</span>`;
            }
            
            terminal.appendChild(line);
            terminal.scrollTop = terminal.scrollHeight;
        };

        const runCommands = () => {
            if (commandIndex < commands.length) {
                const cmd = commands[commandIndex];
                setTimeout(() => {
                    addTerminalLine(cmd.text, cmd.type);
                    commandIndex++;
                    runCommands();
                }, cmd.delay);
            }
        };

        // Start terminal animation after a delay
        setTimeout(runCommands, 2000);
    }

    initMetrics() {
        const metrics = document.querySelectorAll('.metric-fill');
        
        // Animate metrics with random fluctuations
        const animateMetrics = () => {
            metrics.forEach(metric => {
                const currentWidth = parseFloat(metric.style.width) || 0;
                const baseWidth = parseFloat(metric.getAttribute('data-base') || currentWidth);
                
                if (!metric.hasAttribute('data-base')) {
                    metric.setAttribute('data-base', currentWidth);
                }
                
                // Add small random fluctuation
                const fluctuation = (Math.random() - 0.5) * 10;
                const newWidth = Math.max(0, Math.min(100, baseWidth + fluctuation));
                
                metric.style.width = `${newWidth}%`;
            });
        };

        // Update metrics every 3 seconds
        setInterval(animateMetrics, 3000);
    }

    handleNavigation(e) {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        
        if (target.startsWith('#')) {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    smoothScroll(e) {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        
        if (target.startsWith('#')) {
            const element = document.querySelector(target);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    handleResize() {
        // Handle responsive adjustments
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Disable heavy animations on mobile
            document.body.classList.add('mobile-optimized');
        } else {
            document.body.classList.remove('mobile-optimized');
        }
    }

    handleKeyboard(e) {
        // Keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    this.navigateToSection('#home');
                    break;
                case '2':
                    e.preventDefault();
                    this.navigateToSection('#experiments');
                    break;
                case '3':
                    e.preventDefault();
                    this.navigateToSection('#data');
                    break;
            }
        }
        
        // Easter egg: Konami code
        this.konamiCode = this.konamiCode || [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        
        this.konamiCode.push(e.code);
        if (this.konamiCode.length > konamiSequence.length) {
            this.konamiCode.shift();
        }
        
        if (this.konamiCode.join(',') === konamiSequence.join(',')) {
            this.activateEasterEgg();
            this.konamiCode = [];
        }
    }

    navigateToSection(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    activateEasterEgg() {
        console.log('🎉 Easter egg activated! UngaBunga mode engaged!');
        
        // Add special effects
        document.body.classList.add('easter-egg-active');
        
        // Show special message
        this.showNotification('🎉 UngaBunga mode activated! Welcome to the secret lab!', 'success');
        
        // Add glitch effect to logo
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.classList.add('glitch');
            logo.setAttribute('data-text', logo.textContent);
            
            setTimeout(() => {
                logo.classList.remove('glitch');
            }, 5000);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--primary-cyan)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)',
            fontSize: '0.9rem',
            zIndex: '1000',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-glow)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }

    startAnimations() {
        // Start background particle animation
        this.animateParticles();
        
        // Start status indicator pulsing
        this.animateStatusIndicators();
        
        // Start progress bar animations
        this.animateProgressBars();
    }

    animateParticles() {
        // Create additional floating particles
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--primary-cyan);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                animation: particleFloat ${15 + Math.random() * 10}s linear infinite;
                animation-delay: ${Math.random() * 15}s;
                box-shadow: 0 0 6px var(--primary-cyan);
            `;
            particlesContainer.appendChild(particle);
        }
    }

    animateStatusIndicators() {
        const indicators = document.querySelectorAll('.status-indicator.active');
        
        indicators.forEach(indicator => {
            setInterval(() => {
                indicator.style.opacity = indicator.style.opacity === '0.5' ? '1' : '0.5';
            }, 1000);
        });
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const originalWidth = bar.style.width;
            const baseWidth = parseFloat(originalWidth);
            
            setInterval(() => {
                const fluctuation = (Math.random() - 0.5) * 5;
                const newWidth = Math.max(0, Math.min(100, baseWidth + fluctuation));
                bar.style.width = `${newWidth}%`;
            }, 2000);
        });
    }
}

// Utility functions
const utils = {
    // Format numbers with retro styling
    formatNumber: (num) => {
        return num.toLocaleString();
    },
    
    // Generate random hex color
    randomColor: () => {
        const colors = ['#00ffff', '#ff00ff', '#ffff00', '#39ff14'];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    
    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tideLabsApp = new TIDELabsApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('🌙 TIDElabs entering sleep mode...');
    } else {
        console.log('☀️ TIDElabs awakening from sleep mode...');
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TIDELabsApp, utils };
}