package com.party.party.repository;

import com.party.party.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByEmail(String email); 
}

// package com.party.party.repository;

// import com.party.party.model.Book;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// @Repository
// public interface BookRepository extends JpaRepository<Book, Long> {
//     Book findByEmail(String email); 
// }
