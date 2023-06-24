import GXProvider from '@dilane3/gx'
import ReactDOM from 'react-dom/client'
import App from './App'
import SnackBarProvider from './globalContext/SnackbarProvider'
import { store } from './gx/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GXProvider store={store}>
    <SnackBarProvider>
      <App />
    </SnackBarProvider>
  </GXProvider>,
)
