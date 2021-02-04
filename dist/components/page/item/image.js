import { BaseComponent } from "../../component.js";
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`
      <section class="image">
          <div class="image__holder">
              <img preload class="image__thumnail">
          </div>
          <h2 class="image__title"></h2>
      </section>
    `);
        const imageElement = this.element.querySelector(".image__thumnail");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}
