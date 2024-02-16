import { Botton } from "./Botton";

function Ficha({ val }) {
  return (
    <>
      <li key={val.id}>{val.name}</li>
      <Botton></Botton>
    </>
  );
}

export default Ficha;
