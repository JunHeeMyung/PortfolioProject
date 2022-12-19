package com.csejun.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;	

@RestController
@RequestMapping("/member")
public class MemberController {
	
	@PostMapping("/hi")
	public String register(HttpServletRequest request,@RequestBody HashMap<String, Object> data ) {

		return "hi-post"; 
	}
	
	@GetMapping("/hi")
	public String hi(HttpServletRequest request,String email) {
		
		return "hi-get"; 
	}
	
}