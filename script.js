// Stagger a fade-in across the page sections on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 200);
    });
});

// Surface videos that fail to load
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'VIDEO') {
        console.warn('Video failed to load:', e.target.src);
    }
}, true);

// Allow the space bar to play/pause the focused video
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && e.target.tagName === 'VIDEO') {
        e.preventDefault();
        if (e.target.paused) {
            e.target.play();
        } else {
            e.target.pause();
        }
    }
});
