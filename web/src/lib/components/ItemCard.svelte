<script lang="ts">
	import Card from "./Card.svelte";
	import type Item from "$lib/models/ItemType";

  export let item: Item;

  const itemLink = `/store/${item.id}`;
</script>

<Card fullHeight>
  <h1 class="card-title hover:underline">
    <a href={itemLink}>
      {item.title}
    </a>
  </h1>

  <div class="flex flex-col justify-center h-full">
    <div class="carousel w-full">
      {#each item.pictureUrls as picture, i}
      <div id={'slide_'+item.id+'_'+i} class="carousel-item relative w-full">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={picture} class="w-full" />
        
        {#if item.pictureUrls.length > 1}
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={'#slide_'+item.id+'_'+((i-1)%item.pictureUrls.length)} class="btn btn-circle">❮</a> 
          <a href={'#slide_'+item.id+'_'+((i+1)%item.pictureUrls.length)} class="btn btn-circle">❯</a>
        </div>
        {/if}
        
      </div> 
      {/each}
    </div>
  </div>
</Card>