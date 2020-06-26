export class HistoryPost {
    userId: number;
    title: string;
    datePosted: Date | string;
    dateResolved: Date | string;
    ticketStatus: number;

    static from(obj: HistoryPostRow): HistoryPost {
        const historyPost = new HistoryPost(
            obj.uid,
            obj.title,
            new Date(obj.entry_time),
            new Date(obj.date_resolved),
            obj.ticket_status
        );
        return historyPost;
    }

    constructor(
        userId: number,
        title: string,
        datePosted: Date | string,
        dateResolved: Date | string,
        ticketStatus: number
        )
        {
        this.userId = userId;
        this.title = title;
        this.datePosted = datePosted;
        this.dateResolved = dateResolved;
        this.ticketStatus = ticketStatus;
    }
}

export interface HistoryPostRow {
    uid: number;
    title: string;
    entry_time: string;
    date_resolved: string;
    ticket_status: number;
}