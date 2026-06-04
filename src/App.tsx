import './App.css';
import Nav from './components/nav/Nav.tsx';
import { AppRouter } from './components/router.tsx';

function App() {
  return (
    <>
      <Nav />
      <AppRouter />
    </>
  );
}

export default App;
