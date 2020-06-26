/**Test remote for test.component.tsx */
import { internalAxios, authAxios } from './internal-axios';
import { Authenticate } from '../models/test-models/Authenticate';
import { Reimburse } from '../models/test-models/Reimburse';
import { User } from '../models/test-models/User';


// Employee: Add Reimbursement
export const getAllEmployeeReimburse = async () => {
    const response = await internalAxios.get<Reimburse[]>('/employees/reimburse');
    return response.data.map(reimburse => {
        reimburse.sumitDate = new Date(reimburse.sumitDate); // Replace string birthdate with Date object
        reimburse.resolvedDate = new Date(reimburse.resolvedDate);
        console.log(response);
        return reimburse;
    });
    
}

// // Manager: Approval
// export const updateAllManagerRequests = async (approval: ApprovalPatch) => {
//     const response = await internalAxios.patch('/managers/approvals', approval);
//     // return true;
// }



// Account: Get from reimburse table
export const getAllReimbursements = async () => {
    const response = await internalAxios.get<Reimburse[]>('/employees/dashboard');
    return response.data.map(dashboard => {
        dashboard.sumitDate = new Date(dashboard.sumitDate); // Replace string birthdate with Date object
        dashboard.resolvedDate = new Date(dashboard.resolvedDate);
        return dashboard;
    });
}

// Account: Post to reimbursement table  
export const createUser = async (reimburse: any) => {
  const response = await internalAxios.post('/employees/reimburse', reimburse);
  return response;
}



// Authenication:request token
export const createToken = async (login: Authenticate) => {
    const response = await internalAxios.post('/authentication/login', login);
    return response; 
}


// Authenication: get user data with token
export const getAllUserTable = async () => {
    const response = await authAxios.get<User[]>('/users');
    return response.data.map(user => {
        return user;
    });
}