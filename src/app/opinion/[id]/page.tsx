import { notFound } from "next/navigation";
import { opinions } from "@/data/opinions";
import OpinionDetailClient from "./OpinionDetailClient";

export function generateStaticParams() {
  return opinions.map((opinion) => ({
    id: opinion.id,
  }));
}

export default async function OpinionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opinion = opinions.find((o) => o.id === id);

  if (!opinion) {
    notFound();
  }

  return <OpinionDetailClient opinion={opinion} />;
}