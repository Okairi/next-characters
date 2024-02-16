import Ficha from "../components/Ficha";

export const cargarDatos = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await resp.json();

  console.log("probando", data);
  return data;
};

export async function PersonaPage() {
  const data = await cargarDatos();
  return (
    <>
      <ul className="ml-5 mt-4">
        {data.map((val) => (
          <Ficha val={val}></Ficha>
        ))}
      </ul>
    </>
  );
}

export default PersonaPage;
