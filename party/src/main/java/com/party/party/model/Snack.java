package com.party.party.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Snack {
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
     private String snackname;
     private String snackimage;
     
    public Snack() {
        
    }
    
    public Snack(Long id, String snackname, String snackimage) {
        this.id = id;
        this.snackname = snackname;
        this.snackimage = snackimage;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getSnackname() {
        return snackname;
    }
    public void setSnackname(String snackname) {
        this.snackname = snackname;
    }
    public String getSnackimage() {
        return snackimage;
    }
    public void setSnackimage(String snackimage) {
        this.snackimage = snackimage;
    }
     

}
