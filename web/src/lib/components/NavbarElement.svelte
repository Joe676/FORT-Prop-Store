<script lang="ts">
	import type NavbarElementData from "$lib/NavbarElementData";

  export let data: NavbarElementData;
</script>
<li>
  <a href={data.route}>
    {data.name}
  </a>
</li>