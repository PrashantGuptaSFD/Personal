public with sharing class DLOG_Controller {
    @AuraEnabled
    public static List<Log> getLogs(){
        List<Log> logs = new List<Log>();
        try {
            for (ApexLog log : [SELECT Application, DurationMilliseconds, Id, LastModifiedDate, Location, LogLength, LogUserId, Operation, Request, RequestIdentifier, StartTime, Status, SystemModstamp
                                FROM ApexLog
                                LIMIT 500]) {
                logs.add(new Log(log));
            }
            return logs;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public Class Log{
        @AuraEnabled public ApexLog logRecord;
        public Log(ApexLog logRecord){
            this.logRecord = logRecord;
        }
    }
}
