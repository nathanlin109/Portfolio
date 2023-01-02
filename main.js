// On Page Load
window.onload = function () {
    // Landscape
    orientationChange();
    window.addEventListener("orientationchange", orientationChange);
}

//-----------------------HAMBURGER MENUS-------------------
document.querySelector("#hamburgerMenu").addEventListener("click", toggleNav);
let listElems = document.querySelectorAll("li");
for (let i = 0; i < listElems.length; i++) {
    listElems[i].onclick = toggleNav;
}

//-----------------------OPENS MODAL IMAGES-------------------
let modal = document.querySelector('#projectModal');
modal.onclick = clickOut;
let imgIndex = 0;
let imgListSize = 0;

// Time Jumper project
let timeJumper = document.querySelector('#time-jumper');
let timeJumperImg = document.querySelector("#modalImg");
let timeJumperText = document.querySelector("#caption");
timeJumper.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    timeJumperImg.src = this.src;
    document.querySelector("#modalImg2").src = "images/time-jumper/time-jumper-1.png";
    document.querySelector("#modalImg3").src = "images/time-jumper/time-jumper-2.png";
    document.querySelector("#modalImg4").src = "images/time-jumper/time-jumper-3.png";
    document.querySelector("#modalImg5").src = "images/time-jumper/time-jumper-4.png";
    document.querySelector("#modalImg6").src = "images/time-jumper/time-jumper-5.png";
    document.querySelector("#modalImg7").src = "images/time-jumper/time-jumper-6.png";
    document.querySelector("#rightButton").style.display = "inline-block";
    document.querySelector("#leftButton").style.display = "inline-block";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 7;
    showImgs(0);

    // Text
    timeJumperText.innerHTML = "<i>Time Jumper</i> is a 2D auto-runner platformer that a friend and I have developed and published on Steam. " +
        "Created in Unity with C#, <i>Time Jumper</i> is a project that we have been working on asynchronously for 6 months. " +
        "The player will play as a time traveling wizard in <i>Time Jumper</i> and must sharpen both their platforming and time traveling skills " +
        "in order to escape the void that is endlessly chasing the player. Using the ability to switch time, the player will be able to " +
        "make their surroundings disappear, replacing it with a version of it in the distant future or past. Combining this with the various " +
        "platforming abilities, like charge jumping and wall jumping, the player will experience exciting gameplay throughout the various levels we have created. " +
        "For this project, I designed and programmed most of the gameplay mechanics and general interaction, and I also implemented all of the UI, sounds, and art into the game.<br><br><br>" +
        "<span id=\"link\">View code on GitHub: <a href=\"https://github.com/nathanlin109/Time-Jumper\" target=\"_blank\">https://github.com/nathanlin109/Time-Jumper</a></span>" +
        "<span id=\"link\">Steam Store Page: <a href=\"https://store.steampowered.com/app/1555640/Time_Jumper/\" target=\"_blank\">https://store.steampowered.com/app/1555640/Time_Jumper/</a></span>";
}

// Game Engine project
let gameEngine = document.querySelector('#game-engine');
let gameEngineImg = document.querySelector("#modalImg");
let gameEngineText = document.querySelector("#caption");
gameEngine.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    gameEngineImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    rodText.innerHTML = "Custom game engine built using DirectX 11 and Microsoft Visual Studio 2019 in C++ & HLSL. " +
    "Implemented physically based rendering and lighting calculations to emmulate various types of lights. " + 
    "Features post-processing effects (blur & bloom). " +
    "Capable of sampling texture maps to apply albedo, normal, roughness, and metallic information on mesh surfaces. " +
    "Features custom vertex and pixel shaders written in HLSL. Includes a cube map to create a sky box. " +
    "I'm working on this project alone, and I plan on utilizing my game engine to host a game.<br><br><br>" +
    "<span id=\"link\">View code on GitHub: <a href=\"https://github.com/nathanlin109/DX11GameEngine\" target=\"_blank\">https://github.com/nathanlin109/DX11GameEngine</a></span>";
}

