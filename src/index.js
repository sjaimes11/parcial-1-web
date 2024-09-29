import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import App from './App'; // Assuming you have App.js as the main component
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

// Detect browser language
const locale = navigator.language.startsWith('es') ? 'es' : 'en';
const messages = locale === 'es' ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>, 
  document.getElementById("root")
);
