import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ChangeStatusButton.stories';

const { Default } = composeStories(stories);

test('renders primary button with default arsd', () => {
  render(<Default />);
  const buttonElement = screen.getByText('Deactivate');
  expect(buttonElement).not.toBeNull();
});
