/**Reimbursement model for test.component.tsx */
export interface Reimburse {
    reimbId?: number;
    amount?: number;
    sumitDate: Date | string;
    resolvedDate: Date | string ;
    description?: string;
    reciept?: File;
    authorId?: number;
    resolverId?:number;
    statusId?: number;
    type?: number;
};