import TheA from '../vue-components/the-a.vue';
import { shallowMount } from '@vue/test-utils';

describe('TheA.vue', () => {
	it('is the A component', () => {
		const defaultName = 'Mr. A';
		const wrapper = shallowMount(TheA, {
			propsData: { defaultName }
		});
		expect(wrapper.text()).toMatch(defaultName);
	});
});
