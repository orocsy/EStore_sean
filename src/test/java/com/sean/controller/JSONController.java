package com.sean.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sean.domain.Shop;

@Controller
@RequestMapping("/kfc/brands")
public class JSONController {
	@RequestMapping(value="{name}",method=RequestMethod.GET)
	public @ResponseBody Shop getShopInJSON(@PathVariable String name){
		Shop shop = new Shop();
		shop.setName(name);
		shop.setStaffName(new String[]{"sean1","sean2"});
		
		return shop;
	}
}