// Rod of Asclepius project
let rod = document.querySelector('#rod-of-asclepius');
let rodImg = document.querySelector("#modalImg");
let rodText = document.querySelector("#caption");
rod.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    rodImg.src = this.src;
    document.querySelector("#modalImg2").src = "images/rod/rod-2.png";
    document.querySelector("#modalImg3").src = "images/rod/rod-3.png";
    document.querySelector("#rightButton").style.display = "inline-block";
    document.querySelector("#leftButton").style.display = "inline-block";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 3;
    showImgs(0);

    // Text
    rodText.innerHTML = "<i>Rod of Asclepius</i> is a top-down 3D survival strategy game created in Unity with C#. " +
        "In <i>Rod of Asclepius</i>, the player must collect 3 artifacts in order to resurrect their deceased mother while avoiding a " +
        "vampire and wizard intent on stopping and killing the player. Players will be able to use a trap and various throwable abilities " +
        "to aid in accomplishing their goal and hinder the evil vampire and wizard. However, there's a catch. It's pitch black outside " +
        "and the player only has a flashlight to reveal what lurks in the shadows surrounding the player. " +
        "I worked on this project in a team of 4, and I worked on the majority of the main game design and core gameplay mechanics.<br><br><br>" +
        "<span id=\"link\">View code on GitHub: <a href=\"https://github.com/nathanlin109/Rod-of-Asclepius\" target=\"_blank\">https://github.com/nathanlin109/Rod-of-Asclepius</a></span>" +
        "<span id=\"link\">Windows Download: <a href=\"https://media.githubusercontent.com/media/nathanlin109/portfolio/main/builds/ROE Windows.zip\">Rod of Asclepius Windows.zip</a></span>" +
        "<span id=\"link\">Mac Download: <a href=\"https://media.githubusercontent.com/media/nathanlin109/portfolio/main/builds/ROE Mac.zip\">Rod of Asclepius Mac.zip</a></span>";
}

// Talisman Forger project
let talisman = document.querySelector('#talisman-forger');
let talismanImg = document.querySelector("#modalImg");
let talismanText = document.querySelector("#caption");
talisman.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    talismanImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    talismanText.innerHTML = "<i>Talisman Forger</i> is a puzzle game created in Unity with C#. " +
        "In <i>Talisman Forger</i>, players will complete randomly generated puzzles that will get progressively harder as the levels increase. " +
        "I worked on this project with 3 other people, and I worked on the majority of the main game design and core gameplay mechanics.<br><br><br>" +
        "<span id=\"link\">View code on GitHub: <a href=\"https://github.com/nathanlin109/Talisman-Forger\" target=\"_blank\">https://github.com/nathanlin109/Talisman-Forger</a></span>" +
        "<span id=\"link\">Windows Download: <a href=\"https://media.githubusercontent.com/media/nathanlin109/portfolio/main/builds/Talisman Forger Windows.zip\">Talisman Forger Windows.zip</a></span>" +
        "<span id=\"link\">Mac Download: <a href=\"https://media.githubusercontent.com/media/nathanlin109/portfolio/main/builds/Talisman Forger Mac.zip\">Talisman Forger Mac.zip</a></span>";
}

// Ao Shu Project
let aoShu = document.querySelector('#ao-shu');
let aoShuImg = document.querySelector("#modalImg");
let aoShuText = document.querySelector("#caption");
aoShu.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    aoShuImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    aoShuText.innerHTML = "<i>Ao Shu SpellSlinger</i> is an isometric action RPG game created in Unity with C#. " +
        "I worked with students from RIT and the ArtCenter College of Design in California to develop this game. " +
        "We utilized Perforce, Hansoft, and Confluence in a simulated professional and agile work environment to coordinate with other team members. " +
        "I worked on the design and development of the game's UI.<br><br><br>" +
        "<span id=\"link\">Link to Game Designer's page: <a href=\"https://www.darrenkwan.com/ao-shu-spellslinger\" target=\"_blank\">https://www.darrenkwan.com/ao-shu-spellslinger</a></span>";
}

