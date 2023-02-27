<script lang="ts">
	import type Category from "$lib/models/CategoryType";

  export let breadcrumb: Category[];
</script>

<div class="text-sm breadcrumbs italic">
  <ul>
      {#each breadcrumb as crumb}
          <li>
              <a href="/store/categories/{crumb.id}">
                  {crumb.name}
              </a>
          </li>
      {/each}
  </ul>
</div>