import { PRODUCTSDATA } from "../constants/index";
const OurProducts = () => {
  return (
    <section className="py-20 min-h-screen md:px-32 px-5 p-5 bottomBorder">
      <h2 className="text-5xl pb-8 lg:text-[6rem] font-bold tracking-tighter text-center mb-4 bg-gradient-to-r from-[#ffecc1] via-[#57df83] to-[#229949] bg-clip-text text-transparent">
        Our Products
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PRODUCTSDATA.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-center pt-8 opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-80">
              <h3 className="mb-2 text-2xl font-semibold backG1 px-2 py-1 rounded-lg">{product.name}</h3>
              <p className="mb-12 p-4 mx-auto text-center">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
