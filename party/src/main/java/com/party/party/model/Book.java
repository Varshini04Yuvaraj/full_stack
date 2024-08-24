package com.party.party.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String address;
    private String contactnumber;
    private String date;
    private String selectedevent;
    private String selectedvenue;
    private String selectfood;
    private String email;
    private String cardnumber;
    private String cvv;
    private String paymentmethod;
    public Book() {
    }
    public String getEmail() {
        return email;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getContactnumber() {
        return contactnumber;
    }
    public void setContactnumber(String contactnumber) {
        this.contactnumber = contactnumber;
    }
    public String getSelectedevent() {
        return selectedevent;
    }
    public void setSelectedevent(String selectedevent) {
        this.selectedevent = selectedevent;
    }
    public String getSelectedvenue() {
        return selectedvenue;
    }
    public void setSelectedvenue(String selectedvenue) {
        this.selectedvenue = selectedvenue;
    }
    public String getSelectfood() {
        return selectfood;
    }
    public void setSelectfood(String selectfood) {
        this.selectfood = selectfood;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public Book(Long id, String username, String address, String contactnumber, String date, String selectedevent,
            String selectedvenue, String selectfood, String email, String cardnumber, String cvv,
            String paymentmethod) {
        this.id = id;
        this.username = username;
        this.address = address;
        this.contactnumber = contactnumber;
        this.date = date;
        this.selectedevent = selectedevent;
        this.selectedvenue = selectedvenue;
        this.selectfood = selectfood;
        this.email = email;
        this.cardnumber = cardnumber;
        this.cvv = cvv;
        this.paymentmethod = paymentmethod;
    }
    public String getCardnumber() {
        return cardnumber;
    }
    public void setCardnumber(String cardnumber) {
        this.cardnumber = cardnumber;
    }
    public String getCvv() {
        return cvv;
    }
    public void setCvv(String cvv) {
        this.cvv = cvv;
    }
    public String getPaymentmethod() {
        return paymentmethod;
    }
    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }
    
}
