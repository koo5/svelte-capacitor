import { readable, derived, writable } from 'svelte/store';
import * as N3 from 'n3';
//import _ from 'lodash';

export function try_parse_rdf_node(x)
{
	const r = rdf_node_parsing_result(x);
	if ('errors' in r)
		throw r;
	else
	{
		return r.value;
	}
}




function my_quad_to_n3_quad(i)
{


}

function n3_quad_to_my_quad(i)
{


}




import * as N3 from 'n3';

//const N3 = require('n3');


export async function fetch_dataset_from_uri()
{
	const url = "dataset1.n3";
	let response = await fetch(url);
	if (!response.ok) throw Error(response.statusText);
	let text = await response.text();
	return await load_dataset_from_text(text);
}

async function load_dataset_from_text(n3_text)
{
	const kb = [];
	const parser = new N3.Parser({format: 'N3'});
	await parser.parse(n3_text,
		(error, quad, prefixes) =>
		{
			if (error)
				console.log(error);
			if (quad)
				kb.push(quad);
		});
	/*console.log("n3 text loaded:");
	console.log(kb);*/
	return kb;
}

export function save_myrdf_quad_query_as_file_download($query)
{
	const writer = new N3.Writer({ prefixes: prefixes_as_dict() });
	const q = $query;
	const cb = (x) => {if (x)console.log(x)}
	for (var i = 0; i < q.length; i++)
		writer.addQuad(my_quad_to_n3_quad(q[i]),cb);
	writer.end((error, result) => {
		if (error)
			throw error;
		let blob = new Blob([result], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "hello world.trig");
	})
}

export const quadstore = (__quad_list) =>
{
	let _quads = writable(__quad_list);
	let query = (_query) => derived(_quads, __quad_list => {
		return filter_quads_by_query(_query,__quad_list);
	});
	return {_quads,query};
}
function filter_quads_by_query(query,__quad_list)
{
	/*console.log(query);
	console.log(__quad_list);*/

	let result = [];

	var i = 0;
	for (i = 0; i < __quad_list.length; i++)
	{
		const q = __quad_list[i];
		if (
			match(query.s,q.s) &&
			match(query.p,q.p) &&
			match(query.o,q.o) &&
			match(query.g,q.g)
		)
			result.push({...q, idx:i});
	}

	//console.log(result);
	return result;
}

function match(query, node)
{
	if (query == undefined || query == "?")
		return true;
	return (query == node);
}



/*
These functions return svelte stores, that is, objects that you can subscribe() to and be notified of changes. See https://svelte.dev/tutorial/readable-stores

These svelte stores will, in turn, be notified when the underlying quadstore changes. In future, we want a whole datalog or prolog engine underneath, instead of just a dumb quadstore. And, ideally, one whose queries will be persistent and reactive wrt it's underlying kb changes, propagating changes up the proof tree with minimal overhead. At that point, this architecture will make more sense. Right now, when the underlying quadstore changes, all the queries just redo all the work.
*/


/*
What follows is the first layer of convenience, wrapping the purely non-deterministic-ish query() interface.

export function query_first
	// this is querying one or more solutions, then picking the first one
	query("+doc(

export function query_one()
{
	//query("!doc(
}
*/


/*
rdf node format/representation:
the quadstore holds a list of prefixes. Uris are always normalized, if possible (by some algo that picks the last form that eats of the most characters from the url that is being shortened, or whatever.
full uris are signified by a string like this: "<http://blablabla>".
"?" is free for use for signifying a wildcard.
rdf literals are represented by objects .. maybe let's use N3.js classes?

 */
