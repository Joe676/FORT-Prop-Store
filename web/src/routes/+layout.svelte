<script lang="ts">
  import "../app.css";
	import Navbar from "../components/Navbar.svelte";
  import { currentUser } from "$lib/pocketbase";
	import type NavbarElementData from "../lib/NavbarElementData";
  import {applyAction, enhance} from '$app/forms';
  import {pb} from '$lib/pocketbase';

  let navbarElements: readonly NavbarElementData[] = [
    {name: "Magazyn", route: "/store"},
    {name: "Kontakt", route: "/contact"},
  ];
</script>

<Navbar navbarElements={navbarElements}/>
<div class="container mx-auto py-10">
  <slot />
</div>