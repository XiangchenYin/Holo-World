# HoloWorld Project Page

This is a project showcase website for HoloWorld, based on the VerseCrafter page template.

## Structure

```
HoloWorld/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet
│   ├── google-fonts.css # Google Fonts import
│   └── font-awesome/
│       └── all.min.css # Font Awesome icons
├── js/
│   └── main.js         # JavaScript for interactions
├── assets/
│   └── logos/
│       └── holoworld.svg # Project logo
└── README.md           # This file
```

## How to Use

1. **Edit Content**: Open `index.html` and replace placeholder text with your actual project information:
   - Update the title, subtitle, and tagline
   - Add author names and affiliations
   - Update paper/code/model links
   - Replace BibTeX citation

2. **Add Media**:
   - Place your demo video in `assets/demo.mp4`
   - Add method diagrams to `assets/method.png`
   - Add any additional images/videos to the `assets/` folder

3. **Customize Styling**:
   - Edit `css/style.css` to adjust colors, fonts, or layout
   - The page uses a purple/blue/gold gradient theme by default

4. **Add Sections**:
   - Copy existing section structures in `index.html`
   - Update navigation links in the nav bar
   - Add corresponding IDs to new sections

5. **Logo**:
   - Replace `assets/logos/holoworld.svg` with your own logo
   - Supported formats: SVG, PNG, JPG

## Features

- ✨ Responsive design (mobile-friendly)
- 🎨 Modern gradient styling
- 📱 Fixed navigation bar on scroll
- ⬆️ Back-to-top button
- 📋 One-click BibTeX copy
- 🎬 Video embed support
- 📊 Results grid layout

## Local Testing

Simply open `index.html` in a web browser:

```bash
# Using Python's built-in server
cd /home/liuzj/code/HoloWorld
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

## Deployment

You can deploy this to:
- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **GitLab Pages**: Similar to GitHub Pages
- **Netlify/Vercel**: Drag and drop the folder
- **Your own server**: Upload via FTP/SSH

## Credits

Template inspired by [VerseCrafter](https://sixiaozheng.github.io/VerseCrafter_page/)

## License

Customize as needed for your project.
