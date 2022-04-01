import { Button, Menu } from 'antd';

const App = () => {
  const onClickHome = () =>{
    console.log('Indo para pagina inicial')
  }
  const onClickEquipe = () =>{
    console.log('Indo para pagina de equipe')
  }
  const onClickSobrenos = () =>{
    console.log('Indo para pagina sobre nós')
  }
  const onClickFim = () =>{
    console.log('Indo para pagina final')
  }
  const onClickItem = () =>{
    console.log('Indo para pagina do item')
  }
  return(
  <div>
    <h1>Teste</h1>
    <Menu mode='horizontal'>
      <Menu.Item key='Home'>Home</Menu.Item>
      <Menu.Item key='team'>Equipe</Menu.Item>
      <Menu.Item key='aboutus'>Sobre nós</Menu.Item>
      <Menu.Item key='contact'>Contato</Menu.Item>
    </Menu>
    <main>
      <h2> Listagem</h2>
     <Button> Cadastrar Item </Button>
    </main>
  </div>

  
);}

export default App;
