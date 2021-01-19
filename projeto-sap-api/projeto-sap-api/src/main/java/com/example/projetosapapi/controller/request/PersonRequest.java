package com.example.projetosapapi.controller.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
public class PersonRequest {

    private String name;

    @JsonFormat(pattern = "yyyy/MM/dd")
    private LocalDate birthday;

    private String role;


}
