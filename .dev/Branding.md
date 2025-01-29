# HedgeAI Brand Guidelines

## Table of Contents
1. [Typography](#typography)
2. [Color Palette](#color-palette)
3. [Usage Guidelines](#usage-guidelines)
4. [CSS Implementation](#css-implementation)

## Typography

### Primary Font: Clash Grotesk
- Used for headlines, titles, and important callouts
- Weights:
  - Regular (400)
  - Medium (500)
  - Semibold (600)
  - Bold (700)

### Secondary Font: DM Sans
- Used for subheadings and important body text
- Weights:
  - Regular (400)
  - Medium (500)
  - Bold (700)

### Tertiary Font: Inter
- Used for body text and UI elements
- Weights:
  - Regular (400)
  - Medium (500)
  - Semibold (600)

### Font Hierarchy
```css
/* Headings */
h1 {
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.2;
}

h2 {
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.3;
}

h3 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.4;
}

/* Body Text */
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
}
```

## Color Palette

### Primary Colors
- **Primary Blue**: `#0038FF`
  - Main brand color
  - Used for primary actions and key elements

### Secondary Colors
- **Light Blue**: `#3366FF` (20% lighter than primary)
- **Dark Blue**: `#0026B3` (30% darker than primary)
- **Navy**: `#001A75` (50% darker than primary)

### Supporting Colors
- **White**: `#FFFFFF`
- **Light Gray**: `#F5F7FF` (Blue-tinted)
- **Mid Gray**: `#E5E9FF` (Blue-tinted)
- **Dark Gray**: `#1A1A1A`

### Functional Colors
- **Success**: `#00C853`
- **Warning**: `#FFB300`
- **Error**: `#FF3D00`
- **Info**: `#0038FF` (Primary Blue)

### Gradients
```css
/* Primary Gradient */
background: linear-gradient(135deg, #0038FF 0%, #3366FF 100%);

/* Dark Gradient */
background: linear-gradient(135deg, #0026B3 0%, #001A75 100%);
```

## Usage Guidelines

### Typography Usage
1. **Headlines**
   - Use Clash Grotesk Bold
   - Maintain proper hierarchy
   - Keep headlines concise

2. **Body Text**
   - Use Inter for readability
   - Maintain 16px minimum for body text
   - Use proper line height (1.5)

3. **UI Elements**
   - Use DM Sans for buttons and navigation
   - Maintain consistent weight usage
   - Ensure proper contrast

### Color Usage

1. **Primary Blue (#0038FF)**
   - Call-to-action buttons
   - Important links
   - Key UI elements
   - Brand accents

2. **Secondary Colors**
   - Support elements
   - Backgrounds
   - Hover states
   - Inactive states

3. **Functional Colors**
   - Use consistently for status indicators
   - Maintain accessibility contrast
   - Don't overuse

## CSS Implementation

### Font Import
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
/* Note: Clash Grotesk needs to be imported via your preferred method */

:root {
  /* Colors */
  --primary: #0038FF;
  --primary-light: #3366FF;
  --primary-dark: #0026B3;
  --navy: #001A75;
  
  /* Grays */
  --gray-100: #F5F7FF;
  --gray-200: #E5E9FF;
  --gray-900: #1A1A1A;
  
  /* Functional */
  --success: #00C853;
  --warning: #FFB300;
  --error: #FF3D00;
  
  /* Typography */
  --font-primary: 'Clash Grotesk', sans-serif;
  --font-secondary: 'DM Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Tailwind Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0038FF',
          light: '#3366FF',
          dark: '#0026B3',
          navy: '#001A75',
        },
        gray: {
          100: '#F5F7FF',
          200: '#E5E9FF',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        clash: ['Clash Grotesk', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

### Component Examples

```jsx
// Button Component
const Button = ({ children, variant = 'primary' }) => (
  <button
    className={`
      font-dmsans font-medium px-6 py-3 rounded-lg
      ${variant === 'primary' ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}
    `}
  >
    {children}
  </button>
);

// Heading Component
const Heading = ({ children, level = 1 }) => {
  const Tag = `h${level}`;
  return (
    <Tag
      className={`
        font-clash
        ${level === 1 ? 'text-4xl font-bold' : ''}
        ${level === 2 ? 'text-3xl font-semibold' : ''}
        ${level === 3 ? 'text-2xl font-medium' : ''}
      `}
    >
      {children}
    </Tag>
  );
};
```

### Responsive Design
```css
/* Mobile First Approach */
.heading-1 {
  font-family: var(--font-primary);
  font-size: 2rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
}
```

### Accessibility Guidelines
1. Maintain minimum contrast ratios:
   - 4.5:1 for normal text
   - 3:1 for large text
   - 3:1 for UI components

2. Use semantic HTML elements
3. Provide focus states
4. Ensure proper text spacing