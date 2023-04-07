import { Button } from 'antd'
import logo from '../assets/logo-hawk.png'

const Home = () => {
    return (
        <div>
            <header id='divider'><img src={logo} alt="Logo da empresa Hawk" id='logo'/></header>
            <h1 className='titulo'>PRONTUÁRIO - HAWK SEGURANÇA E VIGILÂNCIA LTDA</h1>
            <Button className='btn-principal' type='primary'>Consultar</Button>
        </div>

    )
} 

export default Home