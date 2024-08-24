package com.party.party.service;

import com.party.party.model.Book;
import com.party.party.repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveBooking(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getBookingsByEmail(String email) {
        return bookRepository.findByEmail(email);
    }

    public List<Book> getAllBookings() {
        return bookRepository.findAll();
    }

    public void deleteBooking(Long id) {
        bookRepository.deleteById(id);
    }
}
