/**
 * Plugin Initializing Function, 
 * The calculator calls this method before formula fields are evaluated.
 * @param
 * "quoteLineModels" : all Quote lines in a quote
 * @returns {Promise}
 */
export function onInit(quoteLineModels) {
  return new Promise((resolve, reject) => {
    log("onInit()", quoteLineModels);
    resolve();
  });
}

/**
 * This method is called by the calculator before calculation begins, but after formula fields have been evaluated.
 * @param
 * "quoteModel" : Quote being evaluated
 * "quoteLineModels" : all Quote lines in a quote
 * @returns {Promise}
 */
export function onBeforeCalculate(quoteModel, quoteLineModels, conn) {
  return new Promise((resolve, reject) => {
    log("onBeforeCalculate()", quoteModel, quoteLineModels);
    resolve();
  });
}

/**
 * This method is called by the calculator before price rules are evaluated. 
 * @param
 * "quoteModel" : Quote being evaluated
 * "quoteLineModels" : all Quote lines in a quote
 * @returns {Promise}
 */
export function onBeforePriceRules(quoteModel, quoteLineModels, conn) {
  return new Promise((resolve, reject) => {
    log("onBeforePriceRules()", quoteModel, quoteLineModels);
    resolve();
  });
}

/**
 * This method is called by the calculator after price rules are evaluated. 
 * @param
 * "quoteModel" : Quote being evaluated
 * "quoteLineModels" : all Quote lines in a quote
 * @returns {Promise}
 */
export function onAfterPriceRules(quoteModel, quoteLineModels, conn) {
  return new Promise((resolve, reject) => {
    log("onAfterPriceRules()", quoteModel, quoteLineModels);
    resolve();
  });
}

/**
 * This method is called by the calculator after calculation has completed, but before formula fields are re-evaluated. 
 * @param
 * "quoteModel" : Quote being evaluated
 * "quoteLineModels" : all Quote lines in a quote
 * @returns {Promise}
 */
export function onAfterCalculate(quoteModel, quoteLineModels, conn) {
  return new Promise((resolve, reject) => {
    log("onAfterCalculate()", quoteModel, quoteLineModels);
    resolve();
  });
}