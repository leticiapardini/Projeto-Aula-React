import { Button } from 'antd';
import Menu from './componentes/Menu';
import Main from './componentes/Main';
import CheckableButton from './componentes/CheckableButton';
import Contador from './componentes/Contador';

const App = () => {
 
  return(
  <div>
    {/* <Button>Teste</Button> */}
    <CheckableButton> TESTE</CheckableButton>
    <Contador></Contador>
    
    <Menu/>
    <Main/>
  </div>

  
)};

export default App;


