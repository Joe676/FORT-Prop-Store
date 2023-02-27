<script lang="ts">
  export let fullHeight: boolean = false;
</script>
<!-- <div class="flex justify-center"> -->
  <div class="card bg-base-100 shadow-xl" class:h-full={fullHeight}>
    <div class="card-body">
      <slot/>
    </div>
  </div>
<!-- </div> -->