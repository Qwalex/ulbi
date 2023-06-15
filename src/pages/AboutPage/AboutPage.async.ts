import { lazy } from 'react'

const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore: Unreachable code errors
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))

export default AboutPageAsync