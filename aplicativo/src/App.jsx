import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css'

function App() {
  const Cargardatos= async()=>{
    await axios.get('https://localhost:7019/api/usuarios')
    .then(response=>{
      console.log(response.data);
    })
  }
  useEffect(()=>{
    Cargardatos();
  },[])

  return (
    <div className='tabla'>
   <table>

   <tr className='uno'>
    <td>Nombre </td>
    <td>Apellido </td>
    <td>Tipo Documento </td>
    <td>Numero Documento </td>
    <td>telefono </td>
    <td>correo </td>
    </tr>
    
    <tr className='dos'>
      <td>Ashlley</td>
      <td>Pacheco</td>
      <td>CC</td>
      <td>2345678</td>
      <td>2345678</td>
      <td>ashly@gmail.com</td>
      <td><button>Editar</button></td>
      <td><button>Eliminar</button></td>
    </tr>

   </table>
   
    


   </div>
   
  )
}

export default App
