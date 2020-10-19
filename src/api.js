export async function postProducts(title) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
  };
  const response = await fetch('https://reqres.in/api/products', requestOptions);
  console.log('response', response)
  return response;
}
