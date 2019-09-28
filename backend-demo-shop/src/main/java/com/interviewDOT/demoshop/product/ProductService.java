package com.interviewDOT.demoshop.product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
class ProductService {

	private static List<Product> cours = new ArrayList<>();
	private static long idCounter = 0;

	static {
		cours.add(new Product(++idCounter, "iPhone 8", "iPhone 8", 100000));
		cours.add(new Product(++idCounter, "Mac Pro", "Mac Pro", 120000));
		cours.add(new Product(++idCounter, "Apple watch", "Apple watch", 40000));
		cours.add(new Product(++idCounter, "Printer",
				"Printer", 23000));
	}

	List<Product> findAll() {
		return cours;
	}

	Product save(Product product) {
		if (product.getId() == -1 || product.getId() == 0) {
			product.setId(++idCounter);
			cours.add(product);
		} else {
			deleteById(product.getId());
			cours.add(product);
		}
		return product;
	}

	Product deleteById(long id) {
		Product product = findById(id);

		if (product == null)
			return null;

		if (cours.remove(product)) {
			return product;
		}

		return null;
	}

	Product findById(long id) {
		for (Product product : cours) {
			if (product.getId() == id) {
				return product;
			}
		}

		return null;
	}
}