const eyes = document.querySelectorAll(".eyes");
const mouths = document.querySelectorAll(".mouth");
const blushes = document.querySelectorAll(".blush");
const glasses = document.querySelectorAll(".glasses");
const extras = document.querySelectorAll(".extra");

const eyesCombobox = document.getElementById("eyesCombobox");
const mouthCombobox = document.getElementById("mouthCombobox");
const blushCombobox = document.getElementById("blushCombobox");
const glassesCombobox = document.getElementById("glassesCombobox");

const angwyCheckbox = document.getElementById("angwyCheckbox");
const kiraCheckbox = document.getElementById("kiraCheckbox");
const sweatCheckbox = document.getElementById("sweatCheckbox");
// const salivatingCheckbox = document.getElementById("salivatingCheckbox");

eyes.forEach(e => {
    let opt = document.createElement("option");
    opt.value = e.id;
    opt.innerHTML = e.id.replace("Uruka_600x600_", "").replace("_", " ");
    eyesCombobox.appendChild(opt);
});

mouths.forEach(e => {
    let opt = document.createElement("option");
    opt.value = e.id;
    opt.innerHTML = e.id.replace("Uruka_600x600_", "").replace("_", " ");
    mouthCombobox.appendChild(opt);
});

blushes.forEach(e => {
    let opt = document.createElement("option");
    opt.value = e.id;
    opt.innerHTML = e.id.replace("Uruka_600x600_", "").replace("_", " ");
    blushCombobox.appendChild(opt);
});

glasses.forEach(e => {
    let opt = document.createElement("option");
    opt.value = e.id;
    opt.innerHTML = e.id.replace("Uruka_600x600_", "").replace("_", " ");
    glassesCombobox.appendChild(opt);
});

eyesCombobox.addEventListener('change', function(event) {
    let eye = document.getElementById(this.value);
    eyes.forEach(e => {
        if(e.classList.contains("shown")){
            e.classList.remove("shown");
            e.classList.add("hidden");
        }
    });
    if(this.value !== "none"){
        eye.classList.remove("hidden");
        eye.classList.add("shown");
    }
});

mouthCombobox.addEventListener('change', function(event) {
    let mouth = document.getElementById(this.value);
    mouths.forEach(e => {
        if(e.classList.contains("shown")){
            e.classList.remove("shown");
            e.classList.add("hidden");
        }
    });
    if(this.value !== "none"){
        mouth.classList.remove("hidden");
        mouth.classList.add("shown");
    }
});

blushCombobox.addEventListener('change', function(event) {
    let blush = document.getElementById(this.value);
    blushes.forEach(e => {
        if(e.classList.contains("shown")){
            e.classList.remove("shown");
            e.classList.add("hidden");
        }
    });
    if(this.value !== "none"){
        blush.classList.remove("hidden");
        blush.classList.add("shown");
    }
});

glassesCombobox.addEventListener('change', function(event) {
    let g = document.getElementById(this.value);
    glasses.forEach(e => {
        if(e.classList.contains("shown")){
            e.classList.remove("shown");
            e.classList.add("hidden");
        }
    });
    if(this.value !== "none"){
        g.classList.remove("hidden");
        g.classList.add("shown");
    }
});

angwyCheckbox.addEventListener('change', function(event) {
    let angwy = document.getElementById("Uruka_600x600_Angwy");
    if(this.checked){
        angwy.classList.remove("hidden");
        angwy.classList.add("shown");
    } else {
        angwy.classList.remove("shown");
        angwy.classList.add("hidden");
    }
});

kiraCheckbox.addEventListener('change', function(event) {
    let kira = document.getElementById("Uruka_600x600_Kira");
    if(this.checked){
        kira.classList.remove("hidden");
        kira.classList.add("shown");
    } else {
        kira.classList.remove("shown");
        kira.classList.add("hidden");
    }
});

sweatCheckbox.addEventListener('change', function(event) {
    let sweat = document.getElementById("Uruka_600x600_Sweat");
    if(this.checked){
        sweat.classList.remove("hidden");
        sweat.classList.add("shown");
    } else {
        sweat.classList.remove("shown");
        sweat.classList.add("hidden");
    }
});

// salivatingCheckbox.addEventListener('change', function(event) {
//     let salivating = document.getElementById("Uruka_600x600_Salivating");
//     if(this.checked){
//         salivating.classList.remove("hidden");
//         salivating.classList.add("shown");
//     } else {
//         salivating.classList.remove("shown");
//         salivating.classList.add("hidden");
//     }
// });

const bckgrdPic = document.getElementById("backgroundPic");
const bckInput = document.getElementById("bckgrdInput");

bckInput.addEventListener('change', function(event) {
    convertToBase64(event);
});

function convertToBase64(event) {
    var input = event.target;

    if(input.files[0] instanceof Blob){
        this.encodePicAsURL(input.files[0]).then(result => {
            // var img = new Image();
            // img.src = result.replace(/(\r\n|\n|\r)/gm, "");
            // bckgrdPic.style.backgroundImage = "url('" + img.src + "')";
            bckgrdPic.src = result;
        });
    } else {
        // var img = new Image();
        // img.src = "images/transparent.png";
        // bckgrdPic.style.backgroundImage = "url('" + img.src + "')";
        bckgrdPic.src = "images/transparent.png";
    }


}

function encodePicAsURL(image) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject();
        }
        reader.readAsDataURL(image);
    });
}

function clearBackground() {
    bckgrdPic.src = "images/transparent.png";
    bckInput.value = null;
}


function capture() {
    const captureElement = document.querySelector('#capture')
    html2canvas(captureElement)
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}
