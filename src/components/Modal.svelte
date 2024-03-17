<script>
  import { createEventDispatcher } from 'svelte';

  export let visible = true;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
  }
</script>

{#if visible}
  <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index: 9999;">
    <div style="background-color: rgba(0, 0, 0, 0.5); position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
    <div style="background-color: white; padding: 20px; border-radius: 8px; z-index: 10000;">
      <button style="position: absolute; top: 10px; right: 10px; padding: 5px; background-color: white; border: none; cursor: pointer;" on:click={closeModal}>X</button>
      <slot></slot>
    </div>
  </div>
{/if}
