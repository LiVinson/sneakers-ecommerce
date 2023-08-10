const products = {
  shoes: [
    {
      id: 0,
      brand: "Sneaker Company",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 250.0,
      saleAmount: 0.5,
      featuredImages: [
        { fileName: "image-product-1.jpg", alt: "default alt" },
        { fileName: "image-product-2.jpg", alt: "default alt" },
        { fileName: "image-product-3.jpg", alt: "default alt" },
        { fileName: "image-product-4.jpg", alt: "default alt" },
      ],
      thumbnailImages: [
        { fileName: "image-product-1-thumbnail.jpg", alt: "default alt" },
        { fileName: "image-product-2-thumbnail.jpg", alt: "default alt" },
        { fileName: "image-product-3-thumbnail.jpg", alt: "default alt" },
        { fileName: "image-product-4-thumbnail.jpg", alt: "default alt" },
      ],
      images: [
        {
          featured: "image-product-1.jpg",
          thumbnail: "image-product-1-thumbnail.jpg",
          alt: "default alt",
        },
        {
          featured: "image-product-2.jpg",
          thumbnail: "image-product-2-thumbnail.jpg",
          alt: "default alt",
        },
        {
          featured: "image-product-3.jpg",
          thumbnail: "image-product-3-thumbnail.jpg",
          alt: "default alt",
        },
        {
          featured: "image-product-4.jpg",
          thumbnail: "image-product-4-thumbnail.jpg",
          alt: "default alt",
        },
      ],
    },
  ],
};

export default products;
