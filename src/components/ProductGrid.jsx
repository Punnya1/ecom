import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1  xl:grid-cols-4 gap-4 place-items-center  ">
            {products.map((product) => (
                <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} id={product.id} />
            ))}
        </div>

    );
};

export default ProductGrid;
