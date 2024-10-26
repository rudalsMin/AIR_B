package com.air.AIR.service;

import java.util.List;

import com.air.AIR.domain.FlightsDTO;

public interface FlightsService {

	public boolean registerFlights(FlightsDTO params);
	public List<FlightsDTO> getFlightsList(FlightsDTO param);
}
