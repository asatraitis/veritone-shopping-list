import { describe, expect, it, beforeEach } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '../../utils/testUtils';
import ShoppingList from '.';
import { items } from '../../mocks/data';

beforeEach(() => {
  render(<ShoppingList />);
});

describe('Shopping list feature tests', () => {
  it('Displays mocked items.', async () => {
    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'));
    items.forEach(item => {
      expect(screen.getByText(item.name)).toBeDefined();
    });
  });
});
