# Fault-Tolerant Quadruped Locomotion

Repository containing videos of RL policies for fault-tolerant quadruped locomotion

## 🎥 Video Gallery

This repository includes a web-based video gallery to showcase reinforcement learning policies for fault-tolerant locomotion in quadruped robots.

### Viewing the Gallery

1. **Online**: Open `index.html` in any web browser
2. **Local Server**: For best performance, serve the files using a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. **GitHub Pages**: This repository can be deployed to GitHub Pages for online viewing

### Adding Videos

1. Place video files in the `videos/` directory
2. Add thumbnail images to the `thumbnails/` directory (optional)
3. Update the video information in `script.js`:
   ```javascript
   const videoData = [
       {
           id: 'video1',
           title: 'Normal Locomotion',
           description: 'Quadruped robot demonstrating standard walking gait',
           filename: 'normal_locomotion.mp4',
           thumbnail: 'normal_locomotion.jpg'
       }
       // Add more videos here
   ];
   ```

### Features

- 📱 Responsive design for mobile and desktop
- 🎮 Video controls (play, pause, restart)
- 🔍 Search and filter functionality (when multiple videos are added)
- ♿ Accessibility features
- 🎨 Clean, professional interface

### File Structure

```
├── index.html          # Main web page
├── styles.css          # Styling and layout
├── script.js           # Interactive functionality
├── videos/             # Video files directory
├── thumbnails/         # Video thumbnail images
└── README.md           # This file
```

## Research Focus

This project focuses on developing robust reinforcement learning policies that enable quadruped robots to maintain stable locomotion even when experiencing mechanical failures or challenging environmental conditions.
