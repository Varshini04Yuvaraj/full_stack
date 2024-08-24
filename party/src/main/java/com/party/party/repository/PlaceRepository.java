package com.party.party.repository;

import com.party.party.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
    // JpaRepository already provides basic CRUD methods
}
