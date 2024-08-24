package com.party.party.controller;

import com.party.party.model.Book;
import com.party.party.service.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public Book createBooking(@RequestBody Book book) {
        return bookService.saveBooking(book);
    }

    @GetMapping("/{email}")
    public List<Book> getBookingsByEmail(@PathVariable String email) {
        return bookService.getBookingsByEmail(email);
    }

    @GetMapping
    public List<Book> getAllBookings() {
        return bookService.getAllBookings();
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookService.deleteBooking(id);
    }
}

// package com.party.party.controller;

// import com.party.party.model.Book;
// import com.party.party.service.BookService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/bookings")
// public class BookController {

//     @Autowired
//     private BookService bookService;

//     @PostMapping
//     public Book createBooking(@RequestBody Book book) {
//         return bookService.saveBooking(book);
//     }

//     @GetMapping("/{email}")
//     public Book getBookingByEmail(@PathVariable String email) {
//         return bookService.getBookingByEmail(email);
//     }

//     @GetMapping
//     public List<Book> getAllBookings() {
//         return bookService.getAllBookings();
//     }

//     @DeleteMapping("/{id}")
//     public void deleteBooking(@PathVariable Long id) {
//         bookService.deleteBooking(id);
//     }
// }
