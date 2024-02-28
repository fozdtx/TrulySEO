document.getElementById('seoForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var siteTitle = document.getElementById('siteTitle').value;
      var siteDescription = document.getElementById('siteDescription').value;
      var author = document.getElementById('author').value;
      var keywords = document.getElementById('keywords').value;
      var language = document.getElementById('language').value;
      var robots = document.getElementById('robots').value;
      var revisitAfter = document.getElementById('revisitAfter').value;
      var sitemap = document.getElementById('sitemap').value;
      var geoRegion = document.getElementById('geoRegion').value;
      var geoPosition = document.getElementById('geoPosition').value;
      var geoPlacename = document.getElementById('geoPlacename').value;
      var geoICBM = document.getElementById('geoICBM').value;
      var rating = document.getElementById('rating').value;
      var distribution = document.getElementById('distribution').value;
      var category = document.getElementById('category').value;
      var audience = document.getElementById('audience').value;
      var targetCountry = document.getElementById('targetCountry').value;
      var ogTitle = document.getElementById('ogTitle').value;
      var ogDescription = document.getElementById('ogDescription').value;
      var ogImage = document.getElementById('ogImage').value;
      var twitterTitle = document.getElementById('twitterTitle').value;
      var twitterDescription = document.getElementById('twitterDescription').value;
      var twitterImage = document.getElementById('twitterImage').value;

      var seoOutput = document.getElementById('seoOutput');
      seoOutput.innerHTML = `
    <p><strong>Title:</strong> ${siteTitle}</p>
    <p><strong>Description:</strong> ${siteDescription}</p>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>Keywords:</strong> ${keywords}</p>
    <p><strong>Language:</strong> ${language}</p>
    <p><strong>Robots:</strong> ${robots}</p>
    <p><strong>Revisit After:</strong>${revisitAfter}</p>
    <p><strong>Sitemap URL:</strong> ${sitemap}</p>
    <p><strong>Geographic Region:</strong> ${geoRegion}</p>
    <p><strong>Geographic Position:</strong> ${geoPosition}</p>
    <p><strong>Geographic Placename:</strong> ${geoPlacename}</p>
    <p><strong>Geographic ICBM:</strong> ${geoICBM}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    <p><strong>Distribution:</strong> ${distribution}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Audience:</strong> ${audience}</p>
    <p><strong>Target Country:</strong> ${targetCountry}</p>
    <p><strong>Open Graph Title:</strong> ${ogTitle}</p>
    <p><strong>Open Graph Description:</strong> ${ogDescription}</p>
    <p><strong>Open Graph Image URL:</strong> ${ogImage}</p>
    <p><strong>Twitter Title:</strong> ${twitterTitle}</p>
    <p><strong>Twitter Description:</strong> ${twitterDescription}</p>
    <p><strong>Twitter Image URL:</strong> ${twitterImage}</p>
    <!-- Add more SEO tags here as needed -->
  `;
  
  var metaTags = `<meta name="title" content="${siteTitle}">
                  <meta name="description" content="${siteDescription}">
                  <meta name="author" content="${author}">
                  <meta name="keywords" content="${keywords}">
                  <meta name="language" content="${language}">
                  <meta name="robots" content="${robots}">
                  <meta name="revisit-after" content="${revisitAfter}">
                  <meta name="sitemap" content="${sitemap}">
                  <meta name="geo.region" content="${geoRegion}">
                  <meta name="geo.position" content="${geoPosition}">
                  <meta name="geo.placename" content="${geoPlacename}">
                  <meta name="geo.icbm" content="${geoICBM}">
                  <meta name="rating" content="${rating}">
                  <meta name="distribution" content="${distribution}">
                  <meta name="category" content="${category}">
                  <meta name="audience" content="${audience}">
                  <meta name="targetCountry" content="${targetCountry}">
                  <meta property="og:title" content="${ogTitle}">
                  <meta property="og:description" content="${ogDescription}">
                  <meta property="og:image" content="${ogImage}">
                  <meta name="twitter:title" content="${twitterTitle}">
                  <meta name="twitter:description" content="${twitterDescription}">
                  <meta name="twitter:image" content="${twitterImage}">`;

  var metaTagsTextarea = document.getElementById('metaTagsTextarea');
  metaTagsTextarea.value = metaTags;
});

// Add event listener to copy meta tags button
document.getElementById('copyMetaTagsButton').addEventListener('click', function() {
  var metaTagsTextarea = document.getElementById('metaTagsTextarea');
  metaTagsTextarea.select();
  document.execCommand('copy');
});