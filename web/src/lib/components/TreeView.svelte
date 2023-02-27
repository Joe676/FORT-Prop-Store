<script lang="ts" context="module">
	// retain module scoped expansion state for each tree node
  import {ChevronRight} from '@steeze-ui/heroicons';
  import {Icon} from '@steeze-ui/svelte-icon';

	const _expansionState:Map<string, boolean> = new Map();

</script>
<script lang="ts">
	import type Tree from "$lib/TreeType";

	export let tree: Tree;
	export let currentId: string|undefined = undefined;

	const {label, children, id} = tree;

	let expanded:boolean = _expansionState.get(label) || false
	const toggleExpansion = () => {
		_expansionState.set(label, !expanded);
		expanded = !expanded;
	}
	$: arrowDown = expanded
</script>

<ul><!-- transition:slide -->
	<li>
		{#if children}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span >
				<span class="arrow" class:arrowDown on:click={toggleExpansion}> 
          <!-- &#x25b6 -->
          <Icon src={ChevronRight} size="12"/>
        </span>
				<a href={id!==undefined ? `/store/categories/${id}`:"/store"} class:font-bold={id==currentId}>
					{label}
				</a>
			</span>
			{#if expanded}
				{#each children as child}
					<svelte:self tree={child} currentId={currentId}/>
				{/each}
			{/if}
		{:else}
			<span>
				<span class="no-arrow"/>
				<a href={id!==undefined ? `/store/categories/${id}`:"/store"} class:font-bold={id==currentId}>
					{label}
				</a>
			</span>
		{/if}
	</li>
</ul>

<style>
	ul {
		margin: 0;
		list-style: none;
		padding-left: 1.2rem; 
		user-select: none;
	}
	.no-arrow { padding-left: 1.0rem; }
	.arrow {
		cursor: pointer;
		display: inline-block;
		/* transition: transform 200ms; */
	}
	.arrowDown { transform: rotate(90deg); }
</style>
