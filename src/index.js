import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { navigator } from './components/navigator/navigator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {navigator}
  </React.StrictMode>
);


