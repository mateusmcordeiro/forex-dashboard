import type { VueModule } from '@/modulesLoader'

import { HotTable } from '@handsontable/vue3'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.css'

export const install: VueModule['install'] = ({ app }) => {
  app.component('HotTable', HotTable)
  registerAllModules()
}
