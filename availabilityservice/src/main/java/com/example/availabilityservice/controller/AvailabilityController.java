package com.example.availabilityservice.controller;

import com.example.availabilityservice.model.Availability;
import com.example.availabilityservice.repository.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/availabilities")
public class AvailabilityController {
    @Autowired
    private AvailabilityRepository availabilityRepository;

    @GetMapping
    public List<Availability> getAllAvailabilities() {
        return availabilityRepository.findAll();
    }

    @GetMapping("/professional/{id}")
    public List<Availability> getAvailabilityByProfessional(@PathVariable Long id) {
        return availabilityRepository.findByProfessionalId(id);
    }

    @PostMapping
    public Availability createAvailability(@RequestBody Availability availability) {
        return availabilityRepository.save(availability);
    }

    @PutMapping("/{id}")
    public Availability updateAvailability(@PathVariable Long id, @RequestBody Availability availabilityDetails) {
        Availability availability = availabilityRepository.findById(id).orElseThrow();
        availability.setStartTime(availabilityDetails.getStartTime());
        availability.setEndTime(availabilityDetails.getEndTime());
        return availabilityRepository.save(availability);
    }

    @DeleteMapping("/{id}")
    public void deleteAvailability(@PathVariable Long id) {
        availabilityRepository.deleteById(id);
    }
}