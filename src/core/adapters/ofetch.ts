import { ofetch } from 'ofetch'
import type { FetchClient } from '@/core/ports/FetchClient'

export default ofetch as FetchClient // ofetch is already on the type definition im gonna use for other request services if needed, so i just need to export it as FetchClient without implement any adaptation
