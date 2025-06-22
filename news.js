fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://feeds.bbci.co.uk/news/rss.xml"))
  .then(response => response.json())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");
    let html = "<strong>Top News:</strong><br>";

    for (let i = 0; i < 5; i++) {
      const title = items[i].querySelector("title").textContent;
      const link = items[i].querySelector("link").textContent;
      html += `<a href="${link}" target="_blank">${title}</a><br>`;
    }

    document.getElementById("news").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("news").innerText = "Failed to load news.";
  });


