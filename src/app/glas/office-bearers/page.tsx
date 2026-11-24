"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfficeBearersRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/glas/committee");
  }, [router]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-accent">
      <p className="text-sm font-medium text-text-light">
        Redirecting to Committee…
      </p>
    </section>
  );
}
