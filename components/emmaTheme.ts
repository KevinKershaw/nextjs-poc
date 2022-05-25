import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles'

const MSRB_BLUE = '#005397'

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#00263a',
  },
}

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#fff',
    contrastText: '#00263a',
  },
}

const themeOptions: ThemeOptions = {
  typography: {
    //fontSize: 16, fontFace: Roboto
    h1: { fontSize: '3.5rem', fontWeight: 600 }, // hero section title
    h2: { fontSize: '2.8125rem', fontWeight: 600 }, // other section title
    h3: { fontSize: '1.375rem', fontWeight: 600 }, // not sure what the definition is, sub-section?
    //h4: { fontSize: '1.Xrem' }, // not in use
    //h5: { fontSize: '1.Xrem' }, // not in use
    h6: { fontSize: '1.0rem', fontWeight: 500 }, // emphasized text against body1, 500 might not be in the packaged font
    //subtitle1: { fontWeight: 600, }, // not in use
    //subtitle2: { fontWeight: 600, }, // not in use
    body1: { fontSize: '1.0rem', fontWeight: 400 }, // normal body text
    body2: { fontSize: '0.875rem', fontWeight: 400 }, // less important text
    button: { fontWeight: 'bold', textTransform: 'none' },
  },

  components: {
    MuiContainer: {
      styleOverrides: { maxWidthLg: '100%' },
    },
  },
  //components: {
  // maxWidth: 1200,

  // MuiContainer-maxWidthLg css-1oqqzyl-MuiContainer-root
  // MuiButtonBase: {
  //   defaultProps: {
  //     disableRipple: false
  //   },
  // },
  // MuiButton: {
  //   variants: [
  //     {
  //       props: { variant: 'outlined' },
  //       style: {
  //         textTransform: 'none',
  //         //border: `2px dashed #2196F3`,
  //       },
  //     },
  //     {
  //       props: { variant: 'outlined', color: 'secondary' },
  //       style: {
  //         //border: `4px dashed red`,
  //       },
  //     },
  //   ],
  // },
  //},
}

const theme = createTheme({ ...themeOptions, palette: lightPalette })

export const darkTheme = createTheme({ ...themeOptions, palette: darkPalette })

export default theme
