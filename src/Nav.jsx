import {} from 'react'
import {NavLink} from 'react-router-dom'

function Nav(){
    return(
      <>
      <NavLink to="/">Home|</NavLink>
      <NavLink to="Contatos">Contatos|</NavLink>
      <NavLink to="Produtos">Produtos|</NavLink>
      <NavLink to="Queijos">Queijos|</NavLink>
      <NavLink to="QuemSomos">Quem Somos|</NavLink>
      <NavLink to="Unidades">Unidades|</NavLink>
      </>
    )
  }
  export default Nav