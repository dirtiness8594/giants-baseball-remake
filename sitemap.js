import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({ hostname: "https://www.seusite.com" });

const writeStream = createWriteStream("./public/sitemap.xml");

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/page/historia", changefreq: "yearly", priority: 0.8 },
];

(async () => {
  for (const link of links) {
    sitemap.write(link);
  }

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  writeStream.write(xml.toString());
  writeStream.end();

  console.log("✅ Sitemap gerado com sucesso!");
})();
