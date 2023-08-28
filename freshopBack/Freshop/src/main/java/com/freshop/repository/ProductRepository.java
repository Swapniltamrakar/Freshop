package com.freshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freshop.entity.Products;

public interface ProductRepository extends JpaRepository<Products, Long>{

	
	
}
