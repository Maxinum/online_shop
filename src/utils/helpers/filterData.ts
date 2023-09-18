import data from "@/constants/products.json";

const filterData = (type: any, supplier: any) => {
    console.log(data)
  const filteredData = data.filter(
    (product) =>
      type?.includes(product.type) ||
      supplier?.includes(product["supplier type"])
  );
  localStorage.setItem("products", JSON.stringify(filteredData));
  console.log(filteredData);
  return filteredData;
};

export default filterData;
