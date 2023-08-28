package com.freshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshop.dto.SignUpDato;
import com.freshop.dto.UserRequestDto;
import com.freshop.dto.UserResponseDto;
import com.freshop.entity.User;
import com.freshop.exceptions.CustomException;
import com.freshop.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	public UserRepository userRepo;

	@Autowired 
	public ModelMapper mapper;
	
	@Override
	public User getAllUsers(String email, String password) {
		User user =userRepo.findByEmailAndPassword(email, password).orElseThrow(()->new CustomException("User Not Found"));
		
		return user;
	}

	@Override
	public boolean addUser(SignUpDato user) {
		boolean status=false;
		User newUser = new User(user.getUserName(),user.getRole(),user.getEmail(),user.getPassword(),user.getAddress(),user.getStatus(),user.getMobileNumber());
		User userdata = userRepo.save(newUser);
		if(userdata!=null) {
			status=true;
		}
		return status;
	}

	@Override
	public List<UserResponseDto> findByRole() {
		List<UserResponseDto> dto =new ArrayList<>();
		List<User> users= userRepo.findByRole("admin");
		users.forEach((v)->dto.add(mapper.map(v, UserResponseDto.class)));
		return dto;
	}

	@Override
	public boolean updateUser(UserRequestDto dto) {
		boolean status = false;
		User user = new User(dto.getUserId(),dto.getUserName(), dto.getRole(), dto.getEmail(),dto.getPassword(),dto.getAddress(),dto.getStatus(),dto.getMobileNumber());
		User newUser = userRepo.save(user);
		if(newUser!=null) {status = true;}
		return status;
	}
	
	

}


