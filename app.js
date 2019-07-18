
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
//Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500 to 1799
var filterLiveButton = document.getElementById("filterLive")
filterLiveButton.addEventListener("click", filterLive)
function filterLive() {
    const fifteen = inventors.filter((inventor) => {
        mix = document.querySelector(".mix")
        mix.innerHTML = ""
        if (inventor.year >= 1500 && inventor.year <= 1799) {
            return true
        }
    })
    console.table(fifteen)
    for (var i = 0; i < fifteen.length; i++) {
        var div = document.createElement("div")
        div.innerHTML = fifteen[i].first  +" "+ fifteen[i].last +" "+ fifteen[i].year + "-" + fifteen[i].passed
        mix.appendChild(div)
    }
}


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => {
    return inventor.first + inventor.last
})

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var sortNames = document.getElementById("sort")
sortNames.addEventListener("click", sortOf)
function sortOf() {
    const ordered = inventors.sort((a, b) => {
        mix = document.querySelector(".mix")
        mix.innerHTML = ""
        if (a.year > b.year) {
            return 1
        } else {
            return -1
        }
    })
    console.table(ordered)
    for (var i = 0; i < ordered.length; i++) {
        var div = document.createElement("div")
        div.innerHTML = ordered[i].first +" "+ ordered[i].last + " " + ordered[i].year
        mix.appendChild(div)
    }
}
//     const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
// 5. Sort the inventors by years lived
var longest = document.getElementById("longest")
longest.addEventListener("click", showLongest)
function showLongest() {
    const oldest = inventors.sort((a, b) => {
        mix = document.querySelector(".mix")
        mix.innerHTML = ""
        if (a.passed - a.year < b.passed - b.year) {
            return 1;
        } else {
            return -1
        }
    })
    console.table(oldest)
    for (var i = 0; i < inventors.length; i++) {
        var div = document.createElement("div")
        div.innerHTML = oldest[i].first +" "+ oldest[i].last +" "+ (oldest[i].passed-oldest[i].year) +" "+ "years old when passed"
        mix.appendChild(div)
    }
}
// 6. create a list that contain 'er' anywhere in the name
var filterErButton = document.getElementById("filter")
filterErButton.addEventListener("click", filterEr)
function filterEr() {
    const category = document.querySelector(".names")
    const single = [...category.querySelectorAll("div")]
    const er = single.map(link => {
        mix = document.querySelector(".mix")
        mix.innerHTML = ""
        return link.textContent
    }).filter(name => name.includes("er"))
    console.table(er)
    for (var i = 0; i < er.length; i++) {
        var div = document.createElement("div")
        div.innerHTML = er[i].slice(0, -11)
        console.log(er[i])
        mix.appendChild(div)
    }
}