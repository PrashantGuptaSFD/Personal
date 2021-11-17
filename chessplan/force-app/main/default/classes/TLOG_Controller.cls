public with sharing class TLOG_Controller {
    
    @AuraEnabled
    public static List<Log> getLogs(){
        List<Log> logs = new List<Log>();
        try {
            for (ApexLog log : [SELECT Application, DurationMilliseconds, Id, LastModifiedDate, Location, LogLength, LogUserId,LogUser.Name, Operation, Request, RequestIdentifier, StartTime, Status, SystemModstamp
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
        @AuraEnabled public Integer logLength;
        @AuraEnabled public Integer durationMilliseconds;
        @AuraEnabled public String id;
        @AuraEnabled public DateTime lastModifiedDate;
        @AuraEnabled public String location;
        @AuraEnabled public DateTime startTime;
        @AuraEnabled public DateTime systemModstamp;
        @AuraEnabled public String status;
        @AuraEnabled public String logUserName;
        public Log(ApexLog logRecord){
            this.logRecord = logRecord;
            this.logLength = logRecord.logLength;
            this.durationMilliseconds = logRecord.durationMilliseconds;
            this.id = logRecord.id;
            this.lastModifiedDate = logRecord.lastModifiedDate;
            this.location = logRecord.location;
            this.startTime = logRecord.startTime;
            this.systemModstamp = logRecord.systemModstamp;
            this.status = logRecord.status;
            this.logUserName = logRecord.LogUser.Name;
        }
    }
}
