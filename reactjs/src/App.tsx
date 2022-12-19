import { useState } from 'react'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import * as Input from './components/Input'

export function App() {
  const [todos, setTodo] = useState<string[]>([]);

  function handleCreateNewTodo() {
    // TODO
  }

  const isTodoListEmpty = todos.length === 0

  return (
    <div>
      <Header onCreateNewTodo={handleCreateNewTodo} />

      <Input.Root>
        <Input.Label htmlFor="name" />
        <Input.Field id="name" />

        <Input.Icon>
          <span></span>
        </Input.Icon>

        <Input.ErrorMessage message='Description Todo is required!' />
      </Input.Root>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no css</p>
          </div>
        </section>

        <ul>
          {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>

        {isTodoListEmpty && <p>Empty To Do's</p>}
      </main>

      <Footer />
    </div>
  )
}