package models;

import java.util.ArrayList;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

public class Comment {
	@Id//id is set to be the primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)//auto-generated
	private int id;
	@OneToMany
	@JoinTable(name="Comments", joinColumns = { @JoinColumn(name="comment_id") },
			inverseJoinColumns = { @JoinColumn(name="post_id")})
	private int post_id;
	private ArrayList<Comment> comments=new ArrayList<Comment>();
	
	public Comment(int post_id) {
		super();
		this.post_id = post_id;
	}
	public int getPost_id() {
		return post_id;
	}
	public ArrayList<Comment> getComments() {
		return comments;
	}
	public ArrayList<Comment> addComment(Comment comm){
		comments.add(comm);
		return comments;
	}
	public void setComments(ArrayList<Comment> comments) {
		this.comments = comments;
	}
	@Override
	public String toString() {
		return "Comment [id=" + id + ", post_id=" + post_id + ", comments=" + comments + "]";
	}
	
}
