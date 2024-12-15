async function fetchUrls() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`, {
    cache: "force-cache",
  });
  if (!response.ok) throw new Error("failed to getch urls");
  return response.json();
}

export default async function UrlList() {
  let urls;

  try {
    urls = await fetchUrls();
    console.log("urls:", urls.urls);
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-full w-full">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Error
          </h1>
          <p className="text-center text-red-500">failed to load urls</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          All Short urls
        </h1>

        <div className="overflow-x-auto">
          <thead className="table table-zebra w-full">
            <thead>
              <tr>
                <th>OriginalURL</th>
              </tr>
            </thead>
            <th>Short URl</th>
          </thead>

          <tbody>
            {urls &&
              urls.urls.map(
                (url: {
                  id: string;
                  originalUrl: string;
                  shortUrl: string;
                }) => {
                  return (
                    <tr>
                      <td>{url.originalUrl}</td>
                      <td>
                        <a
                          href={`/${url.shortUrl}`}
                          target="_blank"
                          className="linl link-primary"
                        >
                          {`${process.env.NEXT_PUBLIC_BASE_URL}`}
                        </a>
                        <span>{url.shortUrl}</span>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </div>
      </div>
    </div>
  );
}
