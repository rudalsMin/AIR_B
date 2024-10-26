package com.air.AIR.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class FlightsDTO {

	private int flight_id;
	private String departure_airport;
	private String arrival_airport;
	private LocalDateTime departure_time;
	private LocalDateTime arrival_time;
	private LocalDate departure_date;
	private LocalDate arrival_date;
	private int aircraft_id;
	
	public int getFlight_id() {
		return flight_id;
	}
	public void setFlight_id(int flight_id) {
		this.flight_id = flight_id;
	}
	public String getDeparture_airport() {
		return departure_airport;
	}
	public void setDeparture_airport(String departure_airport) {
		this.departure_airport = departure_airport;
	}
	public String getArrival_airport() {
		return arrival_airport;
	}
	public void setArrival_airport(String arrival_airport) {
		this.arrival_airport = arrival_airport;
	}
	public LocalDateTime getDeparture_time() {
		return departure_time;
	}
	public void setDeparture_time(LocalDateTime departure_time) {
		this.departure_time = departure_time;
	}
	public LocalDateTime getArrival_time() {
		return arrival_time;
	}
	public void setArrival_time(LocalDateTime arrival_time) {
		this.arrival_time = arrival_time;
	}
	public LocalDate getDeparture_date() {
		return departure_date;
	}
	public void setDeparture_date(LocalDate departure_date) {
		this.departure_date = departure_date;
	}
	public LocalDate getArrival_date() {
		return arrival_date;
	}
	public void setArrival_date(LocalDate arrival_date) {
		this.arrival_date = arrival_date;
	}
	public int getAircraft_id() {
		return aircraft_id;
	}
	public void setAircraft_id(int aircraft_id) {
		this.aircraft_id = aircraft_id;
	}
}
