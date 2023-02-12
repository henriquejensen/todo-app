import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste da Login', () => {
  test('Se ao clicar no botão Get Started navega para a /login', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /Get started/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const title = screen.getByRole('heading', { name: /Welcome Bac/i, level: 1 });
    expect(title).toBeInTheDocument();
  });

  test('Se o botao desabilita depois de inserir o email e o password', () => {
    renderWithRouter(<App />, { route: '/login' });

    const title = screen.getByRole('heading', { name: /Welcome Bac/i, level: 1 });
    expect(title).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Sign/i });
    expect(button).toBeDisabled();

    const email = screen.getByPlaceholderText(/Enter your/i);
    const password = screen.getByPlaceholderText(/password/i);

    userEvent.type(email, 'jensen@jensen.com');
    userEvent.type(password, '123456');

    expect(button).not.toBeDisabled();
  });
});
