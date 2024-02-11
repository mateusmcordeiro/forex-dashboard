import type { App } from 'vue'

export type VueModule = {
  install: (options: { app: App<Element> }) => void
}

export default (app: App<Element>) => {
  const modules: Record<string, VueModule> = import.meta.glob(
    ['./modules/*.{js,ts}', './modules/*/index.{js,ts}'],
    {
      eager: true
    }
  )
  Object.keys(modules).forEach((moduleName) => modules[moduleName].install?.({ app }))
}
