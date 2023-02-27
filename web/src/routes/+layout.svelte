<script lang="ts">
  import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import type NavbarElementData from "$lib/NavbarElementData";

  let navbarElements: readonly NavbarElementData[] = [
    {name: "Magazyn", route: "/store"},
    {name: "Kontakt", route: "/contact"},
  ];
</script>

<Navbar navbarElements={navbarElements}/>
<div class="container mx-auto py-10">
  <slot />
</div>