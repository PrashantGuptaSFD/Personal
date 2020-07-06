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
 * This method is called by the calculator after calculation has completed, but before formula fields are re-evaluated. 
 * @param
 * "quoteModel" : Quote being evaluated
 * "quoteLineModels" : all Quote lines in a quote
 * @returns {Promise}
 */
/* In this example we query Account from the salesforce (Where id = quote.SBQQ__Account__c) and add a 10% discount on all the quote ine items if account.type = 'PROSPECT'.
*/
export function onAfterCalculate(quoteModel, quoteLineModel, conn) {
	var accountId = quoteModel.record['SBQQ__Account__c'];		
	var query = "SELECT id,Type, Name FROM Account WHERE id = \'"+accountId+"\'";	
	
	return conn.query(query).then(function(results) {		  
		if(results.totalSize){
			var account = results.records[0];
			var totalDiscount = 0;
			if(account.Type.toUpperCase() == 'PROSPECT'){

				quoteLineModel.forEach(function(line) {
					line.record['SBQQ__Discount__c'] = 10;
					if(line.record['SBQQ__Description__c'] == null){
						line.record['SBQQ__Description__c'] = ' An Additional 10% Discount Added on QLI for Prospect Acounts';
					}else{
						line.record['SBQQ__Description__c'] += ' An Additional 10% Discount Added on QLI for Prospect Acounts';
					}
				});
			}
		}	
	});
};
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