declare namespace Cypress {
    interface Chainable<Subject> {
     /**
     * @description Clicks outside of element.
     * @param {string} text - Enter a random text
     * @param {number} number - Enter a number
     */
      clickOutside(): Chainable<any>;
    }
  }

