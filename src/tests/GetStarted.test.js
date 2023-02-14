import { screen } from '@testing-library/react';
import GetStarted from '../pages/GetStarted';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste da GetStarted', () => {
  test('Se o título esta na página', () => {
    renderWithRouter(<GetStarted />);

    const title = screen.getByText('Get things done with TODo');
    expect(title).toBeInTheDocument();
  });

  test('Se existe um texto', () => {
    renderWithRouter(<GetStarted />);

    const title = screen.getByText(/Lorem ipsum/);
    expect(title).toBeInTheDocument();
  });
});
