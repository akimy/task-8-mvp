import Presenter from './mvp/Presenter';
import CustomEvents from './mvp/CustomEvents';
import logger from './Logger';

const customEvents = new CustomEvents(logger);
const animalList = new Presenter(customEvents, logger);

// Маунтим вьюху в контейнере .view перед логом
document.querySelector('.view')
  .insertBefore(animalList.getView().html, document.querySelector('.view__log'));
