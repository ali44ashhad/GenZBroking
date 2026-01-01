import { useParams, Link } from "react-router-dom";
import { blogsData } from "../../../data/data";
import Fund from "../../../components/Fund";
import BlogNextSection from "../BlogNextSection";

const Blog1 = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);
//   console.log( blog);

  if (!blog) return <div className="p-10 text-center">Blog not found</div>;

  return (
    <>
     {/* HERO SECTION */}
      <section className="mt-40 w-full max-w-7xl mx-auto h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden relative flex items-end p-6 sm:p-10 text-white">
        {/* Hero Image */}
 
 {/* IMAGE + OVERLAY WRAPPER */}
<div className="absolute inset-0 px-3 sm:px-0">
  <div className="relative w-full h-full rounded-3xl overflow-hidden">
    
    {/* IMAGE */}
    <img
      src={blog.heroImage}
      alt={blog.title}
      className="w-full h-full object-cover object-center"
    />

    {/* LIGHT BLACK OVERLAY */}
    <div className="absolute inset-0 bg-black/45"></div>

  </div>
</div>




        {/* Overlay */}
<div className="absolute inset-y-0 bg-black/90"></div>

        {/* Hero Text */}
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-full sm:max-w-3xl leading-snug z-10">
          {blog.title}
        </h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-12 lg:py-16 px-4 sm:px-6">
        {/* LEFT SIDE */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Summary */}
          <div className="bg-blue-600 text-white rounded-2xl p-6">
            <h3 className="font-semibold mb-3 text-lg">Summary</h3>
            <p className="text-sm sm:text-base leading-relaxed">{blog.summary}</p>
          </div>

          {/* More Articles */}
          {/* <div>
            <h4 className="font-semibold mb-4 text-lg">More Articles</h4>
            <ul className="space-y-2 sm:space-y-3">
              {blog.moreArticles.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/blogs/${item.slug}`}
                    className="text-sm sm:text-base text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </aside>

        {/* RIGHT SIDE */}
        <main className="lg:col-span-8 space-y-8 sm:space-y-10">
          {blog.sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">{sec.heading}</h2>
              <p className="text-gray-700 sm:text-base leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </main>
      </section>
          <BlogNextSection/>
      <Fund/>
    </>
  );
};

export default Blog1;
