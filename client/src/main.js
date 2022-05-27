import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Random Image API',
	},
});

export default app;
