import consoleLogger from '../ConsoleLogger';
import Model from './Model';
import View from './View';

/**
 * @class Presenter отвечает за обработку потока данных из model во view и хендли эвенты из view
*/
class Presenter {
  /**
   * Инициализирует презентер
   * @param {CustomEvents} customEvents
   * @param {Logger} logger
   */
  constructor(customEvents, logger = consoleLogger) {
    this.logger = logger;
    this.model = new Model(
      { 0: 'Fox', 1: 'Lion', 2: 'Squerrel' },
      customEvents,
      logger,
    );
    this.view = new View(logger);
    this.customEvents = customEvents;

    this.view.addCreateHandler((animalName) => {
      if (this.validateString(animalName)) {
        this.model.add(animalName);
      }
    });

    this.customEvents.registerEvent('updateList');
    this.customEvents.addEventListener('updateList', () => {
      this.logger.write('Presenter.js: catch event "updateList"');
      this.view.render(this.model.get());
      this.subscribeDeleteHandlers();
    });
  }

  /**
   * Подписывает листенеры на удаление животных из списка
  */
  subscribeDeleteHandlers() {
    this.logger.write('Presenter.js: subscribe delete handlers');
    this.view.addDeleteHandler((id) => {
      this.model.delete(id);
    });
  }

  /**
   * Валидирует данные в случае неудачи - пишет об этом в лог
   * @param {String} string
   * @returns {Boolean}
  */
  validateString(string) {
    if (string.length > 0) {
      return true;
    }
    this.logger.write('<span style="color: red">Empty string sending. Abort.</span>');
    return false;
  }

  /**
   * Возвращает view перевешивает листенеры на удаление (т.к DOM обновился)
   * @returns {View}
  */
  getView() {
    this.logger.write('Presenter.js: get view');
    this.view.render(this.model.get());
    this.subscribeDeleteHandlers();
    return this.view;
  }
}

export default Presenter;
