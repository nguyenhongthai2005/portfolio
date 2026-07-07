/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "outline-variant": "#c1c6d7",
              "secondary": "#5d5e60",
              "surface-dim": "#d8d9e5",
              "surface-tint": "#005bc1",
              "on-error-container": "#93000a",
              "on-secondary-fixed-variant": "#454749",
              "surface": "#f9f9ff",
              "surface-container": "#ecedf9",
              "on-secondary": "#ffffff",
              "surface-container-high": "#e6e8f3",
              "on-primary-fixed-variant": "#004493",
              "primary-fixed-dim": "#adc6ff",
              "on-tertiary-fixed-variant": "#7c2e00",
              "surface-container-lowest": "#ffffff",
              "on-secondary-fixed": "#1a1c1d",
              "on-surface": "#181c23",
              "on-background": "#181c23",
              "error": "#ba1a1a",
              "background": "#f9f9ff",
              "error-container": "#ffdad6",
              "surface-container-highest": "#e0e2ed",
              "on-surface-variant": "#414755",
              "on-tertiary-container": "#fffbff",
              "secondary-container": "#dfdfe1",
              "on-primary-container": "#fefcff",
              "secondary-fixed-dim": "#c6c6c8",
              "surface-variant": "#e0e2ed",
              "tertiary-container": "#c64f00",
              "outline": "#717786",
              "surface-bright": "#f9f9ff",
              "primary-fixed": "#d8e2ff",
              "inverse-surface": "#2d3039",
              "inverse-on-surface": "#eef0fc",
              "on-error": "#ffffff",
              "tertiary-fixed-dim": "#ffb595",
              "primary": "#0058bc",
              "on-primary-fixed": "#001a41",
              "secondary-fixed": "#e2e2e4",
              "on-secondary-container": "#616365",
              "inverse-primary": "#adc6ff",
              "on-tertiary-fixed": "#351000",
              "surface-container-low": "#f1f3fe",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#ffdbcc",
              "primary-container": "#0070eb",
              "tertiary": "#9e3d00",
              "on-tertiary": "#ffffff"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "spacing": {
              "lg": "24px",
              "unit": "4px",
              "xs": "4px",
              "margin-mobile": "16px",
              "gutter": "24px",
              "max-width": "1280px",
              "xl": "40px",
              "md": "16px",
              "sm": "8px",
              "margin-desktop": "64px"
      },
      "fontFamily": {
              "label-sm": ["Geist"],
              "body-sm": ["Geist"],
              "display": ["Geist"],
              "headline-lg-mobile": ["Geist"],
              "headline-lg": ["Geist"],
              "body-lg": ["Geist"],
              "body-md": ["Geist"],
              "label-md": ["Geist"],
              "headline-md": ["Geist"]
      },
      "fontSize": {
              "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500"}],
              "body-sm": ["14px", {"lineHeight": "1.4", "fontWeight": "400"}],
              "display": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600"}],
              "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
              "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.015em", "fontWeight": "600"}],
              "body-lg": ["18px", {"lineHeight": "1.5", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
              "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.01em", "fontWeight": "500"}],
              "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "500"}]
      }
    },
  },
  plugins: [
    formsPlugin,
    containerQueriesPlugin
  ],
}
