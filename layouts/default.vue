<script setup lang="ts"></script>

<template>
	<header class="flex flex-col justify-between relative z-50">
		<nav class="md:container md:mx-auto px-4 pt-2 md:pt-10">
			<div
				class="flex flex-row items-baseline justify-between md:items-center md:justify-between">
				<div class="group">
					<button
						class="text-xs md:text-xl uppercase text-gray-200 hover:text-yellow-500 transition-all cursor-pointer">
						[ Меню сайта ]
					</button>
					<div
						class="invisible flex flex-col absolute top-10 md:top-16 gap-2 group-hover:visible border-t-2 pt-4 md:mt-1">
						<NuxtLink
							to="#about"
							class="text-gray-200 text-sm uppercase hover:text-yellow-500 transition-all cursor-pointer">
							[ История ]
						</NuxtLink>
						<!-- <a
						href=""
						class="text-gray-200 text-sm uppercase hover:text-yellow-500 transition-all cursor-pointer"
					>
						[ Школы ]
					</a> -->
						<NuxtLink
							to="#event"
							class="text-gray-200 text-sm uppercase hover:text-yellow-500 transition-all cursor-pointer">
							[ События ]
						</NuxtLink>
						<!-- <a
						href=""
						class="text-gray-200 text-sm uppercase hover:text-yellow-500 transition-all cursor-pointer"
					>
						[ Партнерство ]
					</a> -->
						<!-- <a
						href=""
						class="text-gray-200 text-sm uppercase hover:text-yellow-500 transition-all cursor-pointer"
					>
						[ Свидетельства ]
					</a> -->
						<NuxtLink
							to="#contact"
							class="text-gray-200 text-sm uppercase hover:text-yellow-500 transition-all cursor-pointer">
							[ Контакты ]
						</NuxtLink>
					</div>
				</div>
				<div class="flex gap-2 flex-col items-end md:flex-row">
					<NuxtLink
						to="tel:+79937676418"
						class="text-xs md:text-xl uppercase text-gray-200 hover:text-yellow-500 transition-all">
						[ Связаться с нами ]
					</NuxtLink>
					<NuxtLink
						to="tel:+79937676418"
						class="text-xs md:text-xl uppercase text-gray-200 hover:text-yellow-500 transition-all">
						[ Поддержать служение ]
					</NuxtLink>
				</div>
			</div>
		</nav>
	</header>
	<slot />
</template>
