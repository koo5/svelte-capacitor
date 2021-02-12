<ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/test1">Test1</a></li>
    <li><a href="#/hello/svelte">Say hi!</a></li>
    <li><a href="#/wild/card">Wildcard route</a></li>
</ul>
<br><hr>
<Router {routes} />

<script>
    import Router from 'svelte-spa-router';
    import routes from './routes'
</script>
<style>
	ul {
		margin: 0;
		padding: 0;
        list-style-type: none;
	}

	li {
		float: left;
	}

li a {
  text-align: center;
  padding: 1em;
}

li a:hover {
    text-decoration: underline overline;
}

</style>

