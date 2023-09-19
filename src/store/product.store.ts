import create from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  "supplier type": string;
  type: string;
  rating: string;
  sold: number;
  description: string;
  images: string[];
}

interface StoreState {
  products: Product[];
  filteredProducts: Product[];
  filterProducts: (
    type?: string,
    supplier?: string,
    maxPrice?: string,
    search?: string
  ) => void;
}

const useProductStort = create<StoreState>((set) => ({
  products: [
    {
      id: 1,
      name: "Laptop Lenovo V15 G3 /15.6'', FHD/ Core I3, 1215U/ 8GB/ SSD 512GB/ DOS/ (82TT003SRU)",
      price: 900,
      oldPrice: 1914,
      "supplier type": "Verfied Suppliers",
      type: "Ready to Ship",
      rating: "4.8",
      sold: 120,
      description: "Test test testetest",
      images: [
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191275.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191276.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191277.jpg",
      ],
    },
    {
      id: 2,
      name: "Laptop Lenovo V15 G3 /15.6'', FHD/ Core I3, 1215U/ 8GB/ SSD 512GB/ DOS/ (82TT003SRU)",
      price: 753,
      oldPrice: 1914,
      rating: "5.0",
      "supplier type": "Trade Assurance",
      type: "Paid Samples",
      sold: 120,
      description: "Test test testetest",
      images: [
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191275.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191276.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191277.jpg",
      ],
    },
  ],
  filteredProducts: [],
  filterProducts: (type, supplier, maxPrice, search) => {
    set((state) => {
      if (!type && !supplier && !search && !maxPrice) {
        return { filteredProducts: state.products };
      }
      const filteredProducts = state.products.filter((product) => {
        return (
          (!type || type?.includes(product.type)) &&
          (!supplier || supplier?.includes(product["supplier type"])) &&
          (!maxPrice || product.price < Number(maxPrice)) &&
          (!search ||
            product.name.includes(search) ||
            product.description.includes(search))
        );
      });

      return { filteredProducts };
    });
  },
}));

export default useProductStort;
