import consoleLogger from '../ConsoleLogger';

/**
 * @class Model - содержит информацию о модели (данные)
*/
class Model {
  /**
   * Устанавливает первоначальные данные и регестрирует логгер
   * @param {Logger} logger
   * @param {Object} data - изначальные данные
   * @param {CustomEvents} - эвент-эммитер
   */
  constructor(data, customEvents, logger = consoleLogger) {
    this.data = data;
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
