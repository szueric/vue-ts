<template>
	<div>
		<div></div>
		<img />
		<ul
			:data-hoge="{
				hoge: true
			}"
		>
			<li>
				<a href="#"></a>
			</li>
			<li>
				<a href="#"></a>
			</li>
			<li>
				<a href="#"></a>
			</li>
			<li>
				<a href="#"></a>
			</li>
			<li>
				<a href="#"></a>
			</li>
		</ul>
		<ol>
			<a href></a>
		</ol>
		<ol>
			<a href></a>
		</ol>
		<ol>
			<a href></a>
		</ol>
		<ol>
			<a href></a>
		</ol>
		<ol>
			<a href></a>
		</ol>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop() defaultName!: string;

	rawName = this.defaultName;

	get name() {
		return this.defaultName;
	}
}
</script>
