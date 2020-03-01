console.log("News Website");

// API KEY - 349d85d03f0d4fdfb933112f05d1db51
let newsAccordion = document.getElementById("newsaccordion");

// Creating an AJAX GET request.

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=349d85d03f0d4fdfb933112f05d1db51",
  true
);

xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newshtml = "";
    for (key in articles) {
      let news = `<div class="card">
                          <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                              <button
                                class="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                ${articles[key].title}
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOne"
                            class="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                             ${articles[key].content}
                             <a href = "${articles[key].url}" target ="_blank" > Read more here.</a>
                            </div>
                          </div>
                        </div>`;
      newshtml += news;
    }
    newsAccordion.innerHTML = newshtml;
  } else {
    console.log("Error Occured");
  }
};
xhr.send();
