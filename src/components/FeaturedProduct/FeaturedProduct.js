import ProductCard from "./ProductCard";


export default function FeaturedProduct({randomProducts}) {
    // console.log(randomProducts)
  return (
    <div className="m-6 md:m-12  ">
        <h1 className="text-center text-4xl mb-2 font-semibold">Featured <span className="text-[#53f4fa]">Products</span></h1>
        <p className="text-center text-xl mb-10">Get Your Desired Product from Featured Products!</p>
        <div className="grid md:grid-cols-6 gap-2 md:gap-4 ">
            {
              randomProducts &&  randomProducts.map((product) =><ProductCard key={product._id} product={product}></ProductCard>)
            }
            
        </div>
    </div>
  )
}


