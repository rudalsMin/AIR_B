package com.air.AIR.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.air.AIR.domain.FlightsDTO;
import com.air.AIR.service.FlightsService;

@Controller
public class FlightsController {

	@Autowired
	private FlightsService flightsService;
	
	@GetMapping("/index")
	public String index(Model model) {
		FlightsDTO pd = new FlightsDTO();
		
		model.addAttribute("Flights",pd);
		
		return "/index"; 
	}
}
