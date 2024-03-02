import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux.ts'
// ! Step 2 Wrap app in redux Provider and give store location
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>,
)
