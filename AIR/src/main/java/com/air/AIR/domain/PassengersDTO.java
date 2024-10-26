package com.air.AIR.domain;

import java.time.LocalDate;

public class PassengersDTO {

	private int passenger_id;
	private String first_name;
	private String last_name;
	private String english_first_name;
	private String english_last_name;
	private String email;
	private String phone_number;
	private LocalDate birth;
	private String id;
	private String password;
	private String confirm_password;
	private String gender;
	
	
	
	@Override
	public String toString() {
		return "PassengersDTO [passenger_id=" + passenger_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", english_first_name=" + english_first_name + ", english_last_name=" + english_last_name + ", email="
				+ email + ", phone_number=" + phone_number + ", birth=" + birth + ", id=" + id + ", password="
				+ password + ", confirm_password=" + confirm_password + ", gender=" + gender + "]";
	}
	public int getPassenger_id() {
		return passenger_id;
	}
	public void setPassenger_id(int passenger_id) {
		this.passenger_id = passenger_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEnglish_first_name() {
		return english_first_name;
	}
	public void setEnglish_first_name(String english_first_name) {
		this.english_first_name = english_first_name;
	}
	public String getEnglish_last_name() {
		return english_last_name;
	}
	public void setEnglish_last_name(String english_last_name) {
		this.english_last_name = english_last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public LocalDate getBirth() {
		return birth;
	}
	public void setBirth(LocalDate birth) {
		this.birth = birth;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirm_password() {
		return confirm_password;
	}
	public void setConfirm_password(String confirm_password) {
		this.confirm_password = confirm_password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
}
