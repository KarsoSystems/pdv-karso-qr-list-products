// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Btn } from '@karso-administrador/UI';

export function App() {
  return (
    <div>
      <Btn>Hola mundo</Btn>
      <NxWelcome title="bot" />
    </div>
  );
}

export default App;
