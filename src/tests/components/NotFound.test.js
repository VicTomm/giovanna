import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NOT FOUND PAGE correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});