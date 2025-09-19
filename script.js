// Video data structure - can be easily extended when videos are added
const videoData = [
    // Example structure for when videos are added:
    // {
    //     id: 'video1',
    //     title: 'Normal Locomotion',
    //     description: 'Quadruped robot demonstrating standard walking gait',
    //     filename: 'normal_locomotion.mp4',
    //     thumbnail: 'thumbnails/normal_locomotion.jpg'
    // },
    // {
    //     id: 'video2',
    //     title: 'Fault-Tolerant Locomotion',
    //     description: 'Robot adapting to leg failure during movement',
    //     filename: 'fault_tolerant_locomotion.mp4',
    //     thumbnail: 'thumbnails/fault_tolerant.jpg'
    // }
];

// DOM elements
const videoGrid = document.getElementById('videoGrid');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    loadVideos();
    addScrollAnimations();
});

// Initialize page functionality
function initializePage() {
    console.log('Fault-Tolerant Locomotion Video Gallery Loaded');
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 200);
    });
}

// Load and display videos
function loadVideos() {
    if (videoData.length === 0) {
        // Keep the placeholder when no videos are available
        return;
    }
    
    // Clear the placeholder
    videoGrid.innerHTML = '';
    
    // Create video elements
    videoData.forEach(video => {
        const videoElement = createVideoElement(video);
        videoGrid.appendChild(videoElement);
    });
}

// Create individual video element
function createVideoElement(videoInfo) {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
        <video 
            controls 
            preload="metadata"
            poster="${videoInfo.thumbnail || ''}"
        >
            <source src="videos/${videoInfo.filename}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="video-info">
            <h3>${videoInfo.title}</h3>
            <p>${videoInfo.description}</p>
            <div class="video-controls">
                <button onclick="playVideo('${videoInfo.id}')">Play</button>
                <button onclick="pauseVideo('${videoInfo.id}')">Pause</button>
                <button onclick="restartVideo('${videoInfo.id}')">Restart</button>
            </div>
        </div>
    `;
    
    videoItem.setAttribute('data-video-id', videoInfo.id);
    return videoItem;
}

// Video control functions
function playVideo(videoId) {
    const videoElement = document.querySelector(`[data-video-id="${videoId}"] video`);
    if (videoElement) {
        videoElement.play();
    }
}

function pauseVideo(videoId) {
    const videoElement = document.querySelector(`[data-video-id="${videoId}"] video`);
    if (videoElement) {
        videoElement.pause();
    }
}

function restartVideo(videoId) {
    const videoElement = document.querySelector(`[data-video-id="${videoId}"] video`);
    if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all video items and feature cards
    document.querySelectorAll('.video-item, .feature-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Utility function to add new video (for future use)
function addVideo(videoInfo) {
    videoData.push(videoInfo);
    
    // If this is the first video, clear the placeholder
    if (videoData.length === 1) {
        videoGrid.innerHTML = '';
    }
    
    const videoElement = createVideoElement(videoInfo);
    videoGrid.appendChild(videoElement);
    
    // Trigger animation
    setTimeout(() => {
        videoElement.style.opacity = '1';
        videoElement.style.transform = 'translateY(0)';
    }, 100);
}

// Handle video upload (placeholder for future functionality)
function handleVideoUpload() {
    // This function can be extended to handle file uploads
    // when the repository starts containing actual video files
    console.log('Video upload functionality can be added here');
}

// Search and filter functionality (for when there are multiple videos)
function filterVideos(searchTerm) {
    const filteredVideos = videoData.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Re-render filtered videos
    videoGrid.innerHTML = '';
    filteredVideos.forEach(video => {
        const videoElement = createVideoElement(video);
        videoGrid.appendChild(videoElement);
    });
    
    if (filteredVideos.length === 0) {
        videoGrid.innerHTML = `
            <div class="video-placeholder">
                <div class="placeholder-content">
                    <h3>No videos found</h3>
                    <p>Try adjusting your search terms.</p>
                    <div class="placeholder-icon">🔍</div>
                </div>
            </div>
        `;
    }
}

// Error handling for video loading
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'VIDEO') {
        console.warn('Video failed to load:', e.target.src);
        // Could show an error placeholder or fallback image
    }
}, true);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Allow space bar to play/pause focused videos
    if (e.code === 'Space' && e.target.tagName === 'VIDEO') {
        e.preventDefault();
        if (e.target.paused) {
            e.target.play();
        } else {
            e.target.pause();
        }
    }
});

// Export functions for potential external use
window.VideoGallery = {
    addVideo,
    filterVideos,
    playVideo,
    pauseVideo,
    restartVideo
};