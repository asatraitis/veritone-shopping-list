import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/testUtils';
import DeleteModal from '.';

describe('DeleteModal tests', () => {
  it('Displays opened modal.', async () => {
    render(<DeleteModal open={true} />);
    expect(screen.getByText('Delete Item?')).toBeDefined();
  });

  it('Does not display modal.', async () => {
    render(<DeleteModal open={false} />);
    expect(screen.queryByText('Delete Item?')).toBeNull();
  });
});
