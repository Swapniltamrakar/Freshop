package com.freshop.service;

import java.util.List;

import com.freshop.dto.SupplierIdDto;
import com.freshop.dto.SupplierRequestDto;
import com.freshop.dto.SupplierResponseDto;

public interface SupplierService {

	public SupplierResponseDto findBySid(SupplierIdDto dto);
	
	public SupplierResponseDto addSupplier(SupplierRequestDto dto);
	
	public List<SupplierResponseDto> getAllSupplier();
	
}
