package com.example.hotelback.controllers;
import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.repositories.CabinRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cabins")
public class CabinController {

    private final CabinRepository cabinRepository;

    @Autowired
    public CabinController(CabinRepository cabinRepository) {
        this.cabinRepository = cabinRepository;
    }

    @GetMapping("/open/getallcabins")
    public List<Cabin> getAllCabins() {
        return cabinRepository.findAll();
    }

    @GetMapping("/open/getcabin/{id}")
    public Cabin getCabinById(@PathVariable int id) {
        return cabinRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cabin not found with id: " + id));
    }

    @PostMapping("/add")
    @PreAuthorize("hasAuthority('admin:create')")
    public Cabin createCabin(@RequestBody Cabin cabin) {
        return cabinRepository.save(cabin);
    }

    @PutMapping("updatecabin/{id}")
    @PreAuthorize("hasAuthority('admin:update')")
    public Cabin updateCabin(@PathVariable int id, @RequestBody Cabin updatedCabin) {
        Cabin cabin = cabinRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cabin not found with id: " + id));

        cabin.setName(updatedCabin.getName());
        cabin.setCapacite(updatedCabin.getCapacite());
        cabin.setImage(updatedCabin.getImage());
        cabin.setPrice(updatedCabin.getPrice());
        cabin.setDescreption(updatedCabin.getDescreption());

        return cabinRepository.save(cabin);
    }

    @DeleteMapping("delete/{id}")
    @PreAuthorize("hasAuthority('admin:delete')")
    public void deleteCabin(@PathVariable int id) {
        cabinRepository.deleteById(id);
    }
}
