package com.example.projetosapapi.controller.response;

import com.example.projetosapapi.domain.Person;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Data
@Getter
@Setter
public class ReportResponse {

    @NotEmpty
    private Person person;

    @NotEmpty
    private String title;

    @NotEmpty
    private String text;
}
