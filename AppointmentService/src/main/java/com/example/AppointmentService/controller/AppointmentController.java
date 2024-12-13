package com.example.appointmentservice.controller;

import com.example.appointmentservice.model.Appointment;
import com.example.appointmentservice.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentRepository appointmentRepository;

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @GetMapping("/client/{id}")
    public List<Appointment> getAppointmentsByClient(@PathVariable Long id) {
        return appointmentRepository.findByClientId(id);
    }

    @GetMapping("/professional/{id}")
    public List<Appointment> getAppointmentsByProfessional(@PathVariable Long id) {
        return appointmentRepository.findByProfessionalId(id);
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @PutMapping("/{id}")
    public Appointment updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow();
        appointment.setAppointmentTime(appointmentDetails.getAppointmentTime());
        appointment.setStatus(appointmentDetails.getStatus());
        return appointmentRepository.save(appointment);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        appointmentRepository.deleteById(id);
    }
}