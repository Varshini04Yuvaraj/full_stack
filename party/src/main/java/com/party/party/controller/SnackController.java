package com.party.party.controller;

import com.party.party.model.Snack;
import com.party.party.service.SnackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class SnackController {

    @Autowired
    private SnackService snackService;

    @GetMapping
    public List<Snack> getAllSnacks() {
        return snackService.getAllSnacks();
    }

    @PostMapping
    public ResponseEntity<Snack> createSnack(@RequestBody Snack snack) {
        Snack savedSnack = snackService.saveSnack(snack);
        return new ResponseEntity<>(savedSnack, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Snack> getSnackById(@PathVariable Long id) {
        Snack snack = snackService.getSnackById(id);
        if (snack != null) {
            return new ResponseEntity<>(snack, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Snack> updateSnack(@PathVariable Long id, @RequestBody Snack updatedSnack) {
        Snack snack = snackService.updateSnack(id, updatedSnack);
        if (snack != null) {
            return new ResponseEntity<>(snack, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSnack(@PathVariable Long id) {
        boolean isDeleted = snackService.deleteSnack(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
// package com.party.party.controller;

// import org.springframework.web.bind.annotation.*;
// import com.party.party.model.Snack;
// import com.party.party.service.SnackService;
// import java.util.List;

// @RestController
// @RequestMapping("/snacks")
// public class SnackController {

//     private final SnackService snackService;

//     public SnackController(SnackService snackService) {
//         this.snackService = snackService;
//     }

//     // GET mapping to retrieve all snacks
//     @GetMapping
//     public List<Snack> getAllSnacks() {
//         return snackService.getAllSnacks();
//     }

//     // POST mapping to add a new snack
//     @PostMapping
//     public Snack createSnack(@RequestBody Snack snack) {
//         return snackService.saveSnack(snack);
//     }
// }
