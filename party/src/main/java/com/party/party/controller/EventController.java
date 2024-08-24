package com.party.party.controller;

import com.party.party.model.Event;
import com.party.party.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event savedEvent = eventService.saveEvent(event);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id);
        if (event != null) {
            return new ResponseEntity<>(event, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        Event event = eventService.updateEvent(id, updatedEvent);
        if (event != null) {
            return new ResponseEntity<>(event, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        boolean isDeleted = eventService.deleteEvent(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
// package com.party.party.controller;

// import com.party.party.model.Event;
// import com.party.party.service.EventService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpHeaders;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/events")
// public class EventController {

//     @Autowired
//     private EventService eventService;

//     @GetMapping
//     public List<Event> getAllEvents() {
//         return eventService.getAllEvents();
//     }

//     @PostMapping
//     public ResponseEntity<Event> createEvent(@RequestBody Event event) {
//         Event savedEvent = eventService.saveEvent(event);
//         return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Event> getEventById(@PathVariable Long id) {
//         Event event = eventService.getEventById(id);
//         if (event != null) {
//             return new ResponseEntity<>(event, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @GetMapping("/{id}/image")
//     public ResponseEntity<String> getEventImage(@PathVariable Long id) {
//         Event event = eventService.getEventById(id);
//         if (event != null && event.getImage() != null) {
//             HttpHeaders headers = new HttpHeaders();
//             headers.add(HttpHeaders.CONTENT_TYPE, "image/jpeg");
//             return new ResponseEntity<>(event.getImage(), headers, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
// }
