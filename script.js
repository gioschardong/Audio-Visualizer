document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.querySelector("canvas");
    let audio = document.getElementById("audioPlayer");

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    let wave = new Wave(audio, canvas);

    wave.addAnimation(
        new wave.animations.Circles({
            fillColor: "#3287c1",
            lineWidth: 3,
            diameter: 450,
            count: 20,
            frequencyBand: "base",
        })
    );

    wave.addAnimation(
        new wave.animations.Arcs({
            lineWidth: 4,
            lineColor: { gradient: ["#21D4FD", "#B721FF"] },
            diameter: 700,
            fillColor: { gradient: ["#21D4FD", "#21D4FD", "#B721FF"], rotate: 45 },
        })
    );
});

function toggleAudio() {
    let audio = document.getElementById("audioPlayer");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
