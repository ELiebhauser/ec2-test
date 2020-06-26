/**Global Model for All commnets */
export interface Replies {
    rid: number;
    ticketPostId: number;
    timestamp: Date | string;
    userId: number;
    replies: string;
};