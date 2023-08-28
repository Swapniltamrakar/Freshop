package com.freshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {


	private Long userId;
	private String userName;
	private String role;
	private String email;
	private String address;
	private String status;
	private String mobileNumber;
	private String password;
	
}
