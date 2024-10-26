package com.air.AIR.service;

import java.util.List;

import com.air.AIR.domain.PassengersDTO;

public interface PassengersService {

	public boolean registerPassengers(PassengersDTO params);
	public List<PassengersDTO> getPassengersList(PassengersDTO params);
}
