import { IKabiApiRouter } from './router'
import { container } from '../common/ioc'
import { TYPES } from '../common/ioc/types'

class App {
  private static instance: App

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }

    return App.instance
  }

  private readonly iKabiApiRouter: IKabiApiRouter

  constructor() {
    this.iKabiApiRouter = container.get<IKabiApiRouter>(TYPES.IKabiApiRouter)
  }

  public register(): void {
    this.iKabiApiRouter.registerRoutes()
  }
}

export default App