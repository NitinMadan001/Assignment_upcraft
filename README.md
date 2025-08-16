# Tutor Dashboard

A responsive React dashboard designed for tutors to manage their students, lessons, and performance metrics.

## Features

### 📊 Dashboard Overview
- **Profile Card**: Tutor information with avatar, completion ring, and key metrics
- **KPI Cards**: Display important statistics (Active Students, CSAT Score, Assignment Completion Rate)
- **Upcoming Lessons**: Table view of scheduled lessons with student details
- **Performance Gauges**: Visual representation of course and student performance scores
- **Refer & Earn Card**: Call-to-action for referral program
- **Feedback Gauge**: Pending feedback notifications

### 📱 Responsive Design
- **Desktop**: Multi-column grid layout with sidebar navigation
- **Tablet**: Adapted layout with responsive grid adjustments
- **Mobile**: Single-column stack with bottom navigation bar

## Project Structure

```
src/
├── components/
│   ├── Cards/
│   │   ├── ProfileCard.jsx
│   │   ├── StatCard.jsx
│   │   └── ReferCard.jsx
│   ├── Tables/
│   │   └── UpcomingLessons.jsx
│   └── Charts/
│       ├── ScoreGauge.jsx
│       └── FeedbackGauge.jsx
├── data/
│   └── dashboard.js
├── pages/
│   └── Dashboard.jsx
└── styles/
    ├── base.css
    └── dashboard.css
```

## Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd tutor-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## CSS Architecture

### Base Styles (`base.css`)
- Global variables and color scheme
- Layout components (sidebar, header, main content)
- Responsive navigation system
- Mobile-first breakpoints

### Dashboard Styles (`dashboard.css`)
- Grid layouts for dashboard components
- Component-specific styling
- Responsive breakpoints and adjustments
- Mobile optimization

## Responsive Breakpoints

| Device | Max Width | Layout Changes |
|--------|-----------|----------------|
| Desktop | > 1024px | Multi-column grid, fixed sidebar |
| Tablet | ≤ 1024px | Responsive grid, natural height |
| Mobile | ≤ 768px | Single column, bottom navigation |
| Small Mobile | ≤ 480px | Compressed spacing and typography |

## Key Components

### Dashboard Layout
```jsx
<div className="dashboard-page">
  <div className="main-col">
    <div className="top-grid">
      {/* Profile Card + KPI Cards */}
    </div>
    <div className="bottom-grid">
      {/* Lessons Table + Performance Gauges */}
    </div>
  </div>
  <div className="right-column">
    {/* Refer Card + Feedback Gauge */}
  </div>
</div>
```

### Responsive Grid Behavior
- **Desktop**: `grid-template-columns: 1fr 300px`
- **Tablet/Mobile**: `grid-template-columns: 1fr` (stacked)

## Customization

### Colors
Update CSS variables in `base.css`:
```css
:root {
  --bg: #f6f7fb;
  --white: #ffffff;
  --purple-700: #5a2bd6;
  --purple-600: #6a3df0;
  --purple-500: #7b57f5;
  --text-900: #111827;
  --text-700: #374151;
  --text-500: #6b7280;
  --border: #e5e7eb;
}
```

### Component Data
Modify dashboard data in `data/dashboard.js`:
```javascript
export const tutor = {
  name: "John Doe",
  role: "Math Tutor",
  // ... other properties
};

export const kpis = [
  { id: 1, title: "Total Active Students", value: 30 },
  // ... other KPIs
];
```

## Mobile Navigation

The sidebar transforms into a bottom navigation bar on mobile devices:
- Icons with labels
- Touch-friendly spacing
- Horizontal layout
- Auto-hiding logo and footer

## Performance Optimizations

### Height Management
- Desktop: Fixed viewport height to prevent scrolling
- Tablet/Mobile: Natural content height with scrolling as needed
- Flex containers with `min-height: 0` for proper shrinking

### Responsive Images
- Avatar with completion ring animation
- Scalable icons and graphics
- Optimized for different screen densities

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Development Guidelines

### Adding New Components
1. Create component in appropriate folder (`components/`)
2. Add styling to `dashboard.css`
3. Ensure mobile responsiveness
4. Test across all breakpoints

### Responsive Design Rules
1. Mobile-first approach
2. Use CSS Grid for layout, Flexbox for alignment
3. Test on actual devices, not just browser dev tools
4. Maintain touch-friendly interactive elements (44px minimum)

### CSS Best Practices
1. Use CSS custom properties for theming
2. Follow BEM naming convention where applicable
3. Group related styles together
4. Comment complex layout logic

## Troubleshooting

### Common Issues

**Vertical Scrolling on Desktop**
- Check container heights and `overflow` properties
- Ensure `min-height: 0` on flex containers

**Layout Breaking on Mobile**
- Verify responsive breakpoints
- Check grid template columns
- Test with actual device viewport

**Performance Gauges Not Displaying**
- Ensure chart library is properly imported
- Check data format and props

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across all breakpoints
5. Submit a pull request

## License

MIT License - feel free to use this dashboard template for your projects.

---

**Built with React, CSS Grid, and Flexbox for modern, responsive web experiences.**

