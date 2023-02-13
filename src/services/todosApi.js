const URL = 'http://localhost:3001';

export async function todosApi() {
  try {
    const response = await fetch(`${URL}/todos`);
    return response.json();
  } catch (e) {
    console.log(e.message);
    // eslint-disable-next-line no-alert
    alert('Serviço indisponível');
    return [];
  }
}

export async function addTodo(todo) {
  const response = await fetch(`${URL}/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: todo,
      checked: false,
    }),
  });
  return response.json();
}
