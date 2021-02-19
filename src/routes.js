import Home from './Home.svelte'
import Test1 from './Test1.svelte';
import Cytoscape from './Cytoscape.svelte'
//import TextEditor from './TextEditor.svelte';
import Prefixes from './Prefixes.svelte';
import Quads from './Quads.svelte';
import Log from './Log.svelte';



import Name from './Name.svelte'
import Wild from './Wild.svelte'
import NotFound from './NotFound.svelte'

export default {
    '/': Home,
    '/test1': Test1,
    '/cytoscape': Cytoscape,

    // Using named parameters, with last being optional
    '/hello/:first/:last?': Name,
    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/wild': Wild,
    '/wild/*': Wild,
    // Catch-all, must be last
    '*': NotFound,
}
