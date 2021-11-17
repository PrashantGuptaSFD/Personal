/**
 * @description       : 
 * @author            : Prashant Gupta (Timber View)
 * @group             : 
 * @last modified on  : 11-17-2021
 * @last modified by  : Prashant Gupta (Timber View) 
 * Modifications Log
 * Ver   Date         Author                         Modification
 * 1.0   11-17-2021   Prashant Gupta (Timber View)   Initial Version
**/
import { LightningElement } from 'lwc';
import getLogs from '@salesforce/apex/TLOG_Controller.getLogs';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
const columns = [
    { label: 'ID', fieldName: 'id' },
    { label: 'Location', fieldName: 'location', type: 'text',sortable:true },
    { label: 'Log Length', fieldName: 'logLength', type: 'number',sortable:true },
    { label: 'Duration in Milliseconds', fieldName: 'durationMilliseconds', type: 'number',sortable:true },
    { label: 'System Modstamp', fieldName: 'systemModstamp', type: 'datetime',typeAttributes:{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }},
    { label: 'Start Time', fieldName: 'startTime', type: 'datetime',typeAttributes:{
        month: '2-digit',
        day: '2-digit'
    },sortable:true },
    { label: 'Status', fieldName: 'status', type: 'text',sortable:true },
    { label: 'User Name', fieldName: 'logUserName', type: 'text',sortable:true },
];
export default class tvLogList extends LightningElement {

    data = [];
    columns = columns;
    connectedCallback(){
        this.getLogRecords();
        console.log(JSON.stringify(this.data));
    }

    getLogRecords(){
        getLogs()
        .then(result => {
            console.log(JSON.stringify(result));

            this.data = result;
        });
    }
}