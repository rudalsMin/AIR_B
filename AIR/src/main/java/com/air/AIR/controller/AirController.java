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
	
	@GetMapping("/join")
	public String join() {
		
		return "/join";
	}


	@GetMapping("home")
	public String home() {
		
		return "/index";
	}
	
	@GetMapping("login")
	public String login() {
		
		return "/login";
	}
	
	@GetMapping("memInformation")
	public String memInformation() {
		
		return "/memInformation";
	}
	@GetMapping("nonMem")
	public String nonMem() {
		
		return "/nonM";
	}
	@GetMapping("seatAssign")
	public String seatAssign() {
		
		return "/seatAssign";
	}
	@GetMapping("seat-assign")
	public String seat_assign() {
		
		return "/seat-assign2";
	}
}
