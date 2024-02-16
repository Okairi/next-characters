import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/quienesSomos"}>Quienes somos</Link>
      <Link href={"/personas"}>Personas</Link>
    </nav>
  );
};
