// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxthub/core', 'nuxt-icons'],

	tailwindcss: {
		exposeConfig: true,
	},
});
