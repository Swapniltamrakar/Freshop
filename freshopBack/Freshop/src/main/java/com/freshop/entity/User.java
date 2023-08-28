package com.freshop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	@NotNull
	@Column(length = 30,name = "user_name")
	private String userName;
	@NotNull
	@Column(length = 10,name = "role")
	private String role;
	@NotNull
	@Column(length = 30)
	private String email;
	@NotNull
	private String password;
	private String address;
	private String status;
	@NotNull
	@Column(length = 10,name = "mobile_number")
	private String mobileNumber;
	public User(@NotNull String userName, @NotNull String role, @NotNull String email, @NotNull String password,
			String address, String status, @NotNull String mobileNumber) {
		super();
		this.userName = userName;
		this.role = role;
		this.email = email;
		this.password = password;
		this.address = address;
		this.status = status;
		this.mobileNumber = mobileNumber;
	}
	
	
	
}
