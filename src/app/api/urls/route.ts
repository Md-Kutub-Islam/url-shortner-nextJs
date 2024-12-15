import { UrlShortnerService } from "@/services/UrlShhortnerServices";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchUrls = cache(async () => {
  const shortnerService = new UrlShortnerService();
  const response = await shortnerService.getAllUrls();
  return response;
});

export async function GET() {
  const urls = await fetchUrls();
  const response = NextResponse.json({ urls });
  console.log("response:");
  response.headers.set(
    "Cache-Control",
    "public, max-age=6, s-maxage=6, stale-while-revalidate=59"
  );
  return response;
}
