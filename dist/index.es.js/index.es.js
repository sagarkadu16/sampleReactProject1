import * as React$1 from 'react';
import styled from 'styled-components';

var m = require('react-dom');
if (process.env.NODE_ENV === 'production') {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

var client = /*#__PURE__*/Object.freeze({
  __proto__: null
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}";
styleInject(css_248z$1);

var css_248z = ".App{text-align:center}.App-logo{height:40vmin;pointer-events:none}@media (prefers-reduced-motion:no-preference){.App-logo{animation:App-logo-spin 20s linear infinite}}.App-header{align-items:center;background-color:#282c34;color:#fff;display:flex;flex-direction:column;font-size:calc(10px + 2vmin);justify-content:center;min-height:100vh}.App-link{color:#61dafb}@keyframes App-logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
styleInject(css_248z);

const Button = styled.button`
    padding: 12px;
    border-radius: 25px;
    border: 1px solid grey;
`;

const CustomButton = () => {
  return /*#__PURE__*/React.createElement(Button, null, "Click Me!");
};

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CustomButton, null));
}

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('./web-vitals-d7de8b6a.js').then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const {
  createRoot
} = client;
const root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React$1.createElement(React$1.StrictMode, null, /*#__PURE__*/React$1.createElement(App, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
