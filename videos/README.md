# Video Configuration

This file provides instructions for adding videos to the gallery.

## Adding Videos

1. Place your video files in the `videos/` directory
2. Place thumbnail images in the `thumbnails/` directory  
3. Update the `videoData` array in `script.js` with your video information

## Supported Video Formats

- MP4 (recommended)
- WebM
- AVI
- MOV

## Video Information Structure

When adding videos, use this structure in the `script.js` file:

```javascript
{
    id: 'unique_video_id',
    title: 'Video Title',
    description: 'Brief description of what the video shows',
    filename: 'video_file.mp4',
    thumbnail: 'thumbnail_image.jpg' // optional
}
```

## Example Videos to Add

Here are some suggested video categories for fault-tolerant locomotion:

- **Normal Locomotion**: Baseline walking/running gaits
- **Single Leg Failure**: Robot adapting to one disabled leg
- **Multiple Leg Failure**: Adaptation to multiple leg failures
- **Terrain Adaptation**: Movement on different surfaces
- **Recovery Behaviors**: Getting up from falls
- **Speed Variations**: Different locomotion speeds
- **Turning Maneuvers**: Directional changes under failure conditions

## File Naming Convention

Suggested naming pattern:
- `normal_walk.mp4`
- `single_leg_failure.mp4`
- `rough_terrain.mp4`
- `recovery_behavior.mp4`
- etc.