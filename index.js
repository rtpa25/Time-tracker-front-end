function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

const links = document.querySelectorAll("a");
let dailyWork = document.querySelectorAll(".data-hours")[0];
let prevWork = document.querySelectorAll(".data-last")[0];
let dailyPlay = document.querySelectorAll(".data-hours")[1];
let prevPlay = document.querySelectorAll(".data-last")[1];
let dailyStudy = document.querySelectorAll(".data-hours")[2];
let prevStudy = document.querySelectorAll(".data-last")[2];
let dailyExercise = document.querySelectorAll(".data-hours")[3];
let prevExercise = document.querySelectorAll(".data-last")[3];
let dailySocial = document.querySelectorAll(".data-hours")[4];
let prevSocial = document.querySelectorAll(".data-last")[4];
let dailySelfCare = document.querySelectorAll(".data-hours")[5];
let prevSelfCare = document.querySelectorAll(".data-last")[5];

//usage:

links[0].addEventListener("click", function() {
    readTextFile("./data.json", function(text) {
        var data = JSON.parse(text);
        dailyWork.textContent = data[0].timeframes.daily.current + "hrs";
        prevWork.textContent =
            "Yesterday -" + " " + data[0].timeframes.daily.previous + "hrs";
        dailyPlay.textContent = data[1].timeframes.daily.current + "hrs";
        prevPlay.textContent =
            "Yesterday -" + " " + data[1].timeframes.daily.previous + "hrs";
        dailyStudy.textContent = data[2].timeframes.daily.current + "hrs";
        prevStudy.textContent =
            "Yesterday -" + " " + data[2].timeframes.daily.previous + "hrs";
        dailyExercise.textContent = data[3].timeframes.daily.current + "hrs";
        prevExercise.textContent =
            "Yesterday -" + " " + data[3].timeframes.daily.previous + "hrs";
        dailySocial.textContent = data[4].timeframes.daily.current + "hrs";
        prevSocial.textContent =
            "Yesterday -" + " " + data[4].timeframes.daily.previous + "hrs";
        dailySelfCare.textContent = data[5].timeframes.daily.current + "hrs";
        prevSelfCare.textContent =
            "Yesterday -" + " " + data[5].timeframes.daily.previous + "hrs";
    });
});

links[1].addEventListener("click", function() {
    readTextFile("./data.json", function(text) {
        var data = JSON.parse(text);
        dailyWork.textContent = data[0].timeframes.weekly.current + "hrs";
        prevWork.textContent =
            "Last Week -" + " " + data[0].timeframes.weekly.previous + "hrs";
        dailyPlay.textContent = data[1].timeframes.weekly.current + "hrs";
        prevPlay.textContent =
            "Last Week -" + " " + data[1].timeframes.weekly.previous + "hrs";
        dailyStudy.textContent = data[2].timeframes.weekly.current + "hrs";
        prevStudy.textContent =
            "Last Week -" + " " + data[2].timeframes.weekly.previous + "hrs";
        dailyExercise.textContent = data[3].timeframes.weekly.current + "hrs";
        prevExercise.textContent =
            "Last Week -" + " " + data[3].timeframes.weekly.previous + "hrs";
        dailySocial.textContent = data[4].timeframes.weekly.current + "hrs";
        prevSocial.textContent =
            "Last Week -" + " " + data[4].timeframes.weekly.previous + "hrs";
        dailySelfCare.textContent = data[5].timeframes.weekly.current + "hrs";
        prevSelfCare.textContent =
            "Last Week -" + " " + data[5].timeframes.weekly.previous + "hrs";
    });
});

links[2].addEventListener("click", function() {
    readTextFile("./data.json", function(text) {
        var data = JSON.parse(text);
        dailyWork.textContent = data[0].timeframes.monthly.current + "hrs";
        prevWork.textContent =
            "Last Month -" + " " + data[0].timeframes.monthly.previous + "hrs";
        dailyPlay.textContent = data[1].timeframes.monthly.current + "hrs";
        prevPlay.textContent =
            "Last Month -" + " " + data[1].timeframes.monthly.previous + "hrs";
        dailyStudy.textContent = data[2].timeframes.monthly.current + "hrs";
        prevStudy.textContent =
            "Last Month -" + " " + data[2].timeframes.monthly.previous + "hrs";
        dailyExercise.textContent = data[3].timeframes.monthly.current + "hrs";
        prevExercise.textContent =
            "Last Month -" + " " + data[3].timeframes.monthly.previous + "hrs";
        dailySocial.textContent = data[4].timeframes.monthly.current + "hrs";
        prevSocial.textContent =
            "Last Month -" + " " + data[4].timeframes.monthly.previous + "hrs";
        dailySelfCare.textContent = data[5].timeframes.monthly.current + "hrs";
        prevSelfCare.textContent =
            "Last Month -" + " " + data[5].timeframes.monthly.previous + "hrs";
    });
});