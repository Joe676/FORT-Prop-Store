<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import TreeView from '$lib/components/TreeView.svelte';
	import type Category from '$lib/models/CategoryType';
	import type Tree from '$lib/models/TreeType';
    import type { PageData } from './$types';
    
    export let data: PageData;		
    const makeTree = (c: Category): Tree => {
        return {
            label: c.name, 
            children: c.children ? c.children.map(makeTree) : undefined, 
            id: c.id}
    };

    const tree: Tree = {
		label: "Kategorie", children: 
            data.categories.map(makeTree),
	}
</script>

<h1 class="text-3xl font-bold">A tu jest Store</h1>
	<div class="flex justify-end">
    <div class="w-3/4">
			<div class="flex">
				{#if data.items.length > 0}
					
					{#each data.items as item}
						<div class="w-1/3 h-96">
							<ItemCard item={item}/>
						</div>
					{/each}
				{:else}
						Brak elementów do wyświetlenia
				{/if}
			</div>
    </div>
    <div class="w-1/4">
        <Card>
          <TreeView tree={tree} currentId={data.categoryId}/>
        </Card>
    </div>
</div>