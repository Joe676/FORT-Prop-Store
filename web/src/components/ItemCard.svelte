<script lang="ts">
	import Card from "./Card.svelte";
	import type Item from "$lib/ItemType";

  export let item: Item;
</script>

<Card>
  <h1 class="card-title">{item.title}</h1>

  <div>{item.description}</div>
</Card>