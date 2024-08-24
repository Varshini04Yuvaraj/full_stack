package com.party.party.service;

import com.party.party.model.Snack;
import com.party.party.repository.SnackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SnackService {

    @Autowired
    private SnackRepository snackRepository;

    public List<Snack> getAllSnacks() {
        return snackRepository.findAll();
    }

    public Snack saveSnack(Snack snack) {
        return snackRepository.save(snack);
    }

    public Snack getSnackById(Long id) {
        return snackRepository.findById(id).orElse(null);
    }

    public Snack updateSnack(Long id, Snack updatedSnack) {
        return snackRepository.findById(id).map(snack -> {
            snack.setSnackname(updatedSnack.getSnackname());
            snack.setSnackimage(updatedSnack.getSnackimage());
            // Add other fields that need to be updated
            return snackRepository.save(snack);
        }).orElse(null);
    }

    public boolean deleteSnack(Long id) {
        if (snackRepository.existsById(id)) {
            snackRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}