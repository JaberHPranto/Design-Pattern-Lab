/* In Template method there will be a structure which all sub classes have to follow. Sub-classes can give their own implementations to some methods(abstract)  without disturbing the template rules */

class AuditTrail {
  record() {
    console.log("Added to bank record");
  }
}

// Template
abstract class Task {
  protected auditTrail: AuditTrail;
  constructor(auditTrail: AuditTrail) {
    this.auditTrail = auditTrail;
  }

  execute() {
    this.auditTrail.record();
    this.doExecute();
  }

  protected abstract doExecute(): void;
}

class TransferMoneyTask extends Task {
  constructor(auditTrail: AuditTrail) {
    super(auditTrail);
  }
  protected doExecute(): void {
    console.log("Money Transferred Successfully");
  }
}
class GenerateReportTask extends Task {
  constructor(auditTrail: AuditTrail) {
    super(auditTrail);
  }
  protected doExecute(): void {
    console.log("Report Generated Successfully");
  }
}

const newAudit: AuditTrail = new AuditTrail();
const task1 = new TransferMoneyTask(newAudit);
task1.execute();
const task2 = new GenerateReportTask(newAudit);
task2.execute();
