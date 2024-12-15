package com.example.userservice.controller;

import com.example.userservice.model.Users;
import com.example.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public Users registerUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody Users user) {
        Users existingUser = userRepository.findByNameAndPassword(user.getName(), user.getPassword());
        if (existingUser != null) {
            return existingUser;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }


    /*@PostMapping
    public Users createUser(@RequestBody Users user) {
        return userRepository.save(user);
    }*/

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        // Recherche de l'utilisateur par ID
        return userRepository.findById(id)
                .map(user -> ResponseEntity.ok().body(user)) // Si trouvé, renvoie l'utilisateur avec un statut 200
                .orElse(ResponseEntity.notFound().build()); // Si non trouvé, renvoie un statut 404
    }

    @PutMapping("/{id}")
    public Users updateUser(@PathVariable Long id, @RequestBody Users userDetails) {
        Users user = userRepository.findById(id).orElseThrow();
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setRole(userDetails.getRole());
        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}