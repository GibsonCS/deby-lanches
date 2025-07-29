import Image from "next/image";
import kit1 from "@/images/kit1.png";

const products = [
  {
    id: 1,
    name: "Pão de forma com pasta de frango. Acompanha suco de limão laranja ou uva, uma salada de fruta mais uma barrinha de cereal",
    description: "Natural",
    price: "R$ 35,90",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Sanduiche natural de frango",
    description: "Black",
    price: "R$ 25,80",
    href: "#",
    imageSrc: kit1,
    imageAlt: "12-sided, machined black pencil and pen.",
  },
  {
    id: 3,
    name: "Pão frances com minas e peito de peru",
    description: "Light Brown",
    price: "R$ 12,90",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Set of three light and dark brown mini sketch books.",
  },
  {
    id: 4,
    name: "Pão Suiço com pasta de peito de peru",
    description: "Walnut",
    price: "R$ 14,80",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
  {
    id: 5,
    name: "Pão Suiço com pasta de peito de peru",
    description: "Walnut",
    price: "R$ 14,80",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
  {
    id: 6,
    name: "Pão Suiço com pasta de peito de peru",
    description: "Walnut",
    price: "R$ 14,80",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
  {
    id: 7,
    name: "Pão Suiço com pasta de peito de peru",
    description: "Walnut",
    price: "R$ 14,80",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
  {
    id: 8,
    name: "Pão Suiço com pasta de peito de peru",
    description: "Walnut",
    price: "R$ 14,80",
    href: "#",
    imageSrc: kit1,
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
];

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Lanches
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-8 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative text-left">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="size-full object-cover"
                  width={0}
                  height={0}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
              <p className="mt-1 text-sm font-medium text-center text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
