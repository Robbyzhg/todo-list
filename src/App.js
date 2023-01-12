import FormInput from './components/FormInput'
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="grid place-content-center gap-4">
      <header className="text-center"> 
        <h1 className="text-4xl text-black">T o d o</h1>
      </header>
      <FormInput />
      <ListTodo />
    </div>
  );
}

export default App;
