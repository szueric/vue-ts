import TheA from '../../dist/the-a/umd.vue';
import TheB from '../../dist/the-b/umd.vue';
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

describe('TheB.vue', () => {
	it('is snapshot test the B ', () => {
		const defaultName = 'Mr. B';
		const wrapper = shallowMount(TheB, {
			propsData: { defaultName }
		});
		expect(wrapper).toMatchInlineSnapshot(`
<div>
  <div data-name="Mr. B"></div>
</div>
`);
	});
});
