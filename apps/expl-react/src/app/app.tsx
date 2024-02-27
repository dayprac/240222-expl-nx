// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from 'ahooks';

export function App() {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary
  return (
    <div>
      <div>
        <p>effectCount: {effectCount}</p>
        <p>updateEffectCount: {updateEffectCount}</p>
        <p>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            reRender
          </button>
        </p>
      </div>
      <NxWelcome title="expl-react" />
    </div>
  );
}

export default App;
