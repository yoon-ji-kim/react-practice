package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmailRepository;
import com.douzone.emaillist.vo.EmailVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private EmailRepository emailRepository;
	
	@GetMapping("/emaillist") //이메일 리스트
	public ResponseEntity<JsonResult> readEmail() {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailRepository.findAll()));
	}
	
	@GetMapping("/email")	//검색
	public ResponseEntity<JsonResult> find(String keyword) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailRepository.findAllByKeyword(keyword)));
	}
	
	@PostMapping("/email")	//등록
	public ResponseEntity<JsonResult> createEmail(@RequestBody EmailVo emailVo) {
		//이메일 insert
		emailRepository.insert(emailVo);
		System.out.println(emailVo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailVo));
	}
	
	@DeleteMapping("/email/{no}")
	public ResponseEntity<JsonResult> deleteEmail(@PathVariable("no") Long no){
		//삭제
		emailRepository.delete(no);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(no));
	}
}
