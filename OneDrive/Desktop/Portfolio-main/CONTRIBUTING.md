# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio project! This document provides guidelines for contributing to the codebase.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test your changes: `npm run dev`
7. Commit your changes: `git commit -m "Add your feature"`
8. Push to your fork: `git push origin feature/your-feature-name`
9. Create a Pull Request

## Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow existing code formatting
- Use meaningful variable and function names
- Add type annotations for better code clarity

### React Components
- Use functional components with hooks
- Keep components focused on single responsibilities
- Use proper prop typing with TypeScript interfaces
- Follow naming conventions: PascalCase for components

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use CSS custom properties for theme colors
- Maintain consistent spacing and typography

### File Organization
```
client/src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/           # Utility functions and configurations
├── pages/         # Page-level components
└── types/         # TypeScript type definitions
```

## Development Workflow

### Local Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run type-check # TypeScript type checking
```

### Testing Guidelines
- Test new components and features
- Ensure responsive design works across devices
- Verify animations perform smoothly
- Check accessibility compliance

## Pull Request Guidelines

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] All new code includes proper TypeScript types
- [ ] Responsive design has been tested
- [ ] No console errors or warnings
- [ ] Performance impact has been considered

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Performance improvement
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested theme switching
- [ ] Tested animations

## Screenshots
Include screenshots for UI changes
```

## Reporting Issues

When reporting issues, please include:
- Browser and version
- Device type (desktop/mobile)
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Feature Requests

For new features:
- Describe the use case
- Explain the expected behavior
- Consider performance impact
- Suggest implementation approach

## Code Review Process

1. All submissions require review
2. Reviewers will check for:
   - Code quality and style
   - Performance implications
   - Accessibility compliance
   - Mobile responsiveness
3. Address feedback promptly
4. Maintain a professional tone

## Performance Considerations

- Keep animations smooth (60fps target)
- Optimize images and assets
- Minimize bundle size impact
- Consider mobile performance
- Test on slower devices

## Accessibility Guidelines

- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Test with screen readers

## Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Contact the maintainer
- Check existing documentation

Thank you for helping improve this project!