# Stepper Component Documentation

## Overview
The Stepper component displays progress through a sequence of logical and numbered steps. It guides users through multi-step processes like forms, workflows, or onboarding, providing clear visual feedback about their current position and progress.

**Component Type:** Navigation / Progress Component
**Based on:** Material-UI (MUI) v6.1.0 Stepper
**Documentation:** [MUI Stepper API](https://mui.com/api/stepper)

---

## Design Tokens

### Step Icon Tokens
\`\`\`typescript
'--component/stepper/icon-size': '24px',
'--component/stepper/icon-bg-active': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/stepper/icon-bg-inactive': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.38))',
'--component/stepper/icon-bg-completed': 'var(--color-palatte/primary/main, #4b3fff)',
\`\`\`

### Label Tokens
\`\`\`typescript
'--component/stepper/label-color-active': 'var(--color-palatte/text/primary)',
'--component/stepper/label-color-inactive': 'var(--color-palatte/text/secondary)',
\`\`\`

### Connector Tokens
\`\`\`typescript
'--component/stepper/connector-color-inactive': 'var(--color-palatte/action/disabled)',
'--component/stepper/connector-color-active': 'var(--color-palatte/primary/main)',
\`\`\`

---

## Component Anatomy

### Stepper Container
- **Display:** Flex (horizontal) or Block (vertical)
- **Orientation:** Horizontal or Vertical
- **Steps:** Array of Step components

### Step States
- **Active:** Current step
- **Completed:** Finished step
- **Inactive:** Future step
- **Error:** Step with validation error

---

## Usage Guidelines

### When to Use
- Multi-step forms
- Checkout processes
- User onboarding
- Wizard interfaces
- Sequential tasks

### When NOT to Use
- Single-step processes
- Independent pages (use Tabs)
- Too many steps (> 10)

---

## CDS Token Integration

Uses CDS colors, spacing, and typography tokens.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
