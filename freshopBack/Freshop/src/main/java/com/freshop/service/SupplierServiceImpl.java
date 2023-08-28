package com.freshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshop.dto.SupplierIdDto;
import com.freshop.dto.SupplierRequestDto;
import com.freshop.dto.SupplierResponseDto;
import com.freshop.entity.Supplier;
import com.freshop.exceptions.CustomException;
import com.freshop.repository.SupplierRepository;
@Service
@Transactional
public class SupplierServiceImpl implements SupplierService {

	@Autowired
	public SupplierRepository supplierReppo;
	
	@Autowired
	public ModelMapper mapper;
	
	@Override
	public SupplierResponseDto findBySid(SupplierIdDto dto) {
		Supplier sup = supplierReppo.findById(dto.getSid()).orElseThrow(()->new CustomException("Supplier Not found"));
		return mapper.map(sup,SupplierResponseDto.class);
	}

	@Override
	public SupplierResponseDto addSupplier(SupplierRequestDto dto) {
		Supplier sup = new Supplier(dto.getSid(), dto.getSupplierFirstName(), dto.getSupplierLastName(), dto.getAddress(),dto.getLn(), dto.getStatus());
		Supplier s = supplierReppo.save(sup);
		return mapper.map(s, SupplierResponseDto.class);
	}

	@Override
	public List<SupplierResponseDto> getAllSupplier() {
		List<SupplierResponseDto> list = new ArrayList<>();
		supplierReppo.findAll().forEach((v)->list.add(mapper.map(v,SupplierResponseDto.class)));
		return list;
	}
	
	

}
