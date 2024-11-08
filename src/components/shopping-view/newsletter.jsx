import { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically call an API to handle the newsletter signup
    setSubmitted(true);
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest updates and offers.</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="px-4 py-2 w-64 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-500 font-medium">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
}

export default NewsletterSignup;
