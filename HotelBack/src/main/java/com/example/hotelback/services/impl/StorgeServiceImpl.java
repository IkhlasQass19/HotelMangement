package com.example.hotelback.services.impl;

import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.Entities.ImageData;
import com.example.hotelback.repositories.CabinRepository;
import com.example.hotelback.repositories.ImageDataRepository;
import com.example.hotelback.services.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class StorgeServiceImpl implements StorageService {

    @Autowired
    ImageDataRepository imageDataRepository;
    @Autowired
    CabinRepository cabinRepository;

    //Method to get the relatif path to our image
    private static String getFolderPath() {
        Path currentPath = Paths.get("").toAbsolutePath();
        //Path parentPath = currentPath.getParent();
        //Path folderPath = parentPath.resolve("reports");
        Path folderPath = currentPath.resolve("images");
        return folderPath.toString();
    }
    private static final String FOLDER_PATH = getFolderPath();

    @Override
    public String uploadImageToFileSystem(Integer idcabin, MultipartFile file) throws IOException {

        Cabin cabinEntity = cabinRepository.findByIdcabin(idcabin);

        // Check if the cabin already has an image
        if (imageDataRepository.existsByCabin(cabinEntity)){
            throw new RuntimeException("Une Image existe déjà pour cette cabin.");
        }

        String filePath=FOLDER_PATH+"\\"+file.getOriginalFilename();

        if (file.getContentType() == null ||
                (!file.getContentType().equalsIgnoreCase("image/jpeg")&&
                       !file.getContentType().equalsIgnoreCase("image/jpg"))&&!file.getContentType().equalsIgnoreCase("image/png")) {
            throw new IllegalArgumentException("Type de fichier invalide. Seules les images au format JPEG sont autorisées.");
        }

        File existingFile = new File(filePath);
        if (existingFile.exists()) {
            throw new RuntimeException("Le fichier existe déjà : " + filePath);
        }

        ImageData imageData = ImageData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imgPath(filePath)
                .cabin(cabinEntity)
                .build();


        try {
            ImageData fileData=imageDataRepository.save(imageData);

            file.transferTo(new File(filePath));

            if (fileData != null) {
                return filePath;
            }
        } catch (IOException e) {
            throw new RuntimeException("Erreur lors du téléchargement du fichier : " + e.getMessage(), e);
        }

        return null;
    }

    @Override
    public String getImageByIdCabin(Integer idCabin) {
        Cabin cabin = cabinRepository.findByIdcabin(idCabin);
        if (cabin == null) {
            // Handle cabin not found scenario
            return null;
        }

        ImageData imageData = imageDataRepository.getImageDataByCabin(cabin);
        if (imageData != null) {
            return imageData.getImgPath();
        } else {
            // Handle image data not found scenario
            return null;
        }
    }

}
