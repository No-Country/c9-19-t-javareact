package tech.nocountry.goodlearnerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import tech.nocountry.goodlearnerbackend.data.datasource.LoadResource;

@SpringBootApplication
public class GoodLearnerBackendApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(GoodLearnerBackendApplication.class, args);
		LoadResource loadResource = context.getBean(LoadResource.class);

		boolean isLoadData = false;

		if(isLoadData){
			loadResource.loadDatasource(context);

		}

		System.out.println("Built Project");

	}



}
