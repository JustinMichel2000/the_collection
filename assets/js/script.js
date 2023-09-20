let collection = [
  {
    picture: "" ,
    firstandsurname: "Gon Freecss",
    typeNen: "Enhancement",
    affiliation: "Hunter Association",
    specialTech: ["Rock-paper-scissors", "Superhuman eyesight"],
    description: "Gon Freecss is a Rookie Hunter and the son of Ging Freecss.Finding his father is Gon's motivation in becoming a Hunter ",
    quote: "If you want to get to know someone, find out what makes them angry",
  },

  {
    picture:"" ,
    firstandsurname: "Killua Zoldyck",
    typeNen: "Transmutation",
    affiliation: ["Hunter Association", "Zoldyck's family"],
    specialTech: ["Lightning Palm", "Godspeed", "Thunderbolt"],
    description: "Killua Zoldyck is the third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until he runs away from home and becomes a Rookie Hunter. He is the best friend of Gon Freecss and is currently traveling with Alluka Zoldyck.",
    quote: "I'm so tired of killing... I just want to be a kid. Hanging out, doing stuff with Gon. That's it",
  },

  {
    picture:"" ,
    firstandsurname: "Kurapika",
    typeNen: ["Conjuration", "Specialization"],
    affiliation: ["Hunter Association", "Nostrade Family", "Zodiacs"],
    specialTech: ["Steal Chain", "Chain Jail", "Judgment Chain", "Emperor time"],
    description:"Kurapika is the last survivor of the Kurta Clan. He is a Blacklist Hunter and current leader of the organization founded by Light Nostrade. He is a member of the Zodiacs with the codename Rat. His goal is to avenge his clan and recover the remaining Scarlet Eyes." ,
    quote: "I do not fear death. What I fear is that my rage will one day fade away",
  },

  {
    picture:"" ,
    firstandsurname: "Chrollo Lucilfer",
    typeNen: "Specialization",
    affiliation: "Phantom Troupe",
    specialTech: ["Skill Hunter", "Double Face"],
    description:"Chrollo Lucilfer is the founder, leader, and member #0 of the Phantom Troupe.His physical strength ranked seventh among the group." ,
    quote: "Making the ability yours while exploring the darkness within the soul of the original owner... that's the true pleasure of a skill hunter",
  },

  {
    picture:"" ,
    firstandsurname: "Hisoka Morow",
    typeNen: "Transmutation",
    affiliation: "Hunter Association",
    specialTech: ["Bungee Gum", "Texture Surprise"],
    description: "Hisoka Morow is a Hunter and former member #4 of the Phantom Troupe; his physical strength ranked third in the group. He is always in searchfor strong opponents, and would spare those who have great potential, such as Gon and Killua in order for them to get strong enough to actually challenge him. ",
    quote: "My greatest pleasure comes when such people crumple to their knees and I look down upon their disbelieving faces as their plans fail",
  },

  {
    picture:"" ,
    firstandsurname: "Ging Freecss",
    typeNen: "Unknown",
    affiliation: ["Hunter Association", "Continent Expedition Team"],
    specialTech: ["Remote Punch", "Ultrasound", "Phasing Bullets"],
    description: "Ging Freecss is the father of Gon Freecss. He is a Double-Star Ruins Hunter (though he can apply for a Triple-Star License), and a former Zodiac with the codename Boar.",
    quote: "I'm enjoying the journey. So if your destination is the same as mine, enjoy the side trips. A lot. Something more important than the thing you're hunting could be right there by the side of the road",
  },

  {
    picture:"" ,
    firstandsurname: "Kite",
    typeNen: "Conjuration",
    affiliation: "Amateur Hunters",
    specialTech: "Crazy Slots",
    description:"Kite was a Hunter and Ging Freecss' student. After his death, he was reborn as a Chimera Ant. Colt named them Reina, after his late sister, but they took to calling themself Kite once again." ,
    quote: "If you lose even a little of this resolve and start backsliding, I'll kill you. You can live in peace knowing that",
  },

  {
    picture:"" ,
    firstandsurname: "Meruem",
    typeNen: "Emission",
    affiliation: "Chimera Ants",
    specialTech: ["Aura Synthesis", "Rage Blast", "Metamorphosis"],
    description: "Meruem was the most powerful offspring of the Chimera Ant Queen. He was known as the King of the Chimera Ants, and served as the main antagonist of the Chimera Ant arc.",
    quote: "In the hands of an incompetent, power brings nothing but ruin",
  },

  {
    picture:"" ,
    firstandsurname: "Neferpitou",
    typeNen: "Specialization",
    affiliation: "Royal Guards",
    specialTech: ["Terpsichora", "Doctor Blythe", "Puppeteering"],
    description: "Neferpitou, nicknamed Pitou , was a cat-humanoid Chimera Ant and the firstborn of the Chimera Ant King's three Royal Guards.",
    quote: "If anyone had to bear the brunt of his rage, I'm glad I was the one to die!",
  },

  {
    picture:"" ,
    firstandsurname: "Isaac Netero",
    typeNen: "Enhancement",
    affiliation: "Hunter Association",
    specialTech: ["100-Type Guanyin", "Bodhisattva"],
    description: "Isaac Netero was the 12th Chairman of the Hunter Association and the Head of the Exam Commission.In his youth, he was extolled as the most powerful Nen user in the world, and retained dreadful strength even in his old age.",
    quote: "You believe I cannot pray with a single arm? A prayer comes from the heart",
  },


];

