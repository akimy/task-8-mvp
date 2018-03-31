import Model from './Model';
import View from './View';

class Presenter {
  constructor(customEvents, logger) {
    this.logger = logger;
    this.model = new Model(customEvents, logger);
    this.view = new View(logger);
    this.customEvents = customEvents;

    this.view.addCreateHandler((animalName) => {
      this.model.add(animalName);
    });

    this.customEvents.registerEvent('updateList');
    this.customEvents.addEventListener('updateList', () => {
      this.logger.write('Presenter.js: catch event "updateList"');
      this.view.render(this.model.get());
      this.subscribeDeleteHandlers();
    });
  }

  subscribeDeleteHandlers() {
    this.logger.write('Presenter.js: subscribe delete handlers');
    this.view.addDeleteHandler((id) => {
      this.model.delete(id);
    });
  }

  getView() {
    this.logger.write('Presenter.js: get view');
    this.view.render(this.model.get());
    this.subscribeDeleteHandlers();
    return this.view;
  }
}

export default Presenter;
