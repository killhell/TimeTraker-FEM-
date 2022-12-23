let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll(".btn");

function activebtn(button) {
  buttons.forEach((b) => {
    b.classList.remove("active");
  });
  button.classList.add("active");
}

function clear() {
  const activities = document.querySelectorAll(".card");
  activities.forEach((a) => {
    a.remove();
  });
}

function rendercard(clickedOption) {
  const cards = document.querySelector(".cards");
  clear();

  function calctimeframe(option) {
    if (option === "daily") {
      return "Yesterday";
    }

    if (option === "weekly") {
      return "Last Week";
    }

    if (option === "monthly") {
      return "Last Month";
    }
  }

  data.forEach((activity) => {
    const name = activity.title;
    const activityclass = name.toLowerCase().replace(" ", "-");
    const timeframedata = activity.timeframes[clickedOption];
    const previoustimedata = calctimeframe(clickedOption);

    const section = document.createElement("section");
    section.classList.add("card", activityclass);
    const inject = `
          <img src="images/icon-${activityclass}.svg" alt="" />
          <div class="background">
            <div class="description">
              <div class="tittle">
                <p>${name}</p>
                <img src="images/icon-ellipsis.svg" alt="" />
              </div>

              <div class="timeframe">
                <h1>${timeframedata.current}hrs</h1>
                <div class="previous">
                  <span>${previoustimedata}</span>
                  <span>${timeframedata.previous}hrs</span>
                </div>
              </div>
            </div>
          </div>
    `;

    section.innerHTML = inject;
    cards.appendChild(section);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedOption = button.dataset.btn;
    activebtn(button);
    rendercard(clickedOption);
  });
});

buttons[1].click();
