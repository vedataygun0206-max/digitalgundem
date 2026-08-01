export default {
  async fetch(request) {
    const rss = "https://www.trthaber.com/sondakika_articles.rss";

    const response = await fetch(
      "https://api.allorigins.win/raw?url=" + encodeURIComponent(rss)
    );

    return new Response(await response.text(), {
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
