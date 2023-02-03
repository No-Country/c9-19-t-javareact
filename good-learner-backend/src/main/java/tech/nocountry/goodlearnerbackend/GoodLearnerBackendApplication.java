package tech.nocountry.goodlearnerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class GoodLearnerBackendApplication {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(GoodLearnerBackendApplication.class, args);

		System.out.println("Hello World");
	}

}
