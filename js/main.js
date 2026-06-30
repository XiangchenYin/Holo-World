// Copy BibTeX to clipboard
function copyBibtex() {
    const bibtexContent = document.getElementById('bibtex-content').textContent;
    const button = event.target.closest('.copy-button');
    const originalText = button.innerHTML;

    // Try modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(bibtexContent).then(() => {
            showCopySuccess(button, originalText);
        }).catch(() => {
            fallbackCopyTextToClipboard(bibtexContent, button, originalText);
        });
    } else {
        // Fallback to traditional method
        fallbackCopyTextToClipboard(bibtexContent, button, originalText);
    }
}

function showCopySuccess(button, originalText) {
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    button.style.background = 'rgba(0, 255, 136, 0.2)';
    button.style.borderColor = 'rgba(0, 255, 136, 0.5)';
    button.style.color = '#00ff88';

    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'rgba(0, 191, 255, 0.2)';
        button.style.borderColor = 'rgba(0, 191, 255, 0.5)';
        button.style.color = '#00bfff';
    }, 2000);
}

function fallbackCopyTextToClipboard(text, button, originalText) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const result = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (result) {
            showCopySuccess(button, originalText);
        } else {
            throw new Error('Copy command failed');
        }
    } catch (err) {
        document.body.removeChild(textArea);
        alert('Copy failed. Please manually select and copy the BibTeX content.');
    }
}

// Navigation bar and back to top button
const navBar = document.getElementById('navBar');
const backToTop = document.getElementById('backToTop');
let lastScrollY = window.scrollY;

function handleScroll() {
    const currentScrollY = window.scrollY;

    // Show/hide navigation bar
    if (currentScrollY > 300) {
        navBar.classList.add('visible');
    } else {
        navBar.classList.remove('visible');
    }

    // Show/hide back to top button
    if (currentScrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    lastScrollY = currentScrollY;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check

// Keep comparison videos inside each sample aligned for side-by-side viewing.
function setupSynchronizedVideoGroups() {
    const sampleGroups = document.querySelectorAll('.weather-sample, .weather-comparison-sample');

    sampleGroups.forEach(group => {
        const videos = Array.from(group.querySelectorAll('video'));
        if (videos.length < 2) return;

        videos.forEach(video => {
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = 'auto';
        });

        const metadataReady = videos.map(video => new Promise(resolve => {
            if (Number.isFinite(video.duration) && video.duration > 0) {
                resolve();
                return;
            }
            video.addEventListener('loadedmetadata', resolve, { once: true });
        }));

        Promise.all(metadataReady).then(() => {
            const durations = videos.map(video => video.duration || 0);
            const targetDuration = Math.max(...durations);
            if (!Number.isFinite(targetDuration) || targetDuration <= 0) return;

            const masterIndex = durations.indexOf(targetDuration);
            const masterVideo = videos[masterIndex];

            videos.forEach((video, index) => {
                if (durations[index] > 0) {
                    video.playbackRate = durations[index] / targetDuration;
                }
            });

            const playAll = () => {
                videos.forEach(video => {
                    video.play().catch(() => {
                        // Muted autoplay should work; ignore browser-specific delays.
                    });
                });
            };

            const restartAll = () => {
                videos.forEach(video => {
                    try {
                        video.currentTime = 0;
                    } catch (error) {
                        // Some browsers briefly reject seeks before media is fully ready.
                    }
                });
                playAll();
            };

            const syncVideos = () => {
                if (!document.hidden && !masterVideo.paused && masterVideo.duration > 0) {
                    const progress = masterVideo.currentTime / masterVideo.duration;

                    videos.forEach(video => {
                        if (video === masterVideo || !video.duration) return;

                        const targetTime = progress * video.duration;
                        if (Math.abs(video.currentTime - targetTime) > 0.08) {
                            try {
                                video.currentTime = targetTime;
                            } catch (error) {
                                // Ignore transient seek errors during buffering.
                            }
                        }

                        if (video.paused) {
                            video.play().catch(() => {});
                        }
                    });
                }

                requestAnimationFrame(syncVideos);
            };

            restartAll();
            requestAnimationFrame(syncVideos);

            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) {
                    restartAll();
                }
            });
        });
    });
}

setupSynchronizedVideoGroups();
