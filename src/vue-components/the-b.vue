<template>
	<div>
		<div data-name="name"></div>
	</div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class extends Vue {
	@Prop() defaultName!: string;

	rawName = this.defaultName;

	get name() {
		return this.rawName;
	}

	set name(value: string) {
		this.rawName = value;
	}
}
</script>
