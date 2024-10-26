package com.air.AIR.domain;

public class SeatsDTO {

	private int seat_id;
	private int aircraft_id;
	private String seat_number;
	private int seat_class;
	private int is_available;
	
	public int getSeat_id() {
		return seat_id;
	}
	public void setSeat_id(int seat_id) {
		this.seat_id = seat_id;
	}
	public int getAircraft_id() {
		return aircraft_id;
	}
	public void setAircraft_id(int aircraft_id) {
		this.aircraft_id = aircraft_id;
	}
	public String getSeat_number() {
		return seat_number;
	}
	public void setSeat_number(String seat_number) {
		this.seat_number = seat_number;
	}
	public int getSeat_class() {
		return seat_class;
	}
	public void setSeat_class(int seat_class) {
		this.seat_class = seat_class;
	}
	public int getIs_available() {
		return is_available;
	}
	public void setIs_available(int is_available) {
		this.is_available = is_available;
	}
	
}
