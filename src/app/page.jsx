"use client";

import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();

  const goAbout = () => {
    /* con replace hago que no le permite volver a la ruta anterior */
    router.replace(`/about?money=1000`);
  };

  return (
    <>
      <div>Pagina principal</div>
      <button onClick={goAbout}>Ir a about</button>
    </>
  );
}

export default HomePage;
