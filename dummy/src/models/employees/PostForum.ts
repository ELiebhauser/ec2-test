export class PostForum {
    postId: number;
    statusId: number;
    userId: number;
    adminId: number;
    datePosted: Date | string;
    dateResolved: Date | string;
    title: string;
    message: string;

    static from(obj:PostForumRow): PostForum {
        const postForum = new PostForum(
            obj.card_id,
            obj.ticket_status,
            obj.user_id,
            obj.admin_id,
            new Date(obj.entry_time),
            new Date(obj.date_resolved),
            obj.title,
            obj.message
        );
        return postForum;
    }

    constructor(
        postId: number,
        statusId: number,
        userId: number,
        adminId: number,
        datePosted: Date,
        dateResolved: Date,
        title: string,
        message: string
    )
    {
    this.postId = postId;
    this.statusId = statusId;
    this.userId = userId;
    this.adminId = adminId;
    this.datePosted = datePosted;
    this.dateResolved = dateResolved;
    this.title = title;
    this.message = message;
    }
}

export interface PostForumRow {
    card_id: number;
    ticket_status: number;
    user_id: number;
    admin_id: number;
    entry_time: Date | string;
    date_resolved: Date | string;
    title: string;
    message: string;
}