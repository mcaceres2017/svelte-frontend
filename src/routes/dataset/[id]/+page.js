import { getDatasetDescription } from '$lib/utils/utils.js';


/** @type {import('./$types').PageLoad} */


export const load = (async ({ params }) => {

    const { id } = params;

    return {
        dataset: await getDatasetDescription(id)
    };
})

