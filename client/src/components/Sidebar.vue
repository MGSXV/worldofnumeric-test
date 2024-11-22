<template>
	<div class="fixed inset-0 flex z-40">
		<!-- Sidebar -->
		<div class="absolute flex top-0 h-screen z-20"
			:class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']">
			<!--Drawer -->
			<button @click.prevent="toggle()"
				class="w-12 h-48 p-1 my-auto rounded text-white bg-primary-red text-center focus:outline-none hover:bg-primary-red-hover transition-color duration-300">
				<span :class="[right ? '-rotate-90' : 'rotate-90']"
					class="block transform origin-center font-bold">
					Drawer
				</span>
			</button>

			<!-- Sidebar Content -->
			<div ref="content" :class="[open ? 'max-w-lg' : 'max-w-0']"
				class="transition-all duration-700 bg-grey-200 overflow-hidden">
				<div class="w- h-full py-4 px-5 ">
					sdsf
				</div>
				<slot></slot>
			</div>
		</div>

		<transition name="fade">
			<!-- Dimmer -->
			<div v-if="dimmer && open" @click="toggle()"
				class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10" />
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
const dimmer = ref(true);
const right = ref(false);

function toggle() {
	open.value = !open.value;
}
</script>

<style>
html {
	background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
