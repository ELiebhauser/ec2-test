/**Global Model for All tickets */
export interface Tickets {
    ticketId: number;
    title: string;
    datePosted: Date | string;
    dateResolved: Date | string;
    userFirstName: string,
    userLastName: string,
    img?: File; //!implement img storage
    message: string;
    ticketStatus: number;
    adminId: number;
};