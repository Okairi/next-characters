"use client";

import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();

  const goAbout = () => {
    router.push("/about");
  };

  return (
    <>
      <div>Pagina principal</div>
      <button onClick={goAbout}>Ir a about</button>
      {/*       <div className="caja">
        <Image src={"/dog.png"} width={"2226"} height={"540"}></Image>
      </div> */}
      {/*    <div className="caja2">
        <Image src={Dog}></Image>
      </div>
      <div className="caja3">
        <Image
          src={
            "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
          }
          width={150}
          height={150}
        ></Image>
      </div> */}
    </>
  );
}

export default HomePage;
