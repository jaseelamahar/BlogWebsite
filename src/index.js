import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import BlogProvider  from './BlogContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogProvider>
    <App />
    </BlogProvider>
  </React.StrictMode>
);

