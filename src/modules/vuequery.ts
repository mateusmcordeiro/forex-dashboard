import type { VueModule } from '@/modulesLoader'
import { VueQueryPlugin } from '@tanstack/vue-query'

export const install: VueModule['install'] = ({ app }) => {
  app.use(VueQueryPlugin)
}
