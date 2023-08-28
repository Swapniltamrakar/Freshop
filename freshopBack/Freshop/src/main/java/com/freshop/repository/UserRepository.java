package com.freshop.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freshop.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	public Optional<User> findByEmailAndPassword(String email,String password);
	public List<User> findByRole(String role);
	
}
