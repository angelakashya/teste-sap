package com.example.projetosapapi.service;


import com.example.projetosapapi.controller.request.ReportRequest;
import com.example.projetosapapi.controller.response.ReportResponse;
import com.example.projetosapapi.domain.Person;
import com.example.projetosapapi.domain.Report;
import com.example.projetosapapi.repository.ReportRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    @Autowired
    ReportRepository reportRepository;


    public List<Report> listAllReports() {
        return reportRepository.findAll();
    }

    public ReportResponse report(ReportRequest reportRequest) {

        final ModelMapper modelMapper = new ModelMapper();
        final Report report = modelMapper.map(reportRequest, Report.class);
        report.setTitle(reportRequest.getTitle());
        report.setText(reportRequest.getText());
        report.setPerson(reportRequest.getPerson());

        reportRepository.save(report);

        return modelMapper.map(report, ReportResponse.class);
    }


}
