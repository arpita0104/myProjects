package com.guestbook.app.Models;

import javax.persistence.*;

@Entity  
@Table(name="GuestDetails") 
public class GuestDetails {

	@Id
	private String userId;
	
	private String firstName;
	
	private String lastName;
	
	private int contactNo;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}
}
