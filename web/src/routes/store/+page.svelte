<script lang="ts">
	import { children } from 'svelte/internal';
	import Card from '../../components/Card.svelte';
	import type Category from '../../lib/CategoryType';
	import ItemCard from '../../components/ItemCard.svelte';
	import type Tree from '../../lib/TreeType';
    import TreeView from '../../components/TreeView.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    const makeTree = (c: Category): Tree => {
        return {label: c.name, children: c.children ? c.children.map(makeTree) : undefined}
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
				{#each data.items as item}
					<div class="w-1/3">
						<ItemCard item={item}/>
					</div>
				{/each}
			</div>
    </div>

    <div class="w-1/4">
        <Card>
            <TreeView tree={tree}/>
        </Card>
    </div>
</div>