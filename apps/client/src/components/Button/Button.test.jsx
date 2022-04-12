import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/testUtils';
import Button from '.';

describe('Button tests', () => {
  it('Displays button with test text.', async () => {
    render(<Button>Test btn</Button>);
    expect(screen.getByText('Test btn')).toBeDefined();
  });
});
