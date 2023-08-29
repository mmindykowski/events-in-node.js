const EventEmitter = require("events");

// const emitter = new EventEmitter();

// console.log(emitter);

// emitter.on("message", function (msg) {
//   console.log(`Wiadomość: ${msg}`);
// });

// emitter.emit("message", "Czesc Programisto");
// emitter.emit("message", "Dzien dobry!");

function printData(data) {
  console.log(`Dane ${data.data} z adresu ${data.url}`);
}

class Puller extends EventEmitter {
  constructor(url) {
    super();

    this.url = url;
  }

  pull() {
    this.emit("getData", {
      data: "Pobrane dane",
      url: this.url,
    });
  }
}

const puller = new Puller("https://example.com");

puller.on("getData", printData);

puller.pull();
