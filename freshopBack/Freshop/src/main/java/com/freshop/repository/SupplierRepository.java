package com.freshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freshop.entity.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long>{

	
}
