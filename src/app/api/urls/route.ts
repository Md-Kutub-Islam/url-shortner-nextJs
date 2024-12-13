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
  return NextResponse.json({ urls }, { status: 200 });
}
