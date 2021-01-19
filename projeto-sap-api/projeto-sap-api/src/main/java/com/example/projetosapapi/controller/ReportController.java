package com.example.projetosapapi.controller;

import com.example.projetosapapi.controller.request.ReportRequest;
import com.example.projetosapapi.controller.response.ReportResponse;
import com.example.projetosapapi.domain.Report;
import com.example.projetosapapi.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping
    public List<Report> findAll() {
        return reportService.listAllReports();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ReportResponse report(@RequestBody ReportRequest reportRequest) {
        return reportService.report(reportRequest);
    }
}