let cards = document.createElement("div");
cards.classList.add("cards");
let container = document.querySelector(".container");
container.appendChild(cards);

let card = document.createElement("article");
card.classList.add("card");
cards.appendChild(card);

let picture = document.createElement("img");
picture.classList.add("picture");
card.appendChild(picture);

let firstandsurname = document.createElement("h3");
firstandsurname.classList.add("firstandsurname");
card.appendChild(firstandsurname);

let typeNen = document.createElement("h3");
typeNen.classList.add("typenen");
card.appendChild(typeNen);

let affiliation = document.createElement("h3");
affiliation.classList.add("affiliation");
card.appendChild(affiliation);

let specialTech = document.createElement("ul");
specialTech.classList.add("specialtech");
card.appendChild(specialTech);

let description = document.createElement("p");
description.classList.add("description");
card.appendChild(description);

let quote = document.createElement("p");
quote.classList.add("quote");
card.appendChild(quote);


for ( let element of collection) {

  let firstandsurname = document.createElement("h3");
  firstandsurname.classList.add("firstandsurname");
  let textfirstandsurname = document.createTextNode(element.firstandsurname);
  firstandsurname.appendChild(textfirstandsurname);
  card.appendChild(firstandsurname);

  let typeNen = document.createElement("h3");
  typeNen.classList.add("typenen");
 let textTypeNen = document.createTextNode(element.typeNen);
 typeNen.appendChild(textTypeNen);
 card.appendChild(typeNen);

 let affiliation = document.createElement("h3");
 affiliation.classList.add("affiliation");
 let textAffiliation = document.createTextNode(element.affiliation);
 affiliation.appendChild(textAffiliation);
 card.appendChild(affiliation);

 let specialTech = document.createElement("ul");
 specialTech.classList.add("specialtech");
 let textSpecialTech = document.createTextNode(element.specialTech);
 specialTech.appendChild(textSpecialTech);
 card.appendChild(specialTech);

 let description = document.createElement("p");
 description.classList.add("description");
 let textDescription = document.createTextNode(element.description);
 description.appendChild(textDescription);
 card.appendChild(description);

 let quote = document.createElement("p");
 quote.classList.add("quote");
 let textQuote = document.createTextNode(element.quote);
 quote.appendChild(textQuote);
 card.appendChild(quote);
 
}





















