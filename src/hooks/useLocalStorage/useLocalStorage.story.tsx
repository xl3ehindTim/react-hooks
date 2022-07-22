import React, { FC } from 'react';
import { useLocalStorage } from './useLocalStorage';

export default {
  title: 'useLocalStorage',
};

export const Default: FC = () => {
  const [name, setName, deleteName] = useLocalStorage("name", "John doe")

  return (
    <>
      Localstorage item value: {name}
      <br />
      <input id="newValue" /> <button onClick={() => {
        // @ts-ignore
        setName(document.getElementById('newValue')?.value)
      }}>Update local storage item value</button>

      <br />

      <button onClick={() => deleteName()}>Delete local storage item</button>
    </>
  );
};
