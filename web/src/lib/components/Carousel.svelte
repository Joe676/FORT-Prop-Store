<script lang="ts">
  import badge from '../images/badge.jpg'

  export let pictureUrls: string[];
</script>

<div class="carousel w-full">
  {#each pictureUrls as picture, i }
    <div id="item{i+1}" class="carousel-item w-full">
      <img src={picture} class="w-full" />
    </div> 
  {/each}
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  {#each pictureUrls as _, i}
    <a href="#item{i+1}" class="btn btn-xs">{i+1}</a>
  {/each}
</div>