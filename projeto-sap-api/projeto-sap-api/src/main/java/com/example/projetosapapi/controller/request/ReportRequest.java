package com.example.projetosapapi.controller.request;

import com.example.projetosapapi.domain.Person;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Data
@Getter
@Setter
public class ReportRequest {
    @NotEmpty
    private Person person;

    @NotEmpty
    private String title;

    @NotEmpty
    private String text;
}
