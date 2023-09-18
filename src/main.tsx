
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

//this manifest is used temporarily for development purposes
const manifestUrl = 'https://himmelhargott.github.io/my-twa/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)
