import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/testUtils';
import EmptyState from '.';

describe('EmptyState tests', () => {
  it('Displays EmptyState', async () => {
    render(<EmptyState msg="Empty!">Test btn</EmptyState>);
    expect(screen.getByText('Empty!')).toBeDefined();
  });
});
