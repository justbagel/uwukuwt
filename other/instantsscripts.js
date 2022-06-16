const colors = ['677cab', '72c6e0', 'f6ad4e', 'af5c54', 'fce9da'];
const buttons = document.querySelectorAll(".instantsButton");
const emotes = ["fujiku3Uoh",
                "mindbreak",
                "nice",
                "shock",
                "Urugah",
                "UrukaCheer",
                "UrukaCursed",
                "UrukaCursedComfy",
                "UrukaCursedGun",
                "UrukaCursedHands",
                "UrukaCursedPolite",
                "UrukaCursedRecorder",
                "UrukaDerp",
                "UrukaFire",
                "UrukaLightstick",
                "UrukaPray",
                "UrukaThisIsFine",
                "UrukaWah-1",
                "woke"]

let id;
buttons.forEach(b => {
    id = Math.floor(Math.random() * colors.length);
    eId = Math.floor(Math.random() * emotes.length);
    b.style.backgroundColor = "#" + colors[id];
    b.style.originalColor = "#" + colors[id];
    b.firstChild.src = "emotes/" + emotes[eId] + ".png";
    b.addEventListener('click', (e) => {
        b.style.backgroundColor = "#37313d";
        setTimeout(() => b.style.backgroundColor = b.style.originalColor, 150);
    }, false);
});