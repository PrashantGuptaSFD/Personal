
/**
 * The calculator calls this method after it completes a calculation. The method helps to make fields editable or un-editbale on the QLE from the plugin.
 * @param
 * "fieldName" : api name of the field being evaluated
 * "quoteLineModelRecord" : specific quote lines in a quote being evaluated.
 * @returns boolean (True means field would be editable on the QLE and False would make it non editable it.)
 */
export function isFieldEditable(fieldName, quoteLineModelRecord) { 

    if (fieldName == 'SBQQ__Description__c') { 
        return false; 
    }     
    return true; 
    
};