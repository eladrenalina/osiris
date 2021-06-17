import './NavBar.css';


export const NavBar =() =>{

    const ecommerceName = "Osiris"
    return(
        <div className='App'>
        <header className='topbar'>
        <p className='logo'> {ecommerceName}</p>
        <nav className='navigation'>
          <ul className='links'>
            <li className='link'><a href=''>Inicio</a></li>
            <li className='link'><a href=''>Ropas</a></li>
            <li className='link'><a href=''>Accesorios</a></li>
            <li className='link'><a href=''>Nosotros</a></li>
          </ul>
        </nav>

      </header> 
    
    </div>
    )
}