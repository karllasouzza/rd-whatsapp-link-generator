<!--
SYNC IMPACT REPORT
==================
Version change: N/A → 1.0.0 (Initial constitution)
Added principles:
  - I. Code Quality First
  - II. Semantic HTML
  - III. SEO Excellence
  - IV. User Experience Consistency
  - V. Performance Requirements
Added sections:
  - Quality Standards
  - Development Workflow
Modified templates:
  - .specify/templates/plan-template.md: ✅ Compatible (Constitution Check section present)
  - .specify/templates/spec-template.md: ✅ Compatible (requirements align with principles)
  - .specify/templates/tasks-template.md: ✅ Compatible (supports quality gates)
Follow-up TODOs: None
-->

# RD WhatsApp Link Generator Constitution

## Core Principles

### I. Code Quality First

All code MUST adhere to strict quality standards ensuring maintainability, and reliability.

**Non-Negotiable Rules:**
- TypeScript strict mode MUST be enabled; no `any` types without explicit justification in comments
- All components and functions MUST have explicit return type annotations
- ESLint rules MUST pass with zero warnings or errors before commit
- Prettier formatting MUST be applied to all TypeScript/JavaScript files
- Code MUST be self-documenting with clear variable/function names; comments explain WHY, not WHAT
- Complex logic (>10 lines) MUST include explanatory comments
- No dead code, unused imports, or commented-out blocks in production code
- Functions SHOULD be pure where possible; side effects MUST be isolated and documented

**Rationale:** High code quality reduces bugs, accelerates onboarding, and ensures long-term maintainability of the WhatsApp link generator.

### II. Semantic HTML

All markup MUST use semantically correct HTML elements to ensure accessibility, SEO, and maintainability.