// Sun Temple project
let sunTemple = document.querySelector('#sun-temple');
let sunTempleImg = document.querySelector("#modalImg");
let sunTempleText = document.querySelector("#caption");
sunTemple.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    sunTempleImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    sunTempleText.innerHTML = "<i>Sun Temple Shooting Grounds</i> is a single player demo I made in Unreal Engine 5 with assets from the " +
    "Unreal Marketplace and the first person shooter template. I Used the blueprint system to implement game the logic, " + 
    "which consisted of a timer, target physics, and score tracking. Additionally, I converted the scene's lighting from UE4's baked lighting to the new Lumen lighting system in UE5.";
}

// Mekadan project
let mekadan = document.querySelector('#mekadan');
let mekadanImg = document.querySelector("#modalImg");
let mekadanText = document.querySelector("#caption");
mekadan.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    mekadanImg.src = this.src;
    document.querySelector("#modalImg2").src = "images/mekadan/mekadan2.png";
    document.querySelector("#rightButton").style.display = "inline-block";
    document.querySelector("#leftButton").style.display = "inline-block";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 2;
    showImgs(0);

    // Text
    mekadanText.innerHTML = "<i>MekaDan</i> is a sidescrolling 2D platformer created in MonoGame with C#. " +
        "In <i>MekaDan</i>, the player must clear each level in a classic shootem up style, utilizing the many abilities available to <i>MekaDan</i>. " +
        "I worked on this project with 3 other people, and I worked on the majority of the main game design, the physics and collision detection, and " +
        "implementing most of the core gameplay.";
}

// Blackjack project
let blackjack = document.querySelector('#blackjack');
let blackjackImg = document.querySelector("#modalImg");
let blackjackText = document.querySelector("#caption");
blackjack.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    blackjackImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    blackjackText.innerHTML = "A recreation of the table-top game, Black Jack, made with HTML, CSS, and JavaScript. I worked on " +
        "this project with one other person, and I coded most of the core logic and gameplay<br><br><br>" +
        "<span id=\"link\">Link: <a href=\"https://nathanlin109.github.io/website-projects/blackjack/\" target=\"_blank\">https://nathanlin109.github.io/website-projects/blackjack/</a></span>";
}

// Asteroids project
let asteroids = document.querySelector('#asteroids');
let asteroidsImg = document.querySelector("#modalImg");
let asteroidsText = document.querySelector("#caption");
asteroids.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    asteroidsImg.src = this.src;
    document.querySelector("#modalImg2").src = "images/asteroids/asteroids2.png";
    document.querySelector("#rightButton").style.display = "inline-block";
    document.querySelector("#leftButton").style.display = "inline-block";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 2;
    showImgs(0);

    // Text
    asteroidsText.innerHTML = "Inspired by the classic Atari game, Asteroids, I created my own version in Unity with c#, but I added a twist. Heat-seeking missiles!!!";
}

// Creek project
let creek = document.querySelector('#creek');
let creekImg = document.querySelector("#modalImg");
let creekText = document.querySelector("#caption");
creek.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    creekImg.src = this.src;
    document.querySelector("#modalImg2").src = "https://media.githubusercontent.com/media/nathanlin109/portfolio/main/images/creek/god-rays-720.gif";
    document.querySelector("#modalImg3").src = "images/creek/creek-house.png";
    document.querySelector("#modalImg4").src = "images/creek/house-fences.png";
    document.querySelector("#rightButton").style.display = "inline-block";
    document.querySelector("#leftButton").style.display = "inline-block";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 4;
    showImgs(0);

    // Text
    creekText.innerHTML = "<i>Cabin by the Creek</i> is a scene I made in UE5 using the Lumen lighting system with assets from the " +
    "Quixel Bridge plugin. I utilized the landscaping and foliage tools to create the terrain and I picked modular assets to create the cabin. " +
    "Additionally, I also experimented with Nanite meshes that I got from the Quixel Bridge.";
}

