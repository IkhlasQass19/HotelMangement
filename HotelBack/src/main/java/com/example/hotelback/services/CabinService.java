package com.example.hotelback.services;


import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.dto.CabinDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CabinService {
    CabinDto addCabine(CabinDto cabinDto);

    Page<CabinDto> getAllCabins(Pageable pageable);

    CabinDto getCabinByIdCabin(Long idCabin);

    Cabin getCabinById(Long idCabin);

    List<CabinDto> getAllCabines();

    void deleteCabin(Long idCabin);

    Cabin updateCabin(CabinDto cabinDto);
}
