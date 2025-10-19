// TIDElabs Animations - Advanced retro-futuristic effects
// UngaBunga 2050 Animation System

class RetroAnimations {
    constructor() {
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        if (this.isReducedMotion) {
            console.log('🎭 Reduced motion detected, using minimal animations');
            return;
        }

        this.initMatrixRain();
        this.initGlitchEffects();
        this.initHolographicEffects();
        this.initTypewriterEffect();
        this.initFloatingElements();
        this.initInteractiveEffects();
    }

    initMatrixRain() {
        // Create matrix rain effect in background
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain';
        document.body.appendChild(matrixContainer);

        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.style.cssText = `
                position: absolute;
                left: ${i * 20}px;
                top: -100px;
                color: var(--neon-green);
                font-family: var(--font-mono);
                font-size: 14px;
                opacity: 0.3;
                animation: matrixFall ${5 + Math.random() * 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            // Add random characters
            for (let j = 0; j < 20; j++) {
                const char = document.createElement('div');
                char.textContent = characters[Math.floor(Math.random() * characters.length)];
                char.style.opacity = Math.random();
                column.appendChild(char);
            }
            
            matrixContainer.appendChild(column);
        }

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes matrixFall {
                0% { transform: translateY(-100vh); }
                100% { transform: translateY(100vh); }
            }
        `;
        document.head.appendChild(style);
    }

    initGlitchEffects() {
        // Add glitch effect to random elements
        const glitchTargets = document.querySelectorAll('.hero-title, .section-title');
        
        glitchTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                this.applyGlitchEffect(target);
            });
        });
    }

    applyGlitchEffect(element) {
        element.classList.add('glitch');
        element.setAttribute('data-text', element.textContent);
        
        setTimeout(() => {
            element.classList.remove('glitch');
        }, 1000);
    }

    initHolographicEffects() {
        // Add holographic shimmer to cards
        const cards = document.querySelectorAll('.experiment-card, .data-panel');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('holographic');
            });
            
            card.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    card.classList.remove('holographic');
                }, 1000);
            });
        });
    }

    initTypewriterEffect() {
        // Typewriter effect for terminal
        const terminalLines = document.querySelectorAll('.terminal-line .command, .terminal-line .output');
        
        terminalLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            
            setTimeout(() => {
                this.typeWriter(line, text, 50);
            }, index * 1000);
        });
    }

    typeWriter(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    initFloatingElements() {
        // Create floating geometric shapes
        const shapes = ['◆', '◇', '●', '○', '▲', '△', '■', '□'];
        const container = document.createElement('div');
        container.className = 'floating-shapes';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        for (let i = 0; i < 10; i++) {
            const shape = document.createElement('div');
            shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            shape.style.cssText = `
                position: absolute;
                color: var(--primary-cyan);
                font-size: ${10 + Math.random() * 20}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: 0.3;
                animation: floatShape ${10 + Math.random() * 20}s ease-in-out infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
            container.appendChild(shape);
        }
        
        document.body.appendChild(container);
        
        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatShape {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(20px, -20px) rotate(90deg); }
                50% { transform: translate(-20px, -40px) rotate(180deg); }
                75% { transform: translate(-40px, 20px) rotate(270deg); }
            }
        `;
        document.head.appendChild(style);
    }

    initInteractiveEffects() {
        // Mouse trail effect
        this.initMouseTrail();
        
        // Click ripple effect
        this.initClickRipples();
        
        // Hover glow effects
        this.initHoverGlow();
    }

    initMouseTrail() {
        const trail = [];
        const trailLength = 10;
        
        document.addEventListener('mousemove', (e) => {
            // Add new point to trail
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            // Remove old points
            while (trail.length > trailLength) {
                trail.shift();
            }
            
            // Update trail visualization
            this.updateMouseTrail(trail);
        });
    }

    updateMouseTrail(trail) {
        // Remove existing trail elements
        document.querySelectorAll('.mouse-trail-point').forEach(el => el.remove());
        
        trail.forEach((point, index) => {
            const trailPoint = document.createElement('div');
            trailPoint.className = 'mouse-trail-point';
            trailPoint.style.cssText = `
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: ${4 + index * 2}px;
                height: ${4 + index * 2}px;
                background: var(--primary-cyan);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: ${index / trail.length};
                transform: translate(-50%, -50%);
                box-shadow: 0 0 10px var(--primary-cyan);
            `;
            document.body.appendChild(trailPoint);
            
            // Remove after animation
            setTimeout(() => {
                if (trailPoint.parentNode) {
                    trailPoint.parentNode.removeChild(trailPoint);
                }
            }, 500);
        });
    }

    initClickRipples() {
        document.addEventListener('click', (e) => {
            this.createRipple(e.clientX, e.clientY);
        });
    }

    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border: 2px solid var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            animation: rippleExpand 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleExpand {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 1;
                }
                100% {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    initHoverGlow() {
        const glowElements = document.querySelectorAll('.nav-link, .retro-button, .experiment-card');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.addHoverGlow(e.target);
            });
            
            element.addEventListener('mouseleave', (e) => {
                this.removeHoverGlow(e.target);
            });
        });
    }

    addHoverGlow(element) {
        element.style.transition = 'all 0.3s ease';
        element.style.filter = 'brightness(1.2) saturate(1.3)';
        element.style.transform = 'scale(1.02)';
    }

    removeHoverGlow(element) {
        element.style.filter = 'none';
        element.style.transform = 'scale(1)';
    }

    // Utility method to create custom animations
    createCustomAnimation(element, keyframes, options = {}) {
        if (this.isReducedMotion) return;
        
        const animation = element.animate(keyframes, {
            duration: options.duration || 1000,
            easing: options.easing || 'ease-in-out',
            iterations: options.iterations || 1,
            fill: options.fill || 'forwards'
        });
        
        return animation;
    }

    // Method to pause all animations
    pauseAnimations() {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }

    // Method to resume all animations
    resumeAnimations() {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
}

// Performance monitoring
class AnimationPerformance {
    constructor() {
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fps = 0;
        this.monitor();
    }

    monitor() {
        const now = performance.now();
        this.frameCount++;
        
        if (now - this.lastTime >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
            this.frameCount = 0;
            this.lastTime = now;
            
            // Adjust animations based on performance
            if (this.fps < 30) {
                this.reduceAnimations();
            }
        }
        
        requestAnimationFrame(() => this.monitor());
    }

    reduceAnimations() {
        // Reduce animation complexity if performance is poor
        document.body.classList.add('reduced-animations');
        console.log('⚡ Reducing animations for better performance');
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.retroAnimations = new RetroAnimations();
    window.animationPerformance = new AnimationPerformance();
});

// Handle visibility changes to pause/resume animations
document.addEventListener('visibilitychange', () => {
    if (window.retroAnimations) {
        if (document.hidden) {
            window.retroAnimations.pauseAnimations();
        } else {
            window.retroAnimations.resumeAnimations();
        }
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RetroAnimations, AnimationPerformance };
}