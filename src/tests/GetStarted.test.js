import { render, screen } from '@testing-library/react';
import GetStarted from '../pages/GetStarted';

describe('Teste da GetStarted', () => {
  test('Se o título esta na página', () => {
    render(<GetStarted />);

    const title = screen.getByText('Get things done with TODo');
    expect(title).toBeInTheDocument();
  });

  test('Se existe um texto', () => {
    render(<GetStarted />);

    const title = screen.getByText(/Lorem ipsum/);
    expect(title).toBeInTheDocument();
  });
});
