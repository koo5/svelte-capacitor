<script>
	import QuadsListItem from './QuadsListItem.svelte';
	import {quadstore, save_myrdf_quad_query_as_file_download} from './quadstore.js';

</script>

<div>
	{#if $quads.length != 0}
		store contains {$quads.length} quads.
	{:else}
		store is empty.
	{/if}

	<button on:click={()=>save_myrdf_quad_query_as_file_download($quadstore)}>save as TriG</button>

	<ul>
		add:
		{#each $quads as item}
			<QuadsListItem quad={item}/>
		{/each}
	</ul>
</div>

<style>

	ul {
	margin: 0px;
	padding: 0px;

}

</style>
