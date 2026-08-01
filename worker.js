export default {
  async fetch(request) {
    const rssUrl = "https://www.trthaber.com/sondakika_articles.rss";

    try {
      const response = await fetch(rssUrl, {
        headers: {
          "User-Agent": "DigitalGundem RSS Reader"
        }
      });

      if (!response.ok) {
        return new Response("RSS alınamadı", { status: 500 });
      }

      const xml = await response.text();

      return new Response(xml, {
        headers: {
          "Content-Type": "application/xml; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=300"
        }
      });

    } catch (err) {
      return new Response("Hata: " + err.message, { status: 500 });
    }
  }
}
