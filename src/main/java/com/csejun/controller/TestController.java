package com.csejun.controller;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csejun.service.MailService;
import com.csejun.util.IPUtil;


@RestController
@RequestMapping("/test")
public class TestController {
	
	@Autowired
	MailService mailService;
		
	@PostMapping("/mail")
	public String sendMail() throws MessagingException {
		
		mailService.sendMail("회원가입 ", "platinyan@naver.com", "내용");
		
		return "ok";
	}

	@PostMapping("/header")
	public String getHeader(HttpServletRequest request) {
		
		Enumeration<String> headerNames = request.getHeaderNames();
		
		String header = "";
		
		while(headerNames.hasMoreElements()) {
			String name = headerNames.nextElement();
			System.out.println(name+":"+request.getHeader(name));
			header+=(name+":"+request.getHeader(name)+"\n");
		}
		
		System.out.println(request.getRemoteAddr());
		System.out.println(IPUtil.getClientIpAddr(request));
		
		return header;
	}
	
	@GetMapping("/ip")
	public Map<String, Object> getIp(HttpServletRequest request) {
		HashMap<String, Object> hashMap = new HashMap<>();
		hashMap.put("ip", IPUtil.getClientIpAddr(request));
		System.out.println("아이피요청:"+IPUtil.getClientIpAddr(request));
		return hashMap;
	}

}