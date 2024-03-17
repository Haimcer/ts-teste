<!-- app.svelte -->
<script>
  import { writable } from "svelte/store";
  import Countdown from "../components/Countdown.svelte";
  import Modal from "../components/Modal.svelte";

  export let name = '';
  export let phone = '';
  export let email = '';

  const timer = writable(15);
  const modalVisible = writable(false);
  let buttonText = "Começar desafio";


  function startChallenge() {
    console.log(buttonText)
  if (buttonText === "Enviar" && (!name || !phone || !email)) {
    console.log('ta vazio')
    modalVisible.set(true);
    return;
  }else if(buttonText === "Enviar"){
    modalVisible.set(true);
  }

  buttonText = "Enviar";
  const countdown = new Countdown({
    target: document.body,
    props: {
      seconds: 15,
      onComplete: () => {
        modalVisible.set(true);
        clearInterval(interval);
      }
    }
  });
  const interval = setInterval(() => {
    timer.update(n => {
      if (n > 0) {
        return n - 1;
      } else {
        countdown.$destroy();
        clearInterval(interval);
        return n;
      }
    });
  }, 1000);
}

  function closeModal() {
    modalVisible.set(false);
  }
</script>

<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: linear-gradient(to bottom right, #8A2BE2, #FF1493, #FF0000);">
  <div style="width: 400px; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center; color: #333;">Desafio</h1>
      <form>
          <label style="display: block; margin-bottom: 10px;">
              Nome:
              <input type="text" bind:value={name} style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </label>
          <label style="display: block; margin-bottom: 10px;">
              Telefone:
              <input type="text" bind:value={phone} style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </label>
          <label style="display: block; margin-bottom: 10px;">
              Email:
              <input type="email" bind:value={email} style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </label>
          <button on:click|preventDefault={startChallenge} style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">{buttonText}</button>
      </form>
  
      {#if $timer > 0}
      <p style="margin-top: 20px; font-size: 18px; text-align: center;">Contagem regressiva: {$timer}</p>
  {/if}

  <Modal bind:visible={$modalVisible} on:close={closeModal}>
      {#if name && phone && email}
        <p>Desafio finalizado com sucesso!</p>
      {:else}
        <p>Desafio falhou!</p>
      {/if}
  </Modal>
  </div>
</div>
