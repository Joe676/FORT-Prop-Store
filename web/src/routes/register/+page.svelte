<script lang="ts">
  import {applyAction, enhance} from '$app/forms';
  import {pb} from '$lib/pocketbase';
</script>

<form method="POST" class="card" use:enhance={()=>{
  return async ({result}) => {
    pb.authStore.loadFromCookie(document.cookie);
    applyAction(result);
  }
}}>
  <div class="flex justify-center">
    <div class="card w-1/2 min-w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h1 class="card-title">Rejestracja</h1>
        

        <div class="form-control gap-2 mb-4 flex justify-center">
      
          <label class="input-group">
            <span class="w-full max-w-xs">Email</span>
            <input type="email" name="email" placeholder="Email" class="input input-bordered input-md w-full max-w-xs"/>
          </label>
      
          <label class="input-group">
            <span class="w-full max-w-xs">Nazwa użytkownika</span>
            <input type="input" name="name" placeholder="Nazwa użytkownika" class="input input-bordered input-md w-full max-w-xs"/>
          </label>
      
          <label class="input-group">
            <span class="w-full max-w-xs">Hasło</span>
            <input type="password" name="password" placeholder="Hasło" class="input input-bordered input-md w-full max-w-xs"/>
          </label>
      
          <label class="input-group">
            <span class="w-full max-w-xs">Potwierdź hasło</span>
            <input type="password" name="passwordConfirm" placeholder="Potwierdź hasło" class="input input-bordered input-md w-full max-w-xs"/>
          </label>
      
          <div class="card-actions justify-end">
            <button class="btn btn-primary ">Zarejestruj się</button>
          </div>
        </div>

      </div>
    </div>
  </div>

</form>