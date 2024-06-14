<script setup lang="ts">
	const count = ref(0);
</script>

<template>
	<div>
		<p>{{ count }}</p>
		<button
			@click="count++"
			class="relative z-50">
			Click
		</button>
	</div>
</template>
