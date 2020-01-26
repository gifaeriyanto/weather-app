import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../home';

describe('With Snapshot Testing', () => {
  it('Render Homepage', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
