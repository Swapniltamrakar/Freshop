package com.freshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshop.dto.OrderRequestDto;
import com.freshop.dto.OrderResponseDto;
import com.freshop.dto.OrederIdDto;
import com.freshop.entity.Order;
import com.freshop.repository.OrderRepository;
@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	public OrderRepository orderRepo;
	
	@Autowired
	public ModelMapper mapper;


	@Override
	public boolean addOrder(OrderRequestDto dto) {
		boolean status =false;
		Order o = new Order(dto.getOrderId(),dto.getTitle(),dto.getAmount(),dto.getPrice());
		Order o1 = orderRepo.save(o);
		if(o!=null) {
			status = true;
		}
		return status;
	}

	@Override
	public List<OrderResponseDto> findByOrderId(OrederIdDto orderId) {
		List<OrderResponseDto> list = new ArrayList<>();
		orderRepo.findByOrderId(orderId.getOrderId()).forEach((v)->list.add(mapper.map(v, OrderResponseDto.class)));
		return list;
	}

}
