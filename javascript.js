// このファイルにJavaScriptを書いていくよ
// コメント(メモ)をこんな感じで書くことができるよ

// 読み込めたか確認しよう

console.log("JavaScript読み込めた")

//＄ジェイクエリオを使うよ
//クリックされたらファンクション呼び出し

$("#button01").on('click', function () {
    alert("Hellow worlssssd");
});


$("#js-hajimari-btn").click(function () {
    alert("Hello from click btn");
    console.log("Js - hajimari - btm")
});



$("#js-discount-btn").click(function () {
    console.log("Js - hajimari - btm")
    let people = $("#js-people").val();
    let num = 0;
    //console.log("people" + people)
    if (people.includes(".")) {
        $("#js-show-discount").text("整数を入れてください");
    } else if (people == 0) {
        $("#js-show-discount").text("人数を入れてください");
    } else if (people < 2) {
        $("#js-show-discount").text("割引は3人以上でないと有効ではありません");
    } else if (people >= 10) {
        //10人以上のとき
        num = 50 * people;
        $("#js-show-discount").text(num.toLocaleString() + "円");
    } else {
        num = 30 * people;
        $("#js-show-discount").text(num.toLocaleString() + "円");
    }
});

$("#js-discount-day-btn").click(function () {
    console.log("Js - hajimari - day - btm")
    let day = $("#js-day").val();
    let num = 0;
    //console.log("people" + people)
    if (day.includes(".")) {
        $("#js-show-discount-day").text("整数を入れてください");
    } else if (day == 0) {
        $("#js-show-discount-day").text("日数を入れてください");
    } else {
        num = 10 * day;
        $("#js-show-discount-day").text(num.toLocaleString() + "円");
    }
});