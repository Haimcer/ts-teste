import { test, expect } from '@playwright/test';

test('challenge should start countdown and show modal', async ({ page }) => {
  // Navegar para a página
  await page.goto('http://localhost:5173');

  // Preencher os campos do formulário
  await page.fill('input[type="text"]', 'John Doe');
  await page.fill('input[type="email"]', 'john@example.com');

  // Clicar no botão para iniciar o desafio
  await page.click('button:has-text("Começar desafio")');

  // Esperar até que o desafio termine e o modal seja exibido
  await page.waitForSelector('text=Desafio finalizado com sucesso!',{ timeout: 60000 });

  // Clicar no botão de fechar o modal
  await page.click('text=X');

  // Verificar se o modal desapareceu após o fechamento
  const modalVisible = await page.isVisible('text=Desafio finalizado com sucesso!');
  expect(modalVisible).toBeFalsy();
});

// Adicionar mais testes conforme necessário
