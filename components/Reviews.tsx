import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "An Essential Tool for Every Engineer!",
    content:
      "This transformer voltage calculator is a lifesaver! It's accurate, fast, and easy to use. I no longer need to manually calculate voltage ratios – this tool does it instantly!",
    author: "Jonas Aly",
    designation: "Electrical Engineer",
  },
  {
    rating: 5,
    title: "Perfect for Home Electrical Projects!",
    content:
      "I use this calculator for my home electrical projects, and it's incredibly helpful. The step-up and step-down voltage calculations are spot-on. Highly recommended!",
    author: "Mark Bures",
    designation: "DIY Enthusiast",
  },
  {
    rating: 5,
    title: "A Must-Have for Students!",
    content:
      "As a student, I appreciate how simple and intuitive this tool is. It helps me check my transformer calculations quickly and saves me so much time!",
    author: "William Kolas",
    designation: "Engineering Student",
  },
  {
    rating: 4,
    title: "A Game-Changer for Electricians!",
    content:
      "I work with transformers daily, and this calculator has become an essential tool in my workflow. The ability to calculate both single-phase and three-phase transformers makes it perfect!",
    author: "Andrew Chan",
    designation: "Professional Electrician",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          ⭐ A Beautiful Reviews Section – What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
