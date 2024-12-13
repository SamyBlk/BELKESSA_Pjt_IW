package com.example.availabilityservice.repository;

import com.example.availabilityservice.model.Availability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    List<Availability> findByProfessionalId(Long professionalId);
}