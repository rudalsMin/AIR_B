package com.air.AIR.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.air.AIR.domain.PassengersDTO;
import com.air.AIR.service.PassengersService;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private PassengersService passengersService;

    @GetMapping("/passengers")
    public List<PassengersDTO> getPassengers() {
        return passengersService.getPassengersList(new PassengersDTO());
    }
}
