"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {
  const [cnt, setCnt] = useState(0)
  const [result, setResult] = useState('');
  const [no, setNo] = useState('')
  const handleClick = () => {
    setCnt(cnt + 1)
  }
  const fnChange = (eve) => {
    setNo(eve.target.value)
  }
  const fnCheckPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  const fnClick = () => {
    const isPrime = fnCheckPrime(no);
    setResult(isPrime ? 'Prime' : 'Not Prime')
  }
  return <div>
    <h1>{cnt}</h1>
    <button onClick={handleClick} >click</button>
    <p>
      <b>No: </b><input type="number" onChange={fnChange} />
    </p>
    <p>
      <button onClick={fnClick}>Check Prime</button>
    </p>
    <h1>{result}</h1>
  </div>
}
