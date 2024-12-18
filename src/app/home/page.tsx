import Link from "next/link";
import { shortenrUrl } from "../serverAction/ShortenUrlAction";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
            URL SHORTY
          </h1>

          <form action={shortenrUrl} className="space-y-6">
            <input
              type="text"
              placeholder="Enter URL"
              name="OriginalUrl"
              className="input input-bordered w-full"
            />

            <button className="btn btn-primary w-full">Shorten</button>
          </form>

          <div className="mt-6 text-center">
            <Link href={"/urls"}>
              <span className="btn btn-primary w-full">
                View All Shortened URLS
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
