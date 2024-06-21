<template>
	<NuxtLayout name="404"
		><section
			class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
			<cite class="text-white text-xl">И разошлись все по домам. Ин 7:53</cite>
			<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
			<div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
				Страница не найдена
			</div>
			<button class="mt-5">
				<a
					class="relative inline-block text-sm font-medium bg-white group active:text-white focus:outline-none focus:ring">
					<span
						class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

					<span class="relative block px-8 py-3 bg-white border border-current">
						<NuxtLink
							to="/"
							class="hover:text-[#FF6A3D] transition-all"
							>Домой</NuxtLink
						>
					</span>
				</a>
			</button>
		</section></NuxtLayout
	>
</template>
