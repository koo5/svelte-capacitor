import {derived} from 'svelte/store';

export const quadstore = () =>
{
	/* let's not support multiple instances yet */
	var db = new PouchDB('kittens');
	console.log(await db.info());

	db.changes({
		since: 'now',
		live: true
	}).on('change', () =>
	{
		db.allDocs({include_docs: true, descending: true}, function (err, doc)
		{
			if (err) alert(err);
			fire
			!
		}


	});


	let query = (_query) => derived(_quads, $_quads =>
	{
		return filter_quads_by_query(_query, $_quads);
	});


	function addQuad(q)
	{
		db.put(q, function callback(err)
		{
			if (err) alert(err);
		});
	}


	return {query};
}


/*
db.allDocs([options], [callback])

Fetch multiple documents, indexed and sorted by the _id. Deleted documents are only included if options.keys is specified.
Options

All options default to false unless otherwise specified.

    options.include_docs
*/


function filter_quads_by_query(query, __quad_list)
{
	let result = [];
	var i = 0;
	__quad_list.forEach(q)
=>
	{
		i++;
		if (
			match(query.s, q.s) &&
			match(query.p, q.p) &&
			match(query.o, q.o) &&
			match(query.g, q.g)
		)
			result.push({...q, idx: i});
	}
	return result;
}

function match(query, node)
{
	if (query == undefined || query == "?")
		return true;
	return (query == node);
}
