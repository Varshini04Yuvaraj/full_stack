package com.party.party.repository;
// ackage com.backend.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.party.model.Sign;

// import com.backend.backend.model.Signinmodel;
import java.util.Optional;

public interface SignRepository extends JpaRepository<Sign, Long> {
    public Sign findByUsername(String username);
    public Sign findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<Sign> findByEmailAndPassword(String email, String password);
}

// import com.party.party.model.Sign;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import java.util.Optional;

// @Repository
// public interface SignRepository extends JpaRepository<Sign, Long> {
//     boolean existsByEmail(String email);
//     Optional<Sign> findByEmail(String email);
// }
