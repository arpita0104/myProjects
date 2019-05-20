package com.guestbook.app.Controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guestbook.app.Models.GuestDetails;
import com.guestbook.app.Dao.GuestBookDao;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class GuestBookController {
	
	@Autowired
	GuestBookDao guestBookDao;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/guests/register")
	public void registerGuest(@Valid @RequestBody GuestDetails guestData) {
		System.out.println("Create Customer: " + guestData.getFirstName());
		return guestBookDao.save(guestData);
	}
	
	
	  @GetMapping("/guests") 
	  public List<GuestDetails> getGuestList() {
	  System.out.println("Get all Customers...");
	  
	  return guestBookDao.findAll(); }
	  
	  @DeleteMapping("/customers/reject") 
	  public void rejectCustomerEntry(@RequestBody Integer userId) {
	  System.out.println("Delete All Customers..."); guestBookDao.deleteAll(); }
	 
	
}
