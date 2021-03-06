import React from 'react';
import ReactDOM from 'react-dom';

import Root from './router';

import 'react-vimeo/lib/Vimeo.min.css';
import './style/fonts.styl';
import './style/base.styl';

// Enable react dev-tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
window.React = React;


/**
 * #########################
 * INIT
 * #########################
 */

ReactDOM.render(<Root />, app);
