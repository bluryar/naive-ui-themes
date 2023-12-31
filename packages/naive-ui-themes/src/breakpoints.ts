/**
 * Breakpoints from Naive UI
 *
 * @see https://www.naiveui.com/zh-CN/os-theme/components/config-provider#API
 */
export const breakpointsNaiveUI = {
  xs: 0,
  s: 640,
  m: 1024,
  l: 1280,
  xl: 1536,
  xxl: 1920,
} as const;

// below from [vueuse](https://github.com/vueuse/vueuse/blob/main/packages/core/useBreakpoints/breakpoints.ts)

/**
 * Breakpoints from Tailwind V2
 *
 * @see https://tailwindcss.com/docs/breakpoints
 */
export const breakpointsTailwind = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Breakpoints from Bootstrap V5
 *
 * @see https://getbootstrap.com/docs/5.0/layout/breakpoints
 */
export const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

/**
 * Breakpoints from Vuetify V2
 *
 * @see https://vuetifyjs.com/en/features/breakpoints
 */
export const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904,
} as const;

/**
 * Breakpoints from Ant Design
 *
 * @see https://ant.design/components/layout/#breakpoint-width
 */
export const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const;

/**
 * Breakpoints from Quasar V2
 *
 * @see https://quasar.dev/style/breakpoints
 */
export const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920,
} as const;

/**
 * Sematic Breakpoints
 */
export const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560,
} as const;

/**
 * Breakpoints from Master CSS
 *
 * @see https://docs.master.co/css/breakpoints
 */
export const breakpointsMasterCss = {
  '3xs': 360,
  '2xs': 480,
  xs: 600,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1440,
  '2xl': 1600,
  '3xl': 1920,
  '4xl': 2560,
} as const;
