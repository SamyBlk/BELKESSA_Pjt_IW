package com.example.AppointmentService;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long clientId;
	private Long professionalId;
	private LocalDateTime dateTime;
	private String status;

	// Getters and setters
}

interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}

@Service
class AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;

	public Appointment addAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}

	public Optional<Appointment> getAppointment(Long id) {
		return appointmentRepository.findById(id);
	}

	public Appointment updateAppointment(Long id, Appointment appointment) {
		appointment.setId(id);
		return appointmentRepository.save(appointment);
	}

	public void deleteAppointment(Long id) {
		appointmentRepository.deleteById(id);
	}

	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}
}

@RestController
@RequestMapping("/appointments")
class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@PostMapping
	public Appointment addAppointment(@RequestBody Appointment appointment) {
		return appointmentService.addAppointment(appointment);
	}

	@GetMapping("/{id}")
	public Optional<Appointment> getAppointment(@PathVariable Long id) {
		return appointmentService.getAppointment(id);
	}

	@PutMapping("/{id}")
	public Appointment updateAppointment(@PathVariable Long id, @RequestBody Appointment appointment) {
		return appointmentService.updateAppointment(id, appointment);
	}

	@DeleteMapping("/{id}")
	public void deleteAppointment(@PathVariable Long id) {
		appointmentService.deleteAppointment(id);
	}

	@GetMapping
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
}

@SpringBootApplication
public class AppointmentServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppointmentServiceApplication.class, args);
	}
}
