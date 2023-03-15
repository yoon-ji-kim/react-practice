package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmailVo;

@Repository
public class EmailRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmailVo> findAll() {
		return sqlSession.selectList("email.findAll");
	}

	public List<EmailVo> findAllByKeyword(String keyword) {
		return sqlSession.selectList("email.findAllByKeyword", keyword);
	}
	
	public Boolean insert(EmailVo emailvo) {
		return sqlSession.insert("email.insert", emailvo) == 1;
	}
	
	public Boolean delete(Long no) {
		return sqlSession.delete("email.delete", no) == 1;
	}
}
