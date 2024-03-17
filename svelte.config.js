import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';

const config = {
  kit: {
    // Defina o adaptador para o seu aplicativo SvelteKit
    adapter: adapter(),

    // Especifique o diretório personalizado para suas rotas
    files: {
      // Este caminho deve apontar para o diretório onde estão seus arquivos de rota
      routes: resolve('./src/routes')
    }
  }
};

export default config;
