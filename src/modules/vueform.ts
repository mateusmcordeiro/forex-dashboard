import type { VueModule } from '@/modulesLoader'
import Vueform from '@vueform/vueform'
import vueformConfig from '@/../vueform.config'

export const install: VueModule['install'] = ({ app }) => {
  app.use(Vueform, vueformConfig)
}
