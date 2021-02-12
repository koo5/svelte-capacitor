<h1>svelte-spa-router sample</h1>
<h2>Basic routing</h2>

<ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/test1">Test1</a></li>
    <li><a href="#/hello/svelte">Say hi!</a></li>
    <li><a href="#/wild/card">Wildcard route</a></li>
    <li><a href="#/does/not/exist">Not found</a></li>
</ul>

<Router {routes} />

<script>
    import Router from 'svelte-spa-router';
    import routes from './routes'
</script>
