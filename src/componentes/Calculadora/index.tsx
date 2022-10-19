import { useState } from 'react';
import './calculadora.css'

export default function Calculadora() {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operador, setOperador] = useState();

  function inputNum(a:any) {
    var input = a.target.value
    if ( num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0)
  }

  function porcentagem() {
    setNum(num / 100)
  }

  function funcao(a:any) {
    var funcaoInput = a.target.value
    setOperador(funcaoInput);
    setNum2(num);
    setNum(0);
  }

  function calcular() {

    if ( operador === "/") {
      setNum ( Number(num2) / Number(num) )
    } else if ( operador === "+") {
      setNum ( Number(num2) + Number(num) )
    } else if ( operador === "-") {
      setNum ( Number(num2) - Number(num) )
    } else if ( operador === "*") {
      setNum ( Number(num2) * Number(num) )
    } 
  }

    return(
      <div>
          <main>
            <p id='resultado'>{num}</p>
            <table>
              <tr>
                <td><button onClick={clear}>c</button></td>
                <td><button onClick={porcentagem}>%</button></td>
                <td><button onClick={funcao} value={"*"}>*</button></td>
                <td><button onClick={funcao} value={"-"}>-</button></td>
              </tr>
              <tr>
                <td><button onClick={inputNum} value={7}>7</button></td>
                <td><button onClick={inputNum} value={8}>8</button></td>
                <td><button onClick={inputNum} value={9}>9</button></td>
                <td><button onClick={funcao} value={"+"}>+</button></td>
              </tr>
              <tr>
                <td><button onClick={inputNum} value={4}>4</button></td>
                <td><button onClick={inputNum} value={5}>5</button></td>
                <td><button onClick={inputNum} value={6}>6</button></td>
                <td><button onClick={funcao} value={"/"}>/</button></td>
              </tr>
              <tr>
                <td><button  onClick={inputNum} value={1}>1</button></td>
                <td><button  onClick={inputNum} value={2}>2</button></td>
                <td><button  onClick={inputNum} value={3}>3</button></td>
                <td rowSpan={2}><button className='igual' onClick={calcular}>=</button></td>
              </tr>
              <tr>
                <td colSpan={2}><button className='zero' onClick={inputNum} value={0}>0</button></td>
                <td><button onClick={inputNum} value={"."}>.</button></td>
              </tr>
            </table>
          </main>
      </div>  
    );
}