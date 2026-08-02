export async function onRequestGet() {
  const rssUrl = "https://www.trthaber.com/sondakika_articles.rss";

  try {
    const response = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.trthaber.com/sondakika_articles.rss"));
    const xml = await response.text();

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=UTF-8"
      }
    });
  } catch {
    return new Response("RSS alınamadı.", {
      status: 500
    });
  }
}
