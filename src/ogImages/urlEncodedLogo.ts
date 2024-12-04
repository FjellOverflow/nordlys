import fs from 'fs'

const LOGO_FILE = './src/assets/logo.svg'

const svgString = fs.readFileSync(LOGO_FILE, 'utf-8')
const encodedSVG = 'data:image/svg+xml,' + encodeURIComponent(svgString)

export default encodedSVG
