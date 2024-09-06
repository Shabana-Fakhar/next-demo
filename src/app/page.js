import Image from "next/image";
import styles from "./page.module.css";
var data=["orange","Mango","Banana","strawberry","Apple"]
export default function Home() {
  return (
    <>
      <ul>
    {data.map((fruit)=> (
      <li key={fruit}>{fruit}</li>))}
      </ul>
    </>
    
  ); 
}
