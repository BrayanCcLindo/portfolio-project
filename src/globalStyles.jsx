import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
*    
*::before,
*::after {
  box-sizing: border-box;
}
/*
    2. Remove default margin
  */
* {
  margin: 0;
}
/*
    3. Allow percentage-based heights in the application
  */
html,
body,
.page {
  height: 100%;
}
/*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
    6. Improve media defaults
  */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
    7. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
  font: inherit;
}
/*
    8. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
.sr-only {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
ul,
li {
  margin: 0;
  padding: 0;
}
  }
`;

export default GlobalStyle;
