package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @Entity - Defines that a class can have its persistence managed by a
 *         JPA/Hibernate
 * @Table (optional) - Provide table level configuration
 * @Id - Defines a property as a primary key
 * @GeneratedValue - Configure auto generated value
 * @Column (optional) - Provide column level configuration
 * @Transient - Marks a column to be ignored for persistence
 */	

@Entity
@Table(name = "Users")
public class User {
	
	@Id//id is set to be the primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)//auto-generated
	private int id;
	private boolean user_type;
	@Column(unique = true)//sets unique constraint on the column "username"
	private String username;
	private String password;
	@Column(unique = true)//sets unique constraint on the column "email"
	private String email;
	private float rating_sigma=0;
	private int times_rated=0;
	
	public User(boolean user_type, String username, String password, String email) {
		super();
		this.user_type = user_type;
		this.username = username;
		this.password = password;
		this.email = email;
	}
	
	public int getId() {
		return id;
	}

	public boolean isUser_type() {
		return user_type;
	}
	public void setUser_type(boolean user_type) {
		this.user_type = user_type;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public float getRating_sigma() {
		return rating_sigma;
	}
	public int getTimes_rated() {
		return times_rated;
	}
	public void incrementTimes_rated(int times_rated) {
		this.times_rated++;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", user_type=" + user_type + ", username=" + username + ", password=" + password
				+ ", email=" + email + ", rating_sigma=" + rating_sigma + ", times_rated=" + times_rated + "]";
	}

	/*
	 *returns the average user rating calculated via the 
	 *rating_sigma as the numerator and times_rated as the 
	 *denominator 
	 */
	public float calculate_average(float rateSig, int timesRated) {
		return rateSig/timesRated;
	}

}
