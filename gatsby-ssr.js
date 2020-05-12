/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { wrapRootElement as wrap } from './root-wrapper';

//CSS Reset
import "./src/style/reset.css"
//Fonts and global stuff
import "./src/style/base.css"

export const wrapRootElement = wrap;