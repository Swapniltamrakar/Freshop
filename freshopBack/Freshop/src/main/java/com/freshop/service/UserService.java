package com.freshop.service;

import java.util.List;

import com.freshop.dto.SignUpDato;
import com.freshop.dto.UserRequestDto;
import com.freshop.dto.UserResponseDto;
import com.freshop.entity.User;

public interface UserService {

	public User getAllUsers(String email,String password);
	public boolean addUser(SignUpDato user);
	public List<UserResponseDto> findByRole();
	public boolean updateUser(UserRequestDto  dto);
}
