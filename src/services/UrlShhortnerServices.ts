import Urlrepository from "@/repositories/UrlRepository";
import shortId from "shortid";

export class UrlShortnerService {
  private urlRepository;
  constructor() {
    this.urlRepository = new Urlrepository();
  }

  async shortenrUrl(originalUrl?: string): Promise<string> {
    if (!originalUrl) return "";

    let url = await this.urlRepository.geturlByOrignalUrl(originalUrl);

    if (url) {
      return url.shortUrl;
    }

    let shortUrl = shortId();
    url = await this.urlRepository.geturlByShortUrl(shortUrl);
    while (url) {
      shortUrl = shortId();
      url = await this.urlRepository.geturlByShortUrl(shortUrl);
    }

    await this.urlRepository.createUrl(originalUrl, `urls/${shortUrl}`);
    return shortUrl;
  }

  async getAllUrls() {
    return await this.urlRepository.getAllUrls();
  }

  async getUrlByShortUrl(shortUrl: string) {
    return await this.urlRepository.geturlByShortUrl(shortUrl);
  }
}
