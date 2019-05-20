package com.guestbook.app.Dao;

import org.springframework.data.repository.Repository;

import com.guestbook.app.Models.GuestDetails;

public interface GuestBookDao extends Repository<GuestDetails, String>{

}