// Arcade machine models
let arcade = document.querySelector('#arcade');
let arcadeImg = document.querySelector("#modalImg");
let arcadeText = document.querySelector("#caption");
arcade.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    arcadeImg.src = this.src;
    document.querySelector("#modalImg2").src = "https://media.githubusercontent.com/media/nathanlin109/portfolio/main/images/arcade/arcade-machine-720.gif";
    document.querySelector("#modalImg3").src = "https://media.githubusercontent.com/media/nathanlin109/portfolio/main/images/arcade/ddr-machine-720.gif";
    document.querySelector("#modalImg4").src = "https://media.githubusercontent.com/media/nathanlin109/portfolio/main/images/arcade/ski-ball-machine-720.gif";
    document.querySelector("#modalImg5").src = "https://media.githubusercontent.com/media/nathanlin109/portfolio/main/images/arcade/ticket-eater-720.gif";
    document.querySelector("#modalImg6").src = "https://media.githubusercontent.com/media/nathanlin109/portfolio/main/images/arcade/ticket-animation-720.gif";
    document.querySelector("#rightButton").style.display = "inline-block";
    document.querySelector("#leftButton").style.display = "inline-block";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 6;
    showImgs(0);

    // Text
    arcadeText.innerHTML = "Various arcade machines inspired by an 80's retro arcade aesthetic with a neon color palette. I used Autodesk Maya to create all models and ticket eater animation and " + 
    "I did all texturing for the models in Substance Painter. The models include an arcade, DDR, skee ball, and ticket eater machines.";
}

// Ori project
let ori = document.querySelector('#ori');
let oriImg = document.querySelector("#modalImg");
let oriText = document.querySelector("#caption");
ori.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    oriImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    oriText.innerHTML = "Based on the game <i>Ori and the Blind Forest</i>, I made my own fan website with HTML, CSS, and JavaScript where I share " +
        "some of my favorite aspects of the game, as well as some background information about the game and its developer, Moon Studios.<br><br><br>" +
        "<span id=\"link\">Link: <a href=\"https://nathanlin109.github.io/website-projects/ori/\" target=\"_blank\">https://nathanlin109.github.io/website-projects/ori/</a></span>";
}

// Gif finder project
let gif = document.querySelector('#gif-finder');
let gifImg = document.querySelector("#modalImg");
let gifText = document.querySelector("#caption");
gif.onclick = function () {
    // Styles the image display
    modal.style.display = "block";
    gifImg.src = this.src;
    document.querySelector("#rightButton").style.display = "none";
    document.querySelector("#leftButton").style.display = "none";
    document.querySelector("#contentArea").style.top = "2%";
    imgListSize = 1;
    showImgs(0);

    // Text
    gifText.innerHTML = "<i>Gif Finder</i> is a website I created with one other person. It uses the giphy api, and simply " +
        "lets the user search a collection of gifs. I coded most of the HTML and JavaScript, and I created the majority of " +
        "the user interface, site functionality, and logic related to local storage.<br><br><br>" +
        "<span id=\"link\">Link: <a href=\"https://nathanlin109.github.io/website-projects/gif-finder/\" target=\"_blank\">https://nathanlin109.github.io/website-projects/gif-finder/</a></span>";
}

let closeButtons = document.querySelectorAll(".close");

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = close;
}

function close() {
    modal.style.display = "none";
    //contactModal.style.display = "none";
    resetImgs();
}

function clickOut(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        resetImgs();
    }
    /*if (e.target == contactModal) {
        contactModal.style.display = "none";
    }*/
}

function resetImgs() {
    imgIndex = 0;
    document.querySelector("#modalImg").style.display = "none";
    document.querySelector("#modalImg2").style.display = "none";
    document.querySelector("#modalImg3").style.display = "none";
    document.querySelector("#modalImg4").style.display = "none";
    document.querySelector("#modalImg5").style.display = "none";
    document.querySelector("#modalImg6").style.display = "none";
    document.querySelector("#modalImg7").style.display = "none";

    // Resets src
    document.querySelector("#modalImg").src = "#";
    document.querySelector("#modalImg2").src = "#";
    document.querySelector("#modalImg3").src = "#";
    document.querySelector("#modalImg4").src = "#";
    document.querySelector("#modalImg5").src = "#";
    document.querySelector("#modalImg6").src = "#";
    document.querySelector("#modalImg7").src = "#";
}
//----------------------------CYCLES MODAL IMAGES---------------------------

function cycleImgs(n) {
    imgIndex += n;
    if (imgIndex >= imgListSize) {
        imgIndex = 0
    }
    else if (imgIndex < 0) {
        imgIndex = imgListSize - 1;
    }
    console.log(imgIndex);
    showImgs(imgIndex);
}

function showImgs(index) {
    let imgs = document.querySelectorAll(".modal-content")
    for (let i = 0; i < imgListSize; i++) {
        if (i == index) {
            imgs[i].style.display = "block";
        }
        else {
            imgs[i].style.display = "none";
        }
    }
}

//----------------------------------PHP CONTACT POPUP-------------------------------
/*let contactModal = document.querySelector("#contactModal");
contactModal.onclick = clickOut;

// PHP Contact form
let contact = document.querySelector('#email');
contact.onclick = function () {
    // Styles the image display
    contactModal.style.display = "block";
    let form = document.querySelector("#phpContact");
    form.style.backgroundColor = "white";
}*/

// Hides the hamburger menu once the user clicks a nav option
let navDisplayed;
let hamburgerMenuDisplayed;
let width
let lastDisplayed = "none";

function toggleNav() {
    navDisplayed = getComputedStyle(document.querySelector("#menu")).display;
    hamburgerMenuDisplayed = getComputedStyle(document.querySelector("#hamburgerMenu")).display;
    width = window.innerWidth;
    if (navDisplayed == "block" && hamburgerMenuDisplayed == "block" && width <= 1000) {
        document.querySelector("#menu").style.display = "none";
    }
    else if (navDisplayed == "none" && hamburgerMenuDisplayed == "block" && width <= 1000) {
        document.querySelector("#menu").style.display = "block";
    }
    else if (navDisplayed == "block" && hamburgerMenuDisplayed == "block" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector("#menu").style.display = "none";
    }
    else if (navDisplayed == "none" && hamburgerMenuDisplayed == "block" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector("#menu").style.display = "block";
    }
    lastDisplayed = getComputedStyle(document.querySelector("#menu")).display;

}


window.onresize = resize;

function resize() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    else {
        width = window.innerWidth;
        if (width > 1000) {
            document.querySelector("#menu").style.display = "flex";
            lastDisplayed = "none";
        }
        else {
            document.querySelector("#menu").style.display = lastDisplayed;
        }
    }
}

function orientationChange() {
    // Landscape
    if (window.orientation == 90 || window.orientation == -90) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.querySelector("#menu").style.display = "flex";
            document.querySelector("#hamburgerMenu").style.display = "none";
            document.querySelector("#nav").style.width = "100vw";
            document.querySelector("#menu").style.width = "100vw";
            document.querySelector("#hamburgerMenu").style.width = "100vw";
        }
    }
    // Portrait
    else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.querySelector("#menu").style.display = "none";
            document.querySelector("#hamburgerMenu").style.display = "block";
            document.querySelector("#nav").style.width = "100vw";
            document.querySelector("#menu").style.width = "100vw";
            document.querySelector("#hamburgerMenu").style.width = "100vw";
        }
    }
}
