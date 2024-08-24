package com.party.party.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Place {
      @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String placename;
    private String placeimage;
    
    public Place() {
    }
    public Place(Long id, String placename, String placeimage) {
        this.id = id;
        this.placename = placename;
        this.placeimage = placeimage;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getPlacename() {
        return placename;
    }
    public void setPlacename(String placename) {
        this.placename = placename;
    }
    public String getPlaceimage() {
        return placeimage;
    }
    public void setPlaceimage(String placeimage) {
        this.placeimage = placeimage;
    }
    

}
