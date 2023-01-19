<script lang="ts">
	import NavbarElement from "./NavbarElement.svelte";
	import type NavbarElementData from "./NavbarElementData";
  // import { ChevronDown } from '@steeze-ui/heroicons'
  // import { Icon } from '@steeze-ui/svelte-icon'

  export let navbarElements: readonly NavbarElementData[];
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">FORT Prop Store</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#each navbarElements as element}
        <NavbarElement data={element}/>
      {/each}
    </ul>
  </div>
</div>