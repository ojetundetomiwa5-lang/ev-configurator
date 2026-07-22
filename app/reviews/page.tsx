import Link from "next/link";

const reviews = [
  {
    name: "James Wilson",
    rating: "★★★★★",
    review:
      "Amazing experience! The staff made buying my Model Y quick and easy.",
  },
  {
    name: "Sarah Johnson",
    rating: "★★★★★",
    review:
      "The Cybertruck test drive exceeded my expectations. Highly recommended!",
  },
  {
    name: "Michael Brown",
    rating: "★★★★☆",
    review:
      "Excellent customer service and a smooth ordering process.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-gray-400 hover:text-white">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-5xl font-bold text-center">
          Customer Reviews
        </h1>

        <p className="mt-4 text-center text-gray-400">
          See what our customers say about Tesla Dealership.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-900 p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-bold">{review.name}</h2>

              <p className="mt-3 text-yellow-400 text-xl">
                {review.rating}
              </p>

              <p className="mt-4 text-gray-400 leading-7">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}