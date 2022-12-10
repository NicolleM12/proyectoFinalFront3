import React from 'react'
import { useEffect, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/* */

const Home = () => {
  const { usuarios } = useContext(ContextGlobal)

  useEffect(() => {
    
  }, [])

  
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid container">
      {usuarios.length
          ? usuarios.map((usuario) => (
            <Card key={usuario.id} nombre={usuario.name} username={usuario.username} 
            id={usuario.id}/>
            ))
          : null}
        
      </div>
    </main>
  )
}

export default Home;