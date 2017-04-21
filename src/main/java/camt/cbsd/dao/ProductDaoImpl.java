package camt.cbsd.dao;


import camt.cbsd.entity.Product;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Dto on 3/15/2017.
 */
@Profile("firstDataSource")
@ConfigurationProperties(prefix="server")
@Repository
public class ProductDaoImpl extends AbstractProductDao {

    @PostConstruct
    private void init(){
        imageBaseUrl = baseUrl + imageUrl;;
       products = new ArrayList<>();

        Product product = new Product(1,"NIKE MERCURIAL SUPERFLY V FG","The Nike Mercurial Superfly V Men's Firm-Ground Football Boot provides a perfect fit, exceptional ball touch and explosive traction for ultimate speed on short-grass pitches."
                ,imageBaseUrl+"mercurial.jpg",10000,100,
                "4.3");
        products.add(product);
        product = new Product(2,"NIKE HYPERVENOM PHANTOM 3 DF FG","Made for the attacking goalscorer, the Nike Hypervenom Phantom 3 Men's Firm-Ground Football Boot is designed to increase shot velocity and enable quick changes of direction on short-grass pitches."
                ,imageBaseUrl+"hypervenom.jpg",10000,50,
                "5.0");
        products.add(product);
        product = new Product(3,"NIKE MAGISTA OBRA II FG","The Nike Magista Obra II FG Men's Firm-Ground Football Boot provides precise touch and enhanced fit to help you perform playmaking moves on the pitch. Its firm-ground (FG) studs are designed for use on short-grass pitches that may be slightly wet but rarely muddy."
                ,imageBaseUrl+"magista.jpg",10000,75,
                "4.0");
        products.add(product);
    }

    @Override
    public Product addProduct(Product product) {
        if (products.add(product))
            return product;
        else
            return null;
    }

}
