import { createApp } from 'vue'
import Dashboard from './components/Dashboard'

export const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
};
