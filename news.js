
(async () => {
  const newsDiv = document.getElementById("news");

  try {
    // Step 1: Fetch CNN Lite homepage
    const response = await fetch("https://lite.cnn.com/");
    const html = await response.text();

    // Step 2: Parse homepage and get story links
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = Array.from(doc.querySelectorAll("ul li a"));

    if (links.length === 0) {
      newsDiv.textContent = "No news found.";
      return;
    }

    // Step 3: Pick a random story
    const randomLink = links[Math.floor(Math.random() * links.length)];
    const title = randomLink.textContent.trim();
    const href = randomLink.getAttribute("href");
    const fullUrl = href.startsWith("http") ? href : https://lite.cnn.com${href};

    // Step 4: Fetch article content
    const articleRes = await fetch(fullUrl);
    const articleHtml = await articleRes.text();
    const articleDoc = parser.parseFromString(articleHtml, "text/html");

    // Step 5: Get article snippet (first paragraph or two)
    const paragraphs = Array.from(articleDoc.querySelectorAll("article p"));
    const snippet = paragraphs.slice(0, 2).map(p => p.textContent.trim()).join(" ");

    // Step 6: Display result
    newsDiv.innerHTML = 
      <strong><a href="${fullUrl}" target="_blank" rel="noopener">${title}</a></strong>
      <p style="margin-top: 0.5em;">${snippet}</p>
    ;
  } catch (err) {
    newsDiv.textContent = "Failed to load news.";
    console.error(err);
  }
})();
