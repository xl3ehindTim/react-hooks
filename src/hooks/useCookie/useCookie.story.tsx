import React, { FC } from 'react';
import { useCookie } from './useCookie';

export default {
  title: 'useCookie',
};

export const Default: FC = () => {
  const [cookie, setCookie, deleteCookie] = useCookie("username", "xl3ehindTim")

  return (
    <>
      Cookie value: {cookie}
      <br />
      <input id="newValue" /> <button onClick={() => {
        // @ts-ignore
        setCookie(document.getElementById('newValue')?.value)
      }}>Update cookie</button>

      <br />

      <button onClick={() => deleteCookie()}>Delete cookie</button>
    </>
  );
};
