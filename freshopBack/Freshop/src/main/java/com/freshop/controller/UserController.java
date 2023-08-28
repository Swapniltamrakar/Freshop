package com.freshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.freshop.dto.LoginRequestDto;
import com.freshop.dto.OrderRequestDto;
import com.freshop.dto.OrederIdDto;
import com.freshop.dto.SignUpDato;
import com.freshop.dto.SuppliedProductRequestDto;
import com.freshop.dto.SupplierIdDto;
import com.freshop.dto.SupplierRequestDto;
import com.freshop.dto.UserRequestDto;
import com.freshop.service.OrderService;
import com.freshop.service.ProductService;
import com.freshop.service.SuppliedProductService;
import com.freshop.service.SupplierService;
import com.freshop.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private ProductService productServ;
	@Autowired
	private UserService userService;
	
	@Autowired
	private SupplierService supService;
	
	@Autowired
	private SuppliedProductService suplyProduct;
	
	@Autowired
	private OrderService orderServ;
	
	@PostMapping("/Login")
	public ResponseEntity<?> getById(@RequestBody LoginRequestDto dto){
		return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers(dto.getEmail(), dto.getPassword()));
	}
	
	@PostMapping("/SignUp")
	public ResponseEntity<?> addUser(@RequestBody SignUpDato u){
		
		return ResponseEntity.status(HttpStatus.OK).body(userService.addUser(u));
		
	}
	
	@GetMapping("/Products")
	public ResponseEntity<?> getAllProducts(){
		
		return ResponseEntity.status(HttpStatus.OK).body(productServ.getAllProducts());
		
	}
	
	
	@GetMapping("/Roles")
	public ResponseEntity<?> getAdminUsers(){
		return ResponseEntity.status(HttpStatus.OK).body(userService.findByRole());
	}
	
	@PutMapping("/UpdateUser")
	public ResponseEntity<?> updateUser(@RequestBody UserRequestDto dto){
		return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(dto));
	}
	
	@GetMapping("/Supplier")
	public ResponseEntity<?> getAllSuppliers(){
		return ResponseEntity.status(HttpStatus.OK).body(supService.getAllSupplier());
	}
	
	@PostMapping("/findSupplier")
	public ResponseEntity<?> findSupplier(@RequestBody SupplierIdDto id){
		return ResponseEntity.status(HttpStatus.OK).body(supService.findBySid(id)); 
	}
	
	@PostMapping("/AddSupplier")
	public ResponseEntity<?> addSupplier(@RequestBody SupplierRequestDto dto){
		return ResponseEntity.status(HttpStatus.OK).body(supService.addSupplier(dto));
	}
	
	@GetMapping("/SuppliedProduct")
	public ResponseEntity<?> getAllSupply(){
		return ResponseEntity.status(HttpStatus.OK).body(suplyProduct.getAllSuppliedProducts());
	}
	
	
	@PostMapping("/AddSuppliedProduct")
	public ResponseEntity<?> addSuplyProduct(@RequestBody SuppliedProductRequestDto dto){
		return ResponseEntity.status(HttpStatus.OK).body(suplyProduct.addSuppliedProducts(dto));
	}
	
	@PostMapping("/GetOrder")
	public ResponseEntity<?> getProduct(@RequestBody OrederIdDto dto)
	{
		return ResponseEntity.status(HttpStatus.OK).body(orderServ.findByOrderId(dto));
	}
	
	@PostMapping("/AddOrder")
	public ResponseEntity<?> addOrder(@RequestBody OrderRequestDto dto){
		return ResponseEntity.status(HttpStatus.OK).body(orderServ.addOrder(dto));
	}
	
}
