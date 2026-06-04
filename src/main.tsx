import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { filterStore } from './reduxStateLogic/filterStore.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={filterStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
