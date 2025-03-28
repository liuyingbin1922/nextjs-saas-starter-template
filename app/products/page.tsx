import Header from "components/Header";
import Footer from "components/Footer";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  amazonUrl: string;
  rating: number;
  reviewCount: number;
}

const products: Product[] = [
  {
    id: "1",
    title: "Digital Multimeter with Auto-Ranging",
    description: "Professional digital multimeter with auto-ranging, true RMS, and backlight display. Perfect for electrical measurements and troubleshooting.",
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/61G+iWI0fJL._AC_UL640_FMwebp_QL65_.jpg",
    amazonUrl: "https://a.co/d/2QXYE0p",
    rating: 4.5,
    reviewCount: 1234
  },
  {
    id: "2",
    title: "Voltage Tester Pen",
    description: "Non-contact voltage tester with LED indicator and audible alert. Safe and easy to use for detecting live wires.",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/71rfsv1OOIL._AC_UL640_FMwebp_QL65_.jpg",
    amazonUrl: "https://www.amazon.com/KAIWEETS-Non-Contact-Percentage-Electrical-Breakpoint/dp/B0C2CNC624/ref=sr_1_1?dib=eyJ2IjoiMSJ9.wUD7UyrkbmzHliMWUnfIrEthTyTVt1-9gkhE5tlld-JtFNC4lEhUWaXoq-am9mTNrO9aN9m86lHH7IBCDw8HyUfZx0juf4S5N58Wklh-4QY968fdtMdMeRYTljo9JbWKolOyaSozYCrfistNjeCRF2qHLPLupQDD9EcghWbdqvCfmS7VpsmWv2doA7KCXvK_dN5G_KTyMO6TXmH2cJ5EBjfLBGK9hNRLZ-3pJzvlUJ7izSTfKTXFvAB_N39lWN7Hd7D1o2dGX93MCJLMTuNDhlaHGhWqxRlO6fm_5G21VVjyCqK7bWd1R7jySNlc3jYyov4dg-bVLZCL-Kelh0r2f3bokKpuwH2ojmO2CRt8isywYgeR-ZvlcAICuNdpcLoW2V_qYheCaB6MUzfokKtDCOrS14F7b3NOKSpAK936ot6resd6aIaEbCG4G0yfw2gB.V7OgJa8RqiV1BzmTJDnOFBxBoFJp8nyvKwra9qWPt0Y&dib_tag=se&keywords=Voltage%2BTester%2BPen&qid=1743175410&sr=8-1&th=1",
    rating: 4.3,
    reviewCount: 856
  },
  {
    id: "3",
    title: "Power Supply Unit",
    description: "Adjustable DC power supply with digital display, perfect for electronics testing and development.",
    price: "$49.99",
    image: "https://m.media-amazon.com/images/I/61tOgJ849GL._AC_UY436_FMwebp_QL65_.jpg",
    amazonUrl: "https://a.co/d/8YCyDZc",
    rating: 4.7,
    reviewCount: 567
  },
  {
    id: "4",
    title: "Circuit Breaker Finder",
    description: "Digital circuit breaker finder with transmitter and receiver. Helps identify circuit breakers quickly and accurately.",
    price: "$54.99",
    image: "https://m.media-amazon.com/images/I/51Fwsdb3NzL._AC_UL640_FMwebp_QL65_.jpg",
    amazonUrl: "https://a.co/d/5QMH1EM",
    rating: 4.4,
    reviewCount: 789
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Recommended Products</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Discover our carefully selected electrical testing and measurement tools. These products are essential for professionals and DIY enthusiasts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 