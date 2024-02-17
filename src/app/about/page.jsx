"use client";

import { useSearchParams } from "next/navigation";

function AboutPage() {
  const router = useSearchParams();
  const money = router.get("money");
  console.log(money);
  return <div>AboutPage</div>;
}

export default AboutPage;
