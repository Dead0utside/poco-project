package com.dead0uts1de.pocoProject;

import com.dead0uts1de.pocoProject.hello.Hello;
import com.dead0uts1de.pocoProject.hello.HelloService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PopulateDb {
    @Bean
    CommandLineRunner HelloCLR(HelloService helloService) {
        return args -> {
            Hello hello = new Hello("Hello World");
            helloService.addHello(hello);
        };
    }
}