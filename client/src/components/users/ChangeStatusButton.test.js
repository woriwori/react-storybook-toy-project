import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom'; // for using toBeVisible
import * as stories from './ChangeStatusButton.stories';

const { Default } = composeStories(stories);

beforeAll(() => {
  render(<Default />);
});
describe('', () => {
  test('renders button', () => {
    const buttonElement = screen.getByText('Deactivate');
    expect(buttonElement).not.toBeNull();
  });

  test('modal should open when a button is clicked', () => {
    const buttonElement = screen.getByText('Deactivate');
    buttonElement.click();

    const title = screen.getByText('Change Status');
    const content = screen.getByText('Deactivate this user?');
    const ok = screen.getByText('OK');
    const cancel = screen.getByText('Cancel');

    expect(title).not.toBeNull();
    expect(content).not.toBeNull();
    expect(ok).not.toBeNull();
    expect(cancel).not.toBeNull();
  });

  test('modal should close when the Cancel button is clicked', async () => {
    const buttonElement = screen.getByText('Deactivate');
    buttonElement.click();

    const modalTitle = screen.getByText('Change Status');
    expect(modalTitle).toBeVisible();

    const modalCancel = screen.getByText('Cancel');
    userEvent.click(modalCancel);

    expect(modalTitle).not.toBeVisible();
  });
});
