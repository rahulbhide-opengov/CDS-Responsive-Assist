/**
 * CDS Theme - React Native
 * Theme provider and context for CDS Design System
 */

import React, { createContext, useContext } from 'react';
import { tokens, Tokens } from './tokens';

// ============================================================================
// THEME CONTEXT
// ============================================================================

const ThemeContext = createContext<Tokens>(tokens);

/**
 * Theme Provider Component
 * Provides CDS theme to all child components
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@/theme';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: Partial<Tokens>;
}> = ({ children, theme: customTheme }) => {
  const mergedTheme = customTheme
    ? { ...tokens, ...customTheme }
    : tokens;

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access CDS theme
 *
 * @example
 * ```tsx
 * import { useTheme } from '@/theme';
 *
 * function MyComponent() {
 *   const theme = useTheme();
 *   return <View style={{ backgroundColor: theme.colors.primary[700] }} />;
 * }
 * ```
 */
export function useTheme(): Tokens {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}

// Re-export tokens for direct access
export * from './tokens';
export { tokens as defaultTheme };
