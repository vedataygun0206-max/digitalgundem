async function haberleriGetir() {
    try {
        const response = await fetch("/api/rss");
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "application/xml");

        const items = xml.querySelectorAll("item");

        let html = "";

        items.forEach((item, index) => {
            if (index >= 10) return;

            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "#";
            const pubDate = item.querySelector("pubDate")?.textContent || "";

            html += `
                <div class="haber">
                    <h3>${title}</h3>
                    <small>${pubDate}</small><br><br>
                    <a href="${link}" target="_blank">
                        Haberi Oku →
                    </a>
                </div>
            `;
        });

        document.getElementById("haberler").innerHTML = html;

        const sonDakika = [...items]
            .slice(0, 8)
            .map(i => i.querySelector("title")?.textContent)
            .join(" • ");

        document.getElementById("sonDakika").innerText = sonDakika;

    } catch (e) {
        document.getElementById("haberler").innerHTML =
            "<p>Haberler şu anda yüklenemiyor.</p>";
    }
}

haberleriGetir();

setInterval(haberleriGetir, 300000);
