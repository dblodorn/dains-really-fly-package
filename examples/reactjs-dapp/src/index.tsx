import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App';
import { FlyComponent } from '@derpyvision/fly-package'

const domContainer = document.getElementById('main');
const root = ReactDOM.createRoot(domContainer);

root.render(
  <App>
    <section>
      <h1>Let's roll</h1>
      <FlyComponent flyText="Hey I'm a prop"/>
    </section>
  </App>
);