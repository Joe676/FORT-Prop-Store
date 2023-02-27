<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
import Carousel from '$lib/components/Carousel.svelte';
import type { PageData } from './$types';

	export let data: PageData;
</script>

<Breadcrumb breadcrumb={data.breadcrumb}/>

<h1 class="text-3xl font-bold">
    {data.item.title}
</h1>
<div id="content" class="p-10 flex">
    <div class="w-1/2">
        <h3 class="text-2xl font-bold">
            Opis
        </h3>
        <p>
            {data.item.description}
        </p>
        
        {#each data.additionalFields as field}
        <h3 class="text-xl font-bold mt-5">
            {field.name}
        </h3>
        <p>
            {field.description}
        </p>
        {/each}
    </div>
    <div class="w-1/2">
        <Carousel pictureUrls={data.item.pictureUrls}/>
    </div>
</div>