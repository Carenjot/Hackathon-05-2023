const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const citys = [
  {
    id: 1,
    title: "Voyage à Bruxelles",
    name: "Thiry Maximilien",
    photo: {
      photo1:
        "https://www.les-voyageuses.net/wp-content/uploads/2017/11/Lesvoyageuses-Belgique-Bruxelles-Guide-4-1280x640.jpg",
      photo2:
        "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1651114332/q4e6bcj35bttqpsdeed8.jpg",
      photo3:
        "https://media.routard.com/image/80/0/bruxelles-grand-place.1537800.w630.jpg",
    },
    resume:
      "Découvre la Grand-Place, les musées d'art, les galeries Saint-Hubert, le quartier européen, la Brasserie Cantillon, les moules-frites, les gaufres, Ixelles et le Delirium Café. Bruxelles t'attend !",
    protips: {
      protips1: "Les prises éléctrique sont du type C et E",
      protips2:
        "Le meilleur moment pour allez à Bruxelles, c'est de Juin à Aout",
      protips3:
        "Les langues officiels du pays sont le Français, le Flamand et l'allemand",
    },
  },
  {
    id: 2,
    title: "Voyage a Amsterdam",
    name: "Enzo Andre",
    photo: {
      photo1: "./src/assets/amsterdam.jpg",
      photo2: "",
      photo3: "",
    },
    resume: "",
    protips: {
      protips1:
        "Faitent attention lorsque vous visitez , les Neerlandais roulent tous a vélo",
      protips2: "",
      protips3: "",
    },
  },
  {
    id: 3,
    title: " Voyage au Danemark",
    name: " Aylin Noiret",
    photo: {
      photo1: "./src/assets/copenhague.jpg",
      photo2: "",
      photo3: "",
    },
    resume: " Quel voyage ! ",
    protips: {
      protips1:
        "Très souvent, les danois se déplacent à vélo, il y a même une sorte d'autoroute qui leurs est dédié. Ils sont très respectueux de la réglementation.",
      protips2:
        "Le plat typique est le Smørrebrød, une tranche de pain avec divers aliments dessus dont souvent du poisson. ",
      protips3:
        "Un grand sentiment de sérénité, on comprends mieux pourquoi il est élu le pays des gens heureux ",
    },
  },
  {
    id: 4,
    title: "Voyage en Islande",
    name: "Aurélien Carenjot",
    photo: {
      photo1: "./src/assets/",
      photo2: "",
      photo3: "",
    },
    resume: "",
    protips: {
      protips1: "",
      protips2: "",
      protips3: "",
    },
  },
];

router.get("/citys", (req, res) => {
  res.json(citys);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
