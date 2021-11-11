import browser from "webextension-polyfill";
import { params, setParams } from "../data/params";

const Optional = class {
  constructor(el) {
    this.el = el;
    this.id = el.id;

    this.active = false;
    this.value = "";

    this.cbEl = this.el.querySelector(".optional__cb");
    this.valueEl = this.el.querySelector(".optional__value");

    this.cbEl.addEventListener("input", () => {
      this.update();
    });
  }

  update() {
    this.active = this.cbEl.checked;
    if (this.active) {
      this.el.classList.add("optional--active");
    } else {
      this.el.classList.remove("optional--active");
    }
  }

  restore(data) {
    if (data) {
      this.cbEl.checked = data.active;
      this.valueEl.value = data.value;
    } else {
      this.active = this.cbEl.checked;
      this.value = this.valueEl.value;
    }

    this.update();
  }

  getData() {
    this.active = this.cbEl.checked;
    this.value = this.valueEl.value;

    return {
      active: this.active,
      value: this.value,
    };
  }
};

function save() {
  const data = {
    google: document.querySelector('input[name="google"]').checked,
    amazon: document.querySelector('input[name="amazon"]').checked,
    facebook: document.querySelector('input[name="facebook"]').checked,
    apple: document.querySelector('input[name="apple"]').checked,
    microsoft: document.querySelector('input[name="microsoft"]').checked,
  };

  for (let i = 0, lg = optionals.length; i < lg; i++) {
    const optional = optionals[i];
    data[optional.id] = optional.getData();
  }

  setParams(data)
}

function restore() {
  const getting = browser.storage.local.get(params);

  getting.then(
    (result) => {
      console.log("RESULT", result);

      document.querySelector('input[name="google"]').checked =
        result.google === undefined ? true : result.google;
      document.querySelector('input[name="amazon"]').checked =
        result.amazon === undefined ? true : result.amazon;
      document.querySelector('input[name="facebook"]').checked =
        result.facebook === undefined ? true : result.facebook;
      document.querySelector('input[name="apple"]').checked =
        result.apple === undefined ? true : result.apple;
      document.querySelector('input[name="microsoft"]').checked =
        result.microsoft === undefined ? true : result.microsoft;

      for (let i = 0, lg = optionals.length; i < lg; i++) {
        const optional = optionals[i];
        optional.restore(result[optional.id]);
      }
    },
    (error) => {
      console.log(`Error: ${error}`);
    }
  );
}

const optionals = [];

document.addEventListener("DOMContentLoaded", () => {
  const optionalEls = document.querySelectorAll(".optional");
  optionalEls.forEach((el) => {
    optionals.push(new Optional(el));
  });

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      save();
    });
  });

  restore();
});
