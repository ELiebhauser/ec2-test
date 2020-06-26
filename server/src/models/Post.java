package models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

public class Post {
	
	@Id//id is set to be the primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)//auto-generated
	private int id;
	@OneToMany
	@JoinTable(name="Ticket_Statuses", joinColumns = { @JoinColumn(name="post_id") },
			inverseJoinColumns = { @JoinColumn(name="ticket_status_id")})
	private int ticket_status;
	private String title;
	private String body;
	
	public int getTicket_status() {
		return ticket_status;
	}
	public int getId() {
		return id;
	}
	public void setTicket_status(int ticket_status) {
		this.ticket_status = ticket_status;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	@Override
	public String toString() {
		return "Post [id=" + id + ", ticket_status=" + ticket_status + ", title=" + title + ", body=" + body + "]";
	}
}