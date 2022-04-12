import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/testUtils';
import AppBar from '.';

describe('AppBar tests', () => {
  it('Displays header with text "Shopping List".', async () => {
    render(<AppBar title="Shopping List" />);
    expect(screen.getByText('Shopping List')).toBeDefined();
  });
});
