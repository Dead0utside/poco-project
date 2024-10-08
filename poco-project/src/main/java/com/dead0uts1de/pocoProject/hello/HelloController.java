package com.dead0uts1de.pocoProject.hello;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/hello")
@RequiredArgsConstructor
public class HelloController {
    private final HelloService helloService;

    @GetMapping(path = "/first")
    public ResponseEntity<Hello> getFirst() {
        return ResponseEntity.ok().header("Access-Control-Allow-Origin", "*").body(helloService.getFirst());
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addHello(Hello hello) {
        helloService.addHello(hello);
        return new ResponseEntity<>("Added hello", HttpStatus.OK);
    }
}
