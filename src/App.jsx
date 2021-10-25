import { Header,Money,Products,Receipt} from './components';
import './style.scss'
function App() {
  return (
  <div className="base__container">
    <Header/>
    <Money/>
    <Products/>
    <Receipt/>
  </div>
  );
}

export default App;
