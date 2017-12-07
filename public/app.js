var makeRequest = function(url, callback) {
    // create new XHR
    var request = new XMLHttpRequest();
    // open the request, passing in the HTTP request type, and the URL
    request.open("GET", url);
    // write an event listener for the request
    request.addEventListener("load", callback);
    // Go!
    request.send();
};
var requestComplete = function() {
    
      if (this.status !== 200) return;
      // get the data needed as a string
      var jsonString = this.responseText;
      // parse to convert it to JS object
      var countries = JSON.parse(jsonString);

      pieCountries(countries);
    };

var app = function() {
    var url = "https://restcountries.eu/rest/v2/all";
    makeRequest(url, requestComplete);

    var barContainer = document.querySelector("#bar-chart");
    var barTitle = "G3's Favourite Science Fiction Franchises";
    var barCategories = ["Star Wars", "Star Trek", "Battlestar Galactica", "I Hate Nerds"];
    var barSeries = [
        {name: "G3", data: [8, 2, 3, 3], color: "red"},
        {name: "G2", data: [3, 7, 3, 3], color: "blue"}
    ];

    var pieContainer = document.querySelector("#pie-chart");
    var pieTitle = "G3's favourite programming language";
    var pieSeries = "Programming Languages";
    var pieData = [
        {name: "Ruby", y: 1, color: "red"},
        {name: "Java", y: 9, color: "saddleBrown"},
        {name: "JavaScript", y: 6, color: "gold", sliced: "true"},
        {name: "I hate programming", y: 2, color: "black"}
    ];

    new BarChart(barContainer, barTitle, barCategories, barSeries);
    new PieChart(pieContainer, pieTitle, pieSeries, pieData);
};

var pieCountries = function(countries) {
    countryData = [];
    for (country of countries) {
        countryData.push({name: country.name, y: country.population});
    };
debugger;
    var countryContainer = document.querySelector("#country-pie");
    var countryTitle = "World Population by Country";
    var countrySeries = "Country";
    var pieData = countryData;

    new PieChart(countryContainer, countryTitle, countrySeries, pieData);
};




window.addEventListener("load", app);