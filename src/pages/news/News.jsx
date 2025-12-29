import { useEffect, useState } from "react";
import { categoryQueryMap} from "../../data/data";

export default function News() {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const [activeCategory, setActiveCategory ] = useState("All"); // ⬅ default All
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (category) => {
    setLoading(true);
    setArticles([]); // ⬅ clear previous  cards

    const query = categoryQueryMap[category] || "trading";

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&sortBy=popularity&page=1&pageSize=10&apiKey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 INITIAL LOAD + CATEGORY CHANGE
  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-35">

     <div className="max-w-4xl mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Global Financial News & Market Intelligence
  </h2>

  <p className="text-gray-600 text-lg leading-relaxed">
    Stay informed with the latest updates across banking, fintech,
    cryptocurrency, forex, global markets, investing, and economic research.
    Explore expert insights on corporate finance, behavioral finance,
    commodities, indices, and emerging financial technologies—all curated
    to help you understand market trends and make smarter financial decisions.
  </p>
</div>

     

      {/* 🔹 BLUE LOADER */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* 🔹 NEWS CARDS */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.urlToImage || "https://via.placeholder.com/400x200"}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
