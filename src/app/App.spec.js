import React from 'react';
import { shallow } from 'enzyme';

import { App } from '~/App';

describe('App', () => {

  test('render the <App> component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

});
