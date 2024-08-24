package com.party.party.service;

import com.party.party.model.Place;
import com.party.party.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceService {

    @Autowired
    private PlaceRepository placeRepository;

    public List<Place> getAllPlaces() {
        return placeRepository.findAll();
    }

    public Place addPlace(Place place) {
        return placeRepository.save(place);
    }

    public Place getPlaceById(Long id) {
        return placeRepository.findById(id).orElse(null);
    }

    public Place updatePlace(Long id, Place updatedPlace) {
        return placeRepository.findById(id).map(place -> {
            place.setPlacename(updatedPlace.getPlacename());
            place.setPlaceimage(updatedPlace.getPlaceimage());
            // Add other fields that need to be updated
            return placeRepository.save(place);
        }).orElse(null);
    }

    public boolean deletePlace(Long id) {
        if (placeRepository.existsById(id)) {
            placeRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}