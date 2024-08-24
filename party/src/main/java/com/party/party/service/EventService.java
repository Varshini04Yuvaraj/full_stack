package com.party.party.service;

import com.party.party.model.Event;
import com.party.party.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    public Event updateEvent(Long id, Event updatedEvent) {
        return eventRepository.findById(id).map(event -> {
            event.setName(updatedEvent.getName());
            event.setImage(updatedEvent.getImage());
            // Add other fields that need to be updated
            return eventRepository.save(event);
        }).orElse(null);
    }

    public boolean deleteEvent(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
// package com.party.party.service;

// import com.party.party.model.Event;
// import com.party.party.repository.EventRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class EventService {

//     @Autowired
//     private EventRepository eventRepository;

//     public List<Event> getAllEvents() {
//         return eventRepository.findAll();
//     }

//     public Event saveEvent(Event event) {
//         return eventRepository.save(event);
//     }

//     public Event getEventById(Long id) {
//         return eventRepository.findById(id).orElse(null);
//     }
// }
