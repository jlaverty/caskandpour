# Cask & Pour - Event Promotional Website

A modern, responsive promotional website for the Cask & Pour whiskey tasting event. This website is designed to be deployed on Cloudflare Pages.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Event Information**: Clear display of date, time, location, and ticket details
- **About Section**: Highlights key features and what attendees can expect
- **Contact Information**: Easy-to-find email, phone, and social media links
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Includes meta tags for better search engine visibility

## Deployment on Cloudflare Pages

### Quick Deploy

1. **Connect your GitHub repository** to Cloudflare Pages
2. **Configure build settings**:
   - Build command: (leave empty - static site)
   - Build output directory: `/`
   - Root directory: `/`
3. **Deploy**: Click "Save and Deploy"

### Manual Deployment

You can also deploy directly using the Cloudflare Pages dashboard:

1. Log in to your Cloudflare account
2. Go to Pages
3. Click "Create a project"
4. Connect your GitHub repository
5. The site will automatically deploy from the root directory

### Custom Domain

To add a custom domain:

1. Go to your Pages project
2. Click on "Custom domains"
3. Add your domain and follow the DNS configuration instructions

## Local Development

To view the website locally:

1. Clone this repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

## File Structure

```
.
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # JavaScript for interactivity
├── .gitignore       # Git ignore file
└── README.md        # This file
```

## Customization

### Event Details

Edit `index.html` to update:
- Event date and time
- Location information
- Contact details
- Event description and features

### Styling

Modify `styles.css` to customize:
- Color scheme (CSS variables in `:root`)
- Fonts
- Layout and spacing
- Responsive breakpoints

### Functionality

Update `script.js` to add:
- Form handling
- Additional animations
- Analytics tracking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved © 2026 Cask & Pour

---

**Note**: This is a promotional event website. Please drink responsibly. Must be 21+ to attend.
