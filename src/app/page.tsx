import BlogPostList from "@/components/BlogPostList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header />
        <hr className="border-dark-blue" />
        <BlogPostList />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
