import App from './App'

const registerKabiAPI = (): void => {
  const app: App = App.getInstance()
  app.register()
}

export { registerKabiAPI }