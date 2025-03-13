import { BsDot } from "react-icons/bs";
import "./styles/home-container.css";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useEffect, useState } from "react";
import { BlogType } from "../type/Blog";

const HomeContainer = () => {
  const [items, setItems] = useState<BlogType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/blogs");
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="p-40 overflow-y">
      <div className="d-flex columns gap-25">
        {items.map((item, index) => (
          <div
            className="cursor d-flex columns gap-15-em"
            key={index}
            onClick={() => navigate(`/about/${index + 1}`)}
          >
            <div className="d-flex a-center ibm-font gap-15-em">
              <img
                src="avatar.png"
                alt=""
                className="logo-avatar d-flex a-center j-center"
              />
              <p className="grey-text">Eren Küçük</p>
              <BsDot />
              <p className="grey-text">2024</p>
            </div>
            <div className="d-flex gap-25">
              <div className="d-flex gap-25">
                <img src="avatar.jpg" alt="" className="blog-small-image" />
                <div className="d-flex columns gap-25 j-center">
                  <p className="bold ibm-font">{item.title}</p>
                  <p className="grey-text source-font text-16">
                    {item.content.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
