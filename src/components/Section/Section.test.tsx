import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';

test('when given params it should render as expected', () => {
  render(
    <Section label="test" className="test-class" fullWidth light thin center>
      <p>test child</p>
      <p>test child</p>
    </Section>
  );
  expect(screen.getByTestId('section')).toMatchSnapshot();
});

test('when not given params it should render as expected', () => {
  render(<Section />);
  expect(screen.getByTestId('section')).toMatchSnapshot();
});
