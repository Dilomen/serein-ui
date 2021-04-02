import React from "react";
import { mount } from 'enzyme';
function mountComponentTest(Component: React.ComponentType): void {
  describe(`mount and unmount`, () => {
    it(`component could be updated and unmounted without errors`, () => {
      const wrapper = mount(Component);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow()
    });
  });
}

export default mountComponentTest