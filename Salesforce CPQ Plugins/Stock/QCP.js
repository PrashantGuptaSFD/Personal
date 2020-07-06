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

/**
 * The calculator calls this method after it completes a calculation.  The method helps to make fields visible or hidden on the QLE from the plugin.
 * @param
 * "fieldName" : api name of the field being evaluated
 * "quoteLineModelRecord" : specific quote lines in a quote being evaluated.
 * @returns boolean (True means field would be shown on the QLE and False would hide it.)
 */
export function isFieldVisible(fieldName, quoteLineModelRecord) { 
    if (fieldName == 'SBQQ__Description__c') { 
        return false; 
        } 
        
        return true; 
}
/**
 * The calculator calls this method after it completes a calculation. The method helps to make fields editable or un-editbale on the QLE from the plugin.
 * @param
 * "fieldName" : api name of the field being evaluated
 * "quoteLineModelRecord" : specific quote lines in a quote being evaluated.
 * @returns boolean (True means field would be shown on the QLE and False would hide it.)
 */
export function isFieldEditable(fieldName, quoteLineModelRecord) { 

    if (fieldName == 'SBQQ__Description__c') { 
        return false; 
    }     
    return true; 
    
};