import { UrlShortnerService } from "@/services/UrlShhortnerServices";
import { revalidatePath } from "next/cache";

export const shortenrUrl = async (formData: FormData) => {
  "use server";
  const originalUrl: string = formData.get("OriginalUrl");
  console.log("origial:", originalUrl);

  const shortenService = new UrlShortnerService();
  const shortUrl = await shortenService.shortenrUrl(originalUrl);
  revalidatePath("/urls");
};
