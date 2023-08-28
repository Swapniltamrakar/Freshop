package com.freshop.service;

import java.util.List;

import com.freshop.dto.OrderRequestDto;
import com.freshop.dto.OrderResponseDto;
import com.freshop.dto.OrederIdDto;

public interface OrderService {

	public List<OrderResponseDto> findByOrderId(OrederIdDto orderId);
	public boolean addOrder(OrderRequestDto dto);
	
}
