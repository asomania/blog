import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "./styles/blog.css";
import Content from "../components/Content";
import { BlogType } from "../type/Blog";

export interface Post {
  title: string;
  publishedDate: string;
  author: string;
  imageUrl?: string;
  content: string;
  tags?: string[];
}
const Blog = () => {
  const [post, setPost] = useState<Post>();
  const [blogContents, setBlogContents] = useState<BlogType>({
    id: 0,
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/blogs/${id}`);
        setPost(response.data);
        setBlogContents({
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);
  let readTime = 0;
  if (post?.content) {
    readTime = Math.ceil(post?.content.length / 2000);
  } else {
    readTime = 0;
  }

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center p-5">Post not found</div>;
  }

  return (
    <div className="medium-blog-container overflow-y">
      <div className="blog-header">
        <h1 className="blog-title">{post.title}</h1>

        <div className="author-section">
          <div className="author-info">
            <img
              src="/avatar.png"
              alt={post.author}
              className="author-avatar"
            />
            <div className="author-details">
              <div className="author-name">{post.author}</div>
              <div className="post-meta">
                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                <span className="read-time">· {readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {post.imageUrl && (
        <div className="feature-image-container">
          <img src={post.imageUrl} alt={post.title} className="feature-image" />
        </div>
      )}

      <div className="blog-content">
        <div className="content-wrapper">
          {blogContents && <Content blogContent={blogContents} />}
          <div className="tags-section">
            {post.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
