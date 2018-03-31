class View {
  constructor(logger) {
    this.logger = logger;
    this.html = document.createElement('div');
    this.html.innerHTML = `
        <div class="view-stub">
            <div class="view-stub__input-block">
                <input class="view-stub__input"/>
                <button class="view-stub__apply">Отправить</button>
            </div>
            <div class="animals"></div>
        </div>`;
  }

  addCreateHandler(handler) {
    this.html.querySelector('.view-stub__apply').addEventListener('click', () => {
      const input = this.html.querySelector('.view-stub__input');
      const newTaskTitle = input.value;
      input.value = '';
      handler(newTaskTitle);
    });
  }

  addDeleteHandler(handler) {
    this.html.querySelectorAll('.item__button_remove')
      .forEach(element => element.addEventListener('click', () => {
        const { id } = element;
        handler(id);
      }));
  }

  render(animals) {
    this.logger.write('View.js: Call render function');
    const nodes = [];
    const animalList = this.html.querySelector('.animals');

    let key = 0;
    for (key in animals) {
      const name = animals[key];
      const block = document.createElement('div');
      block.classList.add('animals__item');

      const span = document.createElement('span');
      span.innerHTML = name;

      const button = document.createElement('button');
      button.innerHTML = 'X';
      button.classList.add('item__button_remove');
      button.setAttribute('id', key);

      block.appendChild(span);
      block.appendChild(button);
      nodes.push(block);
    }


    while (animalList.firstChild) {
      animalList.removeChild(animalList.firstChild);
    }

    nodes.forEach((node) => {
      animalList.appendChild(node);
    });
  }
}

export default View;
