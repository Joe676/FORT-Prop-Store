<script lang="ts">
  import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import NavbarElement from "../components/NavbarElement.svelte";
	import type NavbarElementData from "../components/NavbarElementData";
  // import type { LayoutData } from './$types';

  // export let data: LayoutData;
  let navbarElements: readonly NavbarElementData[] = [
    {name: "Magazyn", route: "/store"},
    {name: "Kontakt", route: "/contact"},
  ];
</script>

<Navbar navbarElements={navbarElements}/>
<div class="container mx-auto py-10">
  <slot />
</div>