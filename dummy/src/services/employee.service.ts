import * as employeeDao from '../daos/employee.dao';
import { Tickets } from '../models/Tickets';
import { Replies } from '../models/Replies';
import { HistoryPost } from '../models/employees/HistoryPost';
import { PostForum } from '../models/employees/PostForum';

// Get all posts/tickets
export function getAllTicketsPosts(): Promise<Tickets[]> {
    return employeeDao.getAllTicketsPosts();
}

// Get posts/tickets request by id
export function getTicketsPostById(id: number): Promise<Tickets> {
    return employeeDao.getTicketsPostById(id);
}

// Filter tickets by type
export function filterTicketsByType(ticketStatus: number): Promise<Tickets> {
    return employeeDao.filterTicketsByType(ticketStatus);
}

// See all previous posts by user
export function getHistoryPosts(userId: number): Promise<HistoryPost> {
    return employeeDao.getHistoryPosts(userId);
}

// Get replies
export function getReplies(rid: number): Promise<Replies> {
    return employeeDao.getReplies(rid);
}

// Post tickets/posts
export function savePost(post: PostForum): Promise<PostForum> {
    const newPostForum = new PostForum(
        undefined,
        post.statusId,
        post.userId,
        post.adminId,
        new Date(),
        null,
        post.title,
        post.message
    );
    if(
        post.statusId &&
        post.userId &&
        post.adminId &&
        post.title &&
        post.message
    ) {
        return employeeDao.savePost(newPostForum);
    } else {
        // console.log(newReimbursement);
        return new Promise((resolve, reject) => reject(422));
    }
}