package camt.cbsd.services;

import camt.cbsd.entity.Product;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * Created by Dto on 3/11/2017.
 */
public interface ProductService {
    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    Product addProduct(Product product, String imageFileName, BufferedImage image) throws IOException;
}
