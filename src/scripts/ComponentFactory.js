import Carousel from './components/Carousel';
import Header from './components/Header';
import Modal from './components/Modal';
import Scrolly from './components/Scrolly';
import Typed from './components/TypedCostum';
import Parallax from './components/Parallax';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Carousel,
      Header,
      Modal,
      Scrolly,
      Typed,
      Parallax,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
