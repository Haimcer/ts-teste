module.exports = {
    mode: 'jit',
    purge: [
      './src/**/*.svelte',
      './src/**/*.html',
      './src/**/*.js',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
  }