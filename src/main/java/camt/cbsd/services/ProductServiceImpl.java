package camt.cbsd.services;

import camt.cbsd.dao.ProductDao;
import camt.cbsd.entity.Product;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;


@Service
@ConfigurationProperties(prefix = "server")
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductDao productDao;
    String imageServerDir;

    public void setImageServerDir(String imageServerDir) {
        this.imageServerDir = imageServerDir;
    }

    public List<Product> getProducts() {

        return productDao.getProducts();
    }

    @Override
    public Product findById(long id) {
        return productDao.findById(id);
    }

    @Override
    public Product addProduct(Product product) {
        return productDao.addProduct(product);
    }

    @Override
    public Product addProduct(Product product, String imageFileName, BufferedImage image) throws IOException {
        // save file to the server
        int newId = productDao.size() + 1;
        String newFilename = newId + "." + imageFileName;
        File targetFile = Files.createFile(Paths.get(imageServerDir + newFilename)).toFile();
        ImageIO.write(image, FilenameUtils.getExtension(imageFileName), targetFile);

        product.setImage(newFilename);
        productDao.addProduct(product);
        return product;
    }
}
