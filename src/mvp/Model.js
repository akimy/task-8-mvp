class Model {
  constructor(customEvents, logger) {
    this.data = { 0: 'Fox', 1: 'Lion', 2: 'Squerrel' };
    this.customEvents = customEvents;
    this.currentId = 3;
    this.logger = logger;
  }

  get() {
    this.logger.write(`Model.js: get data <pre class="log__store">${JSON.stringify(this.data)}</pre>`);
    return this.data;
  }

  add(name) {
    this.logger.write(`Model.js: add data ${name}`);
    this.data[this.currentId++] = name;
    this.customEvents.dispatchEvent('updateList');
  }

  delete(id) {
    this.logger.write(`Model.js: remove data id=${id}`);
    delete this.data[id];
    this.customEvents.dispatchEvent('updateList');
  }
}

export default Model;
