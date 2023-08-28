package com.freshop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freshop.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
      public List<Order> findByOrderId(String orderId);
}
