package com.party.party.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.party.party.model.Snack;

@Repository
public interface SnackRepository extends JpaRepository<Snack, Long> {
}
