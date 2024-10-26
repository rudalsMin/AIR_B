package com.air.AIR.domain;

import java.time.LocalDate;

public class formDTO {

	private int flight_id;
	private String departure_airport;
	private String arrival_airport;
	private LocalDate departure_date;
	private LocalDate arrival_date;
	private int num_passengers;
	private int seat_class;
	
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
	public int getNum_passengers() {
		return num_passengers;
	}
	public void setNum_passengers(int num_passengers) {
		this.num_passengers = num_passengers;
	}
	public int getSeat_class() {
		return seat_class;
	}
	public void setSeat_class(int seat_class) {
		this.seat_class = seat_class;
	}
}
