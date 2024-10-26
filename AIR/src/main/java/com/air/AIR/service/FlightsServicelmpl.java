package com.air.AIR.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.air.AIR.domain.FlightsDTO;
import com.air.AIR.mapper.FlightsMapper;

@Service
public class FlightsServicelmpl implements FlightsService{
	
	@Autowired
	private FlightsMapper flightsMapper;
	
	@Override
	public boolean registerFlights(FlightsDTO params) {
		try{
			int result = flightsMapper.insertFlights(params);
			return result > 0;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@Override
	public List<FlightsDTO> getFlightsList(FlightsDTO params){
		return flightsMapper.selectFlights(params);
	}
}	
