/**
* @function fetchData
* 
* @param {String} url - The URL to get the cards data from.
* 
* @returns {Promise|undefined}
*/
export const fetchData = (url, pageElements) => {
    try {
        // Get the cards data from a URL.
        const rawCardData = await window.fetch(this.url);

        // Get the json response from the raw cards data.
        const jsonCardData = await rawCardData.json();


    } catch (err) {
        // IMAGINE AN ERROR HANDLING HERE.
    }
