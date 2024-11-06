'use client';

import { useCookies } from 'next-client-cookies';

 const MyComponent = () => {
  const cookies = useCookies();

  return (
    <div>
      <p>My cookie value: {cookies.get('token')}</p>

      <button onClick={() => cookies.set('my-cookie', 'my-value')}>
        Set cookie
      </button>
      {' | '}
      <button onClick={() => cookies.remove('my-cookie')}>Delete cookie</button>
    </div>
  );
};

export default MyComponent