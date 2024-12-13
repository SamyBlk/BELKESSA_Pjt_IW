package com.example.gatewayservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayserviceApplication.class, args);
	}

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("userService", r -> r.path("/users/**").uri("lb://userservice"))
				.route("availabilityService", r -> r.path("/availabilities/**").uri("lb://availabilityservice"))
				.route("appointmentService", r -> r.path("/appointments/**").uri("lb://appointmentservice"))
				.build();
	}
}
