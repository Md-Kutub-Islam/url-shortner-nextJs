import Url, { IUrl } from "@/model/db";
import connectDB from "@/config/db";

export default class Urlrepository {
  private urlModel;
  constructor() {
    connectDB();
    this.urlModel = Url;
  }

  async getUrlById(id: string): Promise<IUrl | null> {
    return await this.urlModel.findById(id).lean();
  }

  async geturlByShortUrl(shortUrl: string): Promise<IUrl | null> {
    return await this.urlModel.findOne({ shortUrl }).lean();
  }

  async geturlByOrignalUrl(originalUrl: string): Promise<IUrl | null> {
    return await this.urlModel.findOne({ originalUrl }).lean();
  }

  async getAllUrls(): Promise<IUrl | null> {
    return await this.urlModel.find({}).lean();
  }

  async deleteUrl(id: string): Promise<IUrl | null> {
    return await this.urlModel.findByIdAndDelete(id).lean();
  }

  async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl | null> {
    return await this.urlModel.create({ shortUrl, originalUrl });
  }
}
