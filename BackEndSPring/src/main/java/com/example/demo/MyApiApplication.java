package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entity.Product;
import com.example.demo.repositories.ProductRepository;

@SpringBootApplication
public class MyApiApplication implements CommandLineRunner {
	
	@Autowired
	private ProductRepository productRepository;

	public static void main(String[] args) {
		SpringApplication.run(MyApiApplication.class, args);
		
	}
	
	public void run(String... args) throws Exception {
		productRepository.save(new Product("$900", "Es un cerrucho"));
		productRepository.save(new Product("$450", "Es destornillador"));
	}
}
