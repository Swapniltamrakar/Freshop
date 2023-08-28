package com.freshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freshop.entity.SuppliedProducts;

public interface SuppliedProductRepository extends JpaRepository<SuppliedProducts, Long>{

}
