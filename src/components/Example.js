import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const Example = () => {

const [name, setName]  = useState([])

useEffect(()=>{
    async function getData(){
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
        console.log(res.data.drinks)
        setName(res.data.drinks)

    }
    getData();
},[])

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Drinks Category</th>
          <th>Drinks Name</th>
          <th>Instructions</th>
        </tr>
          </thead>
          {
              name.map((elem,index)=>{
                  return(
                    <tbody>
                      <tr>
                   <th scope="row">{elem.idDrink}</th>
               <td>{elem.strDrink}</td>
             <td>{elem.strGlass}</td>
           <td>{elem.strInstructions}</td>
         </tr>
             </tbody>
                  )
              })
          }
    </Table>
  );
}

export default Example;