package com.air.AIR.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.air.AIR.domain.PassengersDTO;
import com.air.AIR.domain.formDTO;
import com.air.AIR.service.PassengersService;

@Controller
public class PassengersController {

    @Autowired
    private PassengersService passengersService;

    @GetMapping("/register")
    public String join(Model model) {
    	PassengersDTO pd = new PassengersDTO();
    	
    	model.addAttribute("Passengers",pd);
    	
        return "/memInformation"; // 파일 확장자는 .html 이므로 /join.html 로 반환됩니다.
    }

    // btnSubmit 클릭 시 호출되는 메소드 (POST 요청)
    @PostMapping("/passengers/register")
    public String submitForm(@ModelAttribute PassengersDTO passenger, RedirectAttributes redirectAttributes) {
        try {
            // 데이터 저장 로직 호출
            passengersService.registerPassengers(passenger);
            // 성공 시 메시지 설정
            redirectAttributes.addFlashAttribute("message", "회원가입이 완료되었습니다.");
        } catch (Exception e) {
            // 실패 시 메시지 설정
            redirectAttributes.addFlashAttribute("message", "회원가입에 실패하였습니다.");
            e.printStackTrace();
        }
        // 성공 후 index 페이지로 리다이렉트
        return "redirect:/home";
    }
    
 // GET 요청을 처리하여 폼을 보여줍니다.
    @PostMapping("/ticket")
    public String showForm(
    	@RequestParam("openModalBtn") String departure_airport,
    	@RequestParam("openModalBtn2")String arrival_airport,
    	@RequestParam("openModalBtn3") int num_passengers,
    	@RequestParam("openModalBtn4")int seat_class,
    	Model model) {
    
    	
    	formDTO a = new formDTO();
    	
    	a.setDeparture_airport(departure_airport);
    	a.setArrival_airport(arrival_airport);
    	a.setNum_passengers(num_passengers);
    	a.setSeat_class(seat_class);
    	
        // 빈 formDTO 객체를 생성하여 모델에 추가
        model.addAttribute("formDTO", a);
        
        return "/flightDeparture"; 
    }
}
