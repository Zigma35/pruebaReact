import Form from 'react-bootstrap/Form';
import selectorMeses from "./Selector.css"
import {getHoliday} from '../MiApi/MiApi';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Selector() {
  const [holidaysByMonth, setHolidaysByMonth] = useState([])  //Se declara la variable holidaysByMonth y setHolidaysByMonth setea la informacion de holidaysByMonth, y useState indica que el primer valor que toma holidaysByMonth es un array vacio
  const [tableData, setTableData] = useState([])
  useEffect(() => { //useEffect ejecuta todo lo que se declara en el

    getHoliday().then(response => {
      setHolidaysByMonth(response)
      
    })
  }, 
  []
  )
  
  const onClick = () => { //El onclick declara una funcion de flecha la cual ejecutara todo lo que tiene dentro (onClick es el nombre que se le dio ya que queremos que al hacer click se ejecute)
    let actualMonth = document.getElementById("selectComponent").value //Se toma el value del selector con id "component" del documento
    let holidayFilter=holidaysByMonth.filter(x=>x.date.split("-")[1]===actualMonth) //Esta linea hace el filtro, al seleccionar un valor mensual, este lo itera y en X guarda todos los objetos del array, y al indicar ".date" toma esa propiedad de la API de todos los elementos del array y "split" quita los guiones (ya que es el caracter que se indico) y crea 3 elementos separados, y al separarlos me retorna los elementos que cumplan con la posicion indicada en la comparacion (en este caso la segunda posicion ya que se le indico "1")
    //Holiday filter es el producto final
    setTableData(holidayFilter)
  }
  return (
    <><Form.Select aria-label="Default select example" className='selectorMeses' onChange={onClick} id="selectComponent">
      <option>Seleccionar mes</option>
      <option value="01">Enero</option>
      <option value="02">Febrero</option>
      <option value="03">Marzo</option>
      <option value="04">Abril</option>
      <option value="05">Mayo</option>
      <option value="06">Junio</option>
      <option value="07">Julio</option>
      <option value="08">Agosto</option>
      <option value="09">Septiembre</option>
      <option value="10">Octubre</option>
      <option value="11">Noviembre</option>
      <option value="12">Diciembre</option>
    </Form.Select>
    <br></br>




{/* Aca empieza la tabla */}

    <Table striped bordered hover variant="dark" className='selectorMeses'>
        <thead>
          <tr>
            <th>Cantidad de feriados</th>
            <th>Fecha/as</th>
          </tr>
          <tr>
            <th style={{ verticalAlign: 'middle' }}> {tableData.length} </th> 
            {/* Esto es una operacion renderizado condicional (operacion ternaria) que funciona como un else if */}
            <th className='centrar' style={{ verticalAlign: 'middle' }}> {tableData.length===0 ? "N/A" : tableData.map(element => (<p>{element.date}</p>))  } </th>
            {/* Aca termina la operacion */}
          </tr>
        </thead>
      </Table></>

// Aca termina la tabla

  );

}

export default Selector;
