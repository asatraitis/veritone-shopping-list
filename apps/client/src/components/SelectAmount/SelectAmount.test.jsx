import { describe, expect, it } from 'vitest';
import { render, screen, userEvent, waitFor } from '../../utils/testUtils';
import SelectAmount from '.';

describe('SelectAmount tests', () => {
  it('Displays SelectAmount', async () => {
    render(<SelectAmount amount={4} />);
    userEvent.click(screen.getByRole('button', { name: 'How Many?' }));

    await waitFor(() => screen.getByText('1'));

    expect(screen.getByText('4')).toBeDefined();
    expect(screen.queryByText('5')).toBeNull();
  });
});
