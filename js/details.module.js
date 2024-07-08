import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    document.getElementById("close").addEventListener("click", function () {
      document.querySelector(".home").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.ui = new Ui();
    this.getDetails(id);
  }

  async getDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1dff992777msh8255546dec493dfp1d31b8jsn65ad44c7732e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );

    const response = await api.json();
    this.ui.showDetails(response);
  }
}
