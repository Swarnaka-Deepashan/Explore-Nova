import BlogCard from "../components/BlogCard";
import { blogs } from "../constants";
import Button from "../components/Button";

const Blogs = () => {
  return (
    <section id="Blogs" className="max-container">
      <div className="flex flex-col items-center mb-6 max-md:mb-2">
        <p className="text-lg font-normal lg:max-w-lg text-slate-gray">
          Our Blog
        </p>
        <h2 className="text-4xl font-semibold max-md:text-3xl">
        Travel Stories
        </h2>
      </div>
      <div className="flex gap-6 max-md:flex-col max-md:gap-5">
        {blogs.map((blog, index) => (
          <div key={index} className="flex-1">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 max-sm:mt-6">
        <Button label="View More" />
      </div>
    </section>
  );
};

export default Blogs;