**Non-Negotiable Rules:**
- Use heading hierarchy correctly (`h1` → `h2` → `h3`); never skip levels
- Interactive elements MUST use `<button>` or `<a>` with proper `href`; NEVER use `<div>` with onClick
- Forms MUST use appropriate input types (`email`, `tel`, `url`) with associated `<label>` elements
- Lists MUST use `<ul>`, `<ol>`, or `<dl>` as appropriate; NEVER style divs to look like lists
- Landmark regions MUST be used: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`
- Images MUST have descriptive `alt` attributes; decorative images use `alt=""`
- Tables MUST use `<thead>`, `<tbody>`, `<th>` with `scope` attributes when present
- ARIA attributes MUST only supplement semantic HTML, never replace it

**Rationale:** Semantic HTML ensures screen readers, search engines, and browsers correctly interpret content structure, improving accessibility and SEO.

### III. SEO Excellence

The application MUST be optimized for search engine visibility and social sharing.

**Non-Negotiable Rules:**
- Every page MUST have unique `<title>` (50-60 characters) and `<meta description>` (150-160 characters)
- Open Graph tags MUST be present: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter Card tags MUST be present: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Canonical URLs MUST be specified to prevent duplicate content issues
- Structured data (JSON-LD) MUST be added where applicable (WebApplication, SoftwareApplication schemas)
- URLs MUST be clean, descriptive, and lowercase; no query parameters for routing
- Internal links MUST use descriptive anchor text; NEVER "click here" or "read more"
- Performance metrics directly impact SEO; Core Web Vitals MUST meet "Good" thresholds (see Principle V)

**Rationale:** WhatsApp Link Generator relies on organic traffic; strong SEO ensures discoverability and higher conversion rates.

### IV. User Experience Consistency

User interactions MUST be predictable, accessible, and consistent across the entire application.

**Non-Negotiable Rules:**
- Design tokens (colors, spacing, typography) MUST use design system variables; NEVER hardcode values
- Interactive elements MUST have visible focus indicators (minimum 2px outline)
- Loading states MUST be shown for all async operations; NEVER leave users wondering if action succeeded
- Error messages MUST be user-friendly, actionable, and displayed inline near the relevant field
- All forms MUST support keyboard navigation with logical tab order
- Touch targets MUST be minimum 44x44px for mobile accessibility
- Animations MUST respect `prefers-reduced-motion` media query
- Color MUST NOT be the sole indicator of meaning; use icons/text as well
- Consistent terminology MUST be used across UI (e.g., don't mix "Generate Link" and "Create URL")

**Rationale:** Consistent UX reduces cognitive load, increases user confidence, and improves task completion rates.

### V. Performance Requirements

The application MUST deliver fast, responsive experiences across all devices and network conditions.

**Non-Negotiable Rules:**
- Core Web Vitals MUST meet "Good" thresholds:
  - Largest Contentful Paint (LCP): < 2.5 seconds
  - First Input Delay (FID): < 100 milliseconds
  - Cumulative Layout Shift (CLS): < 0.1
- Initial JavaScript bundle MUST NOT exceed 200KB (gzipped)
- Images MUST be optimized: WebP/AVIF format, responsive sizes via `next/image`
- Fonts MUST be self-hosted or use `next/font`; NEVER block rendering
- Code splitting MUST be implemented for routes; NEVER load unused JavaScript
- Third-party scripts MUST be lazy-loaded or deferred; NEVER block initial render
- API responses MUST be cached where appropriate; stale-while-revalidate strategy preferred
- Production build MUST achieve Lighthouse Performance score ≥ 90

**Rationale:** Performance directly impacts user retention, SEO rankings, and conversion rates for link generation tool.

## Quality Standards

### Testing Requirements

- Unit tests MUST cover all utility functions and business logic
- Component tests MUST verify rendering and user interactions for complex components
- Integration tests MUST verify form submissions and link generation flow
- Test coverage MUST NOT drop below 80% for new code
- All tests MUST pass before merge; CI gate enforced

### Code Review Standards

- All pull requests REQUIRE at least one approving review
- PR descriptions MUST include: purpose, testing performed, screenshots (if UI changes)
- Reviewers MUST verify constitution compliance before approval
- Breaking changes MUST include migration guide and version bump justification

### Accessibility Standards

- WCAG 2.1 Level AA compliance REQUIRED for all user-facing features
- Screen reader testing REQUIRED for all new interactive features
- Color contrast ratios MUST meet minimum 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation MUST be fully supported; no mouse-only interactions

## Development Workflow

### Pre-Commit Checks

Before committing code, developers MUST ensure:
1. `yarn typecheck` passes with zero errors
2. `yarn lint` passes with zero warnings
3. `yarn format` has been applied
4. All tests pass (`yarn test` if test suite exists)
5. No console.log or debugger statements remain
6. Component changes tested across viewports (mobile, tablet, desktop)

### Branch Strategy

- `main` branch MUST always be deployable
- Feature branches MUST follow naming: `feature/###-description` or `fix/###-description`
- Pull requests MUST be squashed and merged to maintain clean history
- Semantic versioning MUST be used for releases (MAJOR.MINOR.PATCH)

### Documentation Requirements

- README.md MUST be updated for any user-facing changes
- Component props MUST have JSDoc comments describing purpose and types
- Complex algorithms MUST include implementation notes explaining approach
- Breaking changes MUST be documented in changelog or release notes

## Governance

This constitution supersedes all other development practices and guidelines for the RD WhatsApp Link Generator project.

**Amendment Process:**
- Proposed changes MUST be submitted as pull requests modifying this file
- Amendments REQUIRE justification in PR description (problem solved, alternatives considered)
- Major principle changes (>1 principle modified) REQUIRE team consensus
- Version bumps follow semantic versioning:
  - MAJOR: Principle removal or fundamental redefinition
  - MINOR: New principle added or existing principle expanded
  - PATCH: Clarifications, typo fixes, non-semantic improvements

**Compliance Review:**
- All PRs MUST be reviewed against constitution principles before approval
- Automated checks (linting, type checking, performance budgets) enforce technical standards
- Quarterly constitution review recommended to ensure relevance and effectiveness
- Violations MUST be documented in PR with justification for exception

**Effective Date:** 2026-04-23

**Version**: 1.0.0 | **Ratified**: 2026-04-23 | **Last Amended**: 2026-04-23
