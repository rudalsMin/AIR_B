package com.air.AIR.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AirController {
	
	@GetMapping("flight")
	public String flight() {
		
		return "/flightDeparture";
	}
	@GetMapping("arrival")
	public String arrival() {
		
		return "/flightArrival";
	}
	
	@GetMapping("/booking")
	public String booking() {
	
		return "/booking";
	}
	
	@GetMapping("/payment")
	public String payment() {
		
		return "/payment";
	}

	@GetMapping("home")
	public String home() {
		
		return "/index";
	}
	
	@GetMapping("login")
	public String login() {
		
		return "/login";
	}
	
}
