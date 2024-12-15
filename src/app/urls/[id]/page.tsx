import { UrlShortnerService } from "@/services/UrlShhortnerServices";
import { redirect } from "next/navigation";

async function fetchOriginalUrls(url: string) {
  const urlService = new UrlShortnerService();
  const response = await urlService.getUrlByShortUrl(url);
  return response;
}

export default async function urlRedirect({
  params,
}: {
  params: { id: string };
}) {
  console.log("params.id:", params.id);
  const original = await fetchOriginalUrls(`urls/${params.id}`);
  if (original) redirect(original);
  redirect("/404");
  return null;
}
