export class Replies {
    rid: number;
    ticketPostId: number;
    timestamp: Date | string;
    userId: number;
    replies: string;

    static from(obj: RepliesRow): Replies {
        const replies = new Replies(
            obj.rid,
            obj.tpid,
            new Date(obj.entry_time),
            obj.user_id,
            obj.replies
        );
        return replies;
    }

    constructor(
        rid: number,
        ticketPostId: number,
        timestamp: Date | string,
        userId: number,
        replies: string
        )
        {
        this.rid = rid;
        this.ticketPostId = ticketPostId;
        this.timestamp = timestamp;
        this.userId = userId;
        this.replies = replies;
    }
}

export interface RepliesRow {
    rid: number;
    tpid: number;
    entry_time: string;
    user_id: number;
    replies: string;
}