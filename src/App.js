import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header
        imgLogo="https://aldormirmisuenio.com.ar/wp-content/uploads/2023/04/Logo-completo-con-fondo-transparente.png"
        navbarItems={["Home", "Nosotros", "Productos"]}
      />
    </div>
  );
}

export default App;
