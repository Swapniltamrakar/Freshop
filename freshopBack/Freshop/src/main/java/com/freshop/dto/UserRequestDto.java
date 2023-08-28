package com.freshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDto {
	private Long userId;
	private String userName;
	private String password;
	private String role;
	private String email;
	private String address;
	private String status;
	private String mobileNumber;
}
