export const Typography = {
  title3: (fontFamily = 'Poppins_500Medium') => ({
    fontSize: '1.5rem',
    fontFamily,
  }),
  regular: (fontFamily = 'Poppins_300Light') => ({
    fontSize: '1.0625rem',
    letterSpacing: 0.15,
    fontFamily,
  }),
  small: (fontFamily = 'Poppins_300Light') => ({
    fontSize: '0.875rem',
    letterSpacing: 0.25,
    fontFamily,
  }),
  extraSmall: (fontFamily = 'Poppins_300Light') => ({
    fontSize: '0.75rem',
    letterSpacing: 0.25,
    fontFamily,
  }),
};
