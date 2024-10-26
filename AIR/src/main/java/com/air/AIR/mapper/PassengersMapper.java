package com.air.AIR.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.air.AIR.domain.PassengersDTO;

@Mapper
public interface PassengersMapper {

    // PassengersDTO 객체를 받아서 DB에 삽입하는 메소드, 삽입된 행의 수를 반환
    int insertPassengers(PassengersDTO params);

    // PassengersDTO 조건에 따라 Passengers 리스트를 반환하는 메소드
    List<PassengersDTO> selectPassengers(PassengersDTO params);
}
