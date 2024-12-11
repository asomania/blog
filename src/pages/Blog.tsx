import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

interface Post {
  title: string;
  createdAt: string;
  author: string;
  imageUrl?: string;
  content: string;
  tags?: string[];
}
const Blog = () => {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/blogs/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center p-5">Post not found</div>;
  }

  return (
    <>
      <div className="container py-5 ibm-font">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <article className="blog-post">
              <h1 className="blog-post-title mb-4">{post.title}</h1>

              <div className="blog-post-meta text-muted mb-4">
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>

              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="img-fluid mb-4 rounded"
                />
              )}

              <div className="blog-post-content">{post.content}</div>

              <div className="blog-post-tags mt-4">
                {post.tags?.map((tag, index) => (
                  <span key={index} className="badge bg-secondary me-2">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
