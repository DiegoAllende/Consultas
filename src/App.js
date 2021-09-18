import './App.css';
import { AuthProvider } from './hooksReact/context/AuthContext';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
