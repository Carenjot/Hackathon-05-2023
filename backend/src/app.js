// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// create express app

const express = require("express");

const app = express();
const port = 5000;
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
    title: "",
    name: "",
    photo: "",
    resume: "",
    protips: {
      protips1: "",
      protips2: "",
      protips3: "",
    },
  },
  {
    id: 3,
    title: "",
    name: "",
    photo: "",
    resume: "",
    protips: {
      protips1: "",
      protips2: "",
      protips3: "",
    },
  },
  {
    id: 4,
    title: "",
    name: "",
    photo: "",
    resume: "",
    protips: {
      protips1: "",
      protips2: "",
      protips3: "",
    },
  },
];

const getCitys = (req, res) => {
  res.json(citys);
};
app.get("/api/citys", getCitys);

const getCityById = (req, res) => {
  const id = parseInt(req.params.id);

  const city = citys.find((city) => city.id === id);

  if (city != null) {
    res.json(city);
  } else {
    res.status(404).send("not found");
  }
};
app.get("/api/citys/:id", getCityById);
// use some application-level middlewares

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// import and mount the API routes

const router = require("./router");

app.use(router);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
