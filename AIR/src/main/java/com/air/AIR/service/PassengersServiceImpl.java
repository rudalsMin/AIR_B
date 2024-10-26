package com.air.AIR.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.air.AIR.domain.PassengersDTO;
import com.air.AIR.mapper.PassengersMapper;

@Service
public class PassengersServiceImpl implements PassengersService {

    @Autowired
    private PassengersMapper passengersMapper;
    
    @Override
    public boolean registerPassengers(PassengersDTO params) {
        try {
            int result = passengersMapper.insertPassengers(params);
            return result > 0; // 삽입 성공 시 true 반환
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public List<PassengersDTO> getPassengersList(PassengersDTO params) { // 메소드 이름 확인
        return passengersMapper.selectPassengers(params);
    }
}
