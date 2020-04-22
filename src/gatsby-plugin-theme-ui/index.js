// shadow src/gatsby-plugin-theme-ui/index.js
import base from "gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui"

export default {
  ...base,
  // example theme with responsive typography styles
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: [2, 3],
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    a: {
      textDecoration: "none",
      color: "red",
    },
  },
}
