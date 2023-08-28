package com.freshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshop.dto.ProductResponseDto;
import com.freshop.repository.ProductRepository;
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	public ModelMapper mapper;
	
	@Autowired
	public ProductRepository productRepo;
	@Override
	public List<ProductResponseDto> getAllProducts() {
		
		List<ProductResponseDto> product = new ArrayList<>();
		productRepo.findAll().forEach((v)->product.add(mapper.map(v, ProductResponseDto.class)));

		return product ;
	}

}
