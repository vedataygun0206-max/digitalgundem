export async function onRequestGet() {
  const rssUrl = "https://www.trthaber.com/sondakika_articles.rss";

  try {
    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "DigitalGundem/1.0"
      }
    });

    if (!response.ok) {
      return new Response("RSS alınamadı.", {
        status: response.status
      });
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
    return new Response("RSS servisi hatası.", {
      status: 500
    });
  }
}
