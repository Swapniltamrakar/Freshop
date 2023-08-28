package com.freshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignUpDato {

	private String userName;
	private String email;
	private String password;
	private String address;
	private String mobileNumber;
	private String role;
	private String status;
}
