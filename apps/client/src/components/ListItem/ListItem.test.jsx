import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/testUtils';
import ListItem from '.';

describe('ListItem tests', () => {
  it('Displays ListItem w/ text', async () => {
    render(<ListItem text="Milk" secondaryText="Almond milk" />);
    expect(screen.getByText('Milk')).toBeDefined();
    expect(screen.getByText('Almond milk')).toBeDefined();
  });

  it('Displays selected ListItem', () => {
    render(
      <ListItem text="Milk" secondaryText="Almond milk" selected={true} />,
    );
    expect(screen.getByRole('checkbox').checked).toBe(true);
  });
});
