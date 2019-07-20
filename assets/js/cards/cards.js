/**
 * quadratos vc tem que sentar com nos e conversar sobre como programa assim um dia :D
 * ashduhusahuhdusa
 * FLOW:
 * 
 * @tagAnchorProvider -> 
 *    @appendCards receives cards from @makeCards -> (builded with @makeCards) ->
 *        
 */

/**
 * @function tagAnchorProviders
 * 
 * @returns {undefined}
 */
export const tagAnchorProvider = (tagAnchor) => (cards) => {
  return appendCards(cards, tagAnchor);
};

/**
 * @function appendRedirectBehavior
 * 
 * @param {jQueryElement} element - The jquery element to append the behavior to.
 */
export const appendRedirectBehavior = (element) => {
  return element.on('click', () => this.redirectPage())
};

/**
 * Creates a single card.
 * 
 * @function makeCard
 * 
 * @param {String} postTitle - The post's title.
 * @param {String} postDescription - The post's description.
 * 
 * @returns {HTMLElement}
 */
export const makeCard = (postTitle, postDescription) => {
  // Create the card containers.
  const cardInnerContainer = $(document.createElement('div'));
  const cardContainer = $(document.createElement('div')).append(cardInnerContainer);

  // Create the card inner information.
  const cardTitle = $(document.createElement('h2'));
  const cardDescription = $(document.createElement('p'));
  const cardReadMore = $(document.createElement('div'));
  
  return cardContainer;
};
  
/**
 * Creates a list of cards.
 * 
 * @function makeCards
 * 
 * @param {Object[]} cards - List of card objects to render into the screen.
 * 
 * @returns {HTMLElement[]}
 */
export const makeCards = (cards) => {
  return cards.map(
      ({ title, description }) => makeCard(title, description)
  );
};

/**
 * Append a list of cards into the screen.
 * 
 * @function appendCards
 * 
 * @param {Object[]} cards - The list of cards to append into the screen.
 * 
 * @returns {undefined}
 */
export const appendCards = (cards, tagAnchor) => {
  return cards.forEach((card) =>
    tagAnchor.append(card)
  );
};

/**
 * @function structureElement
 * 
 * @param {String}
 */
export const structureElement(element) {
    // Assign the passed element to a class variable.
    this.element = element;
    
    // Extract the post title and the post description from the element.
    const  { post_title, post_des } = element;

    // Populate the array of cards.
    const cards = [
      {
        title: post_title,
        description: post_des
      }
    ];

    // Everytime a user clicks on a element, redirect him to the element inner
    // URL.
    appendRedirectBehavior(this.tagAnchor);

    return appendCards(makeCards(cards));
};

/**
 * Redirects the user to the card's page.
 * 
 * @function redirectPage
 * 
 * @returns {undefined}
 */
export const redirectPage = () => 
  window.location.href = this.element.url;