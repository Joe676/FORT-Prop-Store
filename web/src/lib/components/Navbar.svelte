<script lang="ts">
	import NavbarElement from "./NavbarElement.svelte";
  import {applyAction, enhance} from '$app/forms';
  import {currentUser, pb} from '$lib/pocketbase';
	import type NavbarElementData from "$lib/NavbarElementData";

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
      {#if $currentUser}
        <li>
          <form method="POST" action="/logout" use:enhance={()=>{
            return async ({result}) => {
              pb.authStore.clear();
              applyAction(result);
            }}}>
            <button>Wyloguj</button>
          </form>
        </li>
        <NavbarElement data={{name: $currentUser.email, route: "/"}}/>
      {:else}
        <NavbarElement data={{name: "Zaloguj", route: "/login"}}/>
        <NavbarElement data={{name: "Rejestracja", route: "/register"}}/>
      {/if}
    </ul>
  </div>
</div>