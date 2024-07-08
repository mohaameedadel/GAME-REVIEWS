import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Games {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });

    this.ui = new Ui();
  }

  async getGames(category) {
    const loader = document.querySelector(".loading");
    loader.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1dff992777msh8255546dec493dfp1d31b8jsn65ad44c7732e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    this.ui.showGames(response);
    this.eventCards();
    loader.classList.add("d-none");
  }

  eventCards() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const id = card.dataset.id;
        this.displayDetails(id);
      });
    });
  }

  displayDetails(id) {
    const details = new Details(id);
    document.querySelector(".home").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
