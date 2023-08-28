package com.freshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshop.dto.SuppliedProductRequestDto;
import com.freshop.dto.SuppliedProductResponseDto;
import com.freshop.entity.SuppliedProducts;
import com.freshop.repository.SuppliedProductRepository;
@Service
@Transactional
public class SuppliedProductServiceImpl implements SuppliedProductService {

	@Autowired
	public SuppliedProductRepository suplyRepo;
	
	@Autowired
	public ModelMapper mapper;
	
	@Override
	public List<SuppliedProductResponseDto> getAllSuppliedProducts() {
		List<SuppliedProductResponseDto> list = new ArrayList<>();
		suplyRepo.findAll().forEach((v)->list.add(mapper.map(v, SuppliedProductResponseDto.class)));
		return list;
	}

	@Override
	public boolean addSuppliedProducts(SuppliedProductRequestDto dto) {
		boolean status = false;
		SuppliedProducts newProduct = new SuppliedProducts(dto.getSid(),dto.getPid(),dto.getSrc(),dto.getTitle(),dto.getDescription(),dto.getPrice(),dto.getCatagory(),dto.getStatus());
		SuppliedProducts prod = suplyRepo.save(newProduct);
		if(prod!=null) {
			status = true;
		}
		return status;
	}

}
