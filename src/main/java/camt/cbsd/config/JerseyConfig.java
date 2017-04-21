package camt.cbsd.config;

import camt.cbsd.controller.ProductController;
import camt.cbsd.entity.Product;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;


@Configuration
public class JerseyConfig extends ResourceConfig{
    public JerseyConfig(){
        register(ProductController.class);
        register(MultiPartFeature.class);
    }

}
