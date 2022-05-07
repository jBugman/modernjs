import { createRoot } from 'react-dom/client'
import Server from 'react-dom/server'

import { Greet } from './component'

console.log(Server.renderToString(<Greet />))

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Greet />)
