import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/testUtils';
import ItemModal from '.';

describe('ItemModal tests', () => {
  it('Displays opened modal.', async () => {
    render(<ItemModal open={true} />);
    expect(screen.getByText('Shopping List')).toBeDefined();
  });

  it('Does not display modal.', async () => {
    render(<ItemModal open={false} />);
    expect(screen.queryByText('Shopping List')).toBeNull();
  });

  it('Displays edit variant.', async () => {
    render(<ItemModal open={true} variant="edit" />);
    expect(screen.getByText('Edit an Item')).toBeDefined();
  });
});
