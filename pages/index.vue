<script setup lang="ts">
	import { z } from 'zod';
	import { useQuery } from '@tanstack/vue-query';

	const schema = z.object({
		hello: z.string(),
		id: z.string(),
	});

	type DataSchema = z.infer<typeof schema>;

	const { data, error, suspense } = useQuery({
		queryKey: ['ul', 'info'],
		queryFn: async () => {
			const response = await $fetch(
				'https://api.1clicom.ru/expert/?tenders&d',
				{
					method: 'POST',
					body: {
						hello: 'world new',
					},
				},
			);

			const { success, data } = schema.safeParse(response);

			if (!success && !process.dev) {
				throw new Error('Error');
			}
			return data;
		},
		retry: false,
	});

	await suspense();
</script>

<template>
	<div>
		<h1 class="text-2xl">Hello world</h1>
		<div class="flex flex-col">
			<pre>Data - {{ data }}</pre>
			<pre>Error - {{ error }}</pre>
		</div>
	</div>
</template>
