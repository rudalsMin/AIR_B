package com.air.AIR.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.air.AIR.domain.FlightsDTO;

@Mapper
public interface FlightsMapper {

	int insertFlights(FlightsDTO params);
	
	List<FlightsDTO> selectFlights(FlightsDTO params);
}
