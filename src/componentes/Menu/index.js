import { Menu as AntdMenu } from "antd"

const Menu = () => (

    <AntdMenu  mode='horizontal'>
        <AntdMenu.Item key='Home'>Home</AntdMenu .Item>
        <AntdMenu.Item key='team'>Equipe</AntdMenu .Item>
        <AntdMenu.Item key='aboutus'>Sobre nós</AntdMenu .Item>
        <AntdMenu.Item key='contact'>Contato</AntdMenu .Item>
    </AntdMenu >
)

export default Menu