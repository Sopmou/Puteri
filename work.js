const object={textI:"Random acts of Blowjobs", textII:"Dress-up and Strip-tease", textIII:"Erotische Geschichte schreiben", textIV:"Sexy Snap-Session", textV:"Roleplay with me", textVI: "Lush yourself", textVII: "Masturbate in front of me", textVIII: "Servier dich selbst (Gloryhole-Style)", textIX: "Sexy Tiktoks/Tiktok-Dances", textX: "Nyotaimori", textXI: "Random in sexy Unterwäsche rumlaufen", textXII: "Maybe ein Buttplug :D"}

let result;

function randomChoice(){
    const keys = Object.keys(object);
    const index = Math.floor(Math.random()*keys.length);
    result = keys[index];

    const headerElement = document.getElementById('überschrift');
    headerElement.textContent = object[result]; // Ersetzt den Text "Hier soll erstmal was stehen"
    headerElement.style.fontStyle = 'normal'; // Setzt den Text zuerst normal

    setTimeout(() => {
        headerElement.style.fontStyle = 'italic'; // Setzt den Text nach einer kurzen Verzögerung auf italic
    }, 0.001); // Die Verzögerung ist hier 1000 Millisekunden (1 Sekunde)
}


function additionalText() {
    let link;

    switch(result){
        case "textI":
            link = object.textI;
            break;
        case "textII":
            link = object.textII;
            break;
        case "textIII":
            link = object.textIII;
            break;
        case "textIV":
            link = object.textIV;
            break;
        case "textV":
            link = object.textV;
            break;
    }
    document.getElementById('output2').textContent = link;
}
function additionalLink() {
    let link;
    let url;

    switch(result){
        case "textI":
            content = "Gebe mir unerwartet einen Blowjob. Just do it :)";
            break;
        case "textII":
            content = `<a href="https://www.youtube.com/watch?v=ZD7AOh5iYp0&list=PLVqxkYSatOs7uc_BQWFBZLCxqDzsYRlM0" target="_blank">Hier ein Tutorial</a>`
            break;
        case "textIII":
            content = "Schreibe was auch immer dir in den Sinn kommt. Hauptsache es hat mit Sex zu tuen";
            break;
        case "textIV":
            content = `<a href="https://www.youtube.com/watch?v=n0uaOHhvgpA&list=PL4Rofi0ZPIqgQApdZDCkdBSSBTFU5l35m" target="_blank">Hier ein Tutorial</a>`;
            break;
        case "textV":
            content = `<a href="https://www.youtube.com/watch?v=SvsfDdapv0U&pp=ygUZaG93IHRvIG1ha2Ugcm9sZXBsYXggc2V4eQ%3D%3D" target="_blank">Hier ein Tutorial</a>`;
            break;    
        case "textVI":
            content = `<a href="https://de.lovense.com/bluetooth-remote-control-vibrator" target="_blank">Du findest es hier!</a>`;
            break;    
        case "textVII":
            content = "You are beatiful. Show it to me <3";
            break;    
        case "textVIII":
            content = `<a href="https://de.wikipedia.org/wiki/Glory_Hole" target="_blank">Hier eine Erklärung</a>`;
            break; 
        case "textIX":
            content = `<a href="https://www.tiktok.com/tag/thirsttrap" target="_blank">Hier ein wenig Inspiration</a>`;
            break; 
        case "textX":
            content = `<a href="https://en.wikipedia.org/wiki/Nyotaimori" target="_blank">Hier eine Erklärung</a>`;
            break; 
        case "textXI":
            content = "Du hast so viele schöne Sachen. Lass sie mich sehen";
            break; 
        case "textXII":
            content = `<a href="https://www.eis.de/lovetoys/anal-toys/analplugs" target="_blank">Kauf einen :P</a>`;
            break; 

    }
    document.getElementById('outputLink').innerHTML = content;
}