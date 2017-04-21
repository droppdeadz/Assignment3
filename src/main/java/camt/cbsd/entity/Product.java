package camt.cbsd.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Created by Dto on 3/11/2017.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Product {
    long productId;
    String name;
    String description;
    String image;
    int price;
    int amount;
    String rating;


    public Product(long id, String name, String description , String image, int price, int amount, String rating) {
        this.productId = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.amount = amount;
        this.rating = rating;

    }

    public Product() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Product product = (Product) o;

        if (productId != product.productId) return false;
        if (price != product.price) return false;
        if (amount != product.amount) return false;
        if (name != null ? !name.equals(product.name) : product.name != null) return false;
        if (image != null ? !image.equals(product.image) : product.image != null) return false;
        return description != null ? description.equals(product.description) : product.description == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = (int) (productId ^ (productId >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        result = 31 * result + (rating != null ? rating.hashCode() : 0);
        return result;
    }

    public long getId() {
        return productId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int setAmount() {
        return amount;
    }

    public void setAmount(int feature) {
        this.amount = amount;
    }

    public String getRating() {
        return rating;
    }

    public void setPenAmount(String rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(long id) {

        this.productId = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
