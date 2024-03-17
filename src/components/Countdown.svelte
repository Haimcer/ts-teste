<script>
    import { onMount } from 'svelte';
  
    export let seconds = 0;
    export let onComplete = () => {}
  
    onMount(() => {
      const interval = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
          clearInterval(interval);
          onComplete();
        }
      }, 1000);
    });
  </script>
  
  <p>Countdown: {seconds}</p>