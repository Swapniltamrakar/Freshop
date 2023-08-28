package com.freshop.service;

import java.util.List;

import com.freshop.dto.SuppliedProductRequestDto;
import com.freshop.dto.SuppliedProductResponseDto;

public interface SuppliedProductService {

	public List<SuppliedProductResponseDto> getAllSuppliedProducts();
	public boolean addSuppliedProducts(SuppliedProductRequestDto dto);
	
}
