<script lang="ts" context="module">
	// retain module scoped expansion state for each tree node
  import {ChevronRight} from '@steeze-ui/heroicons';
  import {Icon} from '@steeze-ui/svelte-icon';

	const _expansionState = {
		/* treeNodeId: expanded <boolean> */
	}
</script>
<script lang="ts">
	import type Tree from "../lib/TreeType";


	import { slide } from 'svelte/transition'

	export let tree: Tree;
	const {label, children} = tree;

	let expanded = _expansionState[label] || false
	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded
	}
	$: arrowDown = expanded
</script>

<ul><!-- transition:slide -->
	<li>
		{#if children}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={toggleExpansion}>
        
				<span class="arrow" class:arrowDown>
          <!-- &#x25b6 -->
          <Icon src={ChevronRight} size="12"/>
        </span>
				{label}
			</span>
			{#if expanded}
				{#each children as child}
					<svelte:self tree={child} />
				{/each}
			{/if}
		{:else}
			<span>
				<span class="no-arrow"/>
				{label}
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
