/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Finds "button" with given label and perform a click.
     * @param buttonLabel label of button
     * @param forceClick
     */
    buttonClick(buttonLabel: string, forceClick?: boolean): Chainable<Element>;

    /**
     * Finds checkbox or radio button and perform click on parent div, which results in successful check.
     * @param checkboxName for finding checkbox in DOM
     * @param value value of checkbox
     */
    setCheckbox(checkboxName: string, value: boolean): Chainable<Element>;

    /**
     * Finds div wih given name and click on its parent
     * @param divName name of div
     */
    divParentClick(divName: string): Chainable<Element>;

    /**
     * Finds first element with given name and checks or unchecks it
     * @param name
     */
    forceClick(name: string): Chainable<Element>;

    /**
     * Sets radio button to specified value
     * @param name
     * @param value
     */
    setRadioButton(name: string, value: string): Chainable<Element>;

    /**
     * Searches for element by name
     * @param name
     */
    getElementByName(name: string): Chainable<Element>;

    /**
     * Find select container with given name and clicks on it.
     * @param selectName
     */
    openSelectMenu(selectName: string): Chainable<Element>;

    /**
     * Find select container with given name and clicks on it.
     * @param fieldName
     * @param value
     * @param isFirst
     */
    openSelectMenuAndSelectValue(
      fieldName: string,
      value: string,
      isFirst?: boolean,
    ): Chainable<Element>;

    /**
     * Find and return iframe on page
     * @param iframeName
     */
    getIframe(iframeName: string): Chainable<Element>;

    /**
     * Sets trigger button to specified value
     * @param name
     * @param direction
     * @param repeatCount
     */
    setTrigger(
      name: string,
      direction?: string,
      repeatCount?: number,
    ): Chainable<Element>;

    /**
     * Multiple click on element
     * @param repeatCount
     * @param name
     */
    multipleClick(name: string, repeatCount: number): Chainable<Element>;
  }
}
