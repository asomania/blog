import { BsDot } from "react-icons/bs";
import "./styles/home-container.css";

const HomeContainer = () => {
  const items = [
    {
      name: "Esnaf",
      date: "12.2024",
      header: "Blog Header 1",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dicta.",
      image: "avatar.jpg",
    },
    {
      name: "Asomania Dev",
      date: "01.2025",
      header: "Blog Header 2",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "avatar.jpg",
    },
    {
      name: "John Doe",
      date: "02.2025",
      header: "Blog Header 3",
      details:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      image: "avatar.jpg",
    },
    {
      name: "Jane Smith",
      date: "03.2025",
      header: "Blog Header 4",
      details:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      image: "avatar.jpg",
    },
    {
      name: "Alice Johnson",
      date: "04.2025",
      header: "Blog Header 5",
      details:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: "avatar.jpg",
    },
  ];

  return (
    <div className="p-40 overflow-y">
      <div className="d-flex columns gap-25 ">
        {items.map((item, index) => (
          <>
            <div className="d-flex a-center ibm-font gap-15-em" key={index}>
              <img
                src="avatar.png"
                alt=""
                className="logo-avatar d-flex a-center j-center"
              />
              <p className="grey-text">{item.name}</p>
              <BsDot />
              <p className="grey-text">{item.date}</p>
            </div>
            <div className="d-flex gap-25">
              <div className="d-flex gap-25">
                <img src={item.image} alt="" className="blog-small-image" />
                <div className="d-flex columns gap-25 j-center">
                  <p className="bold ibm-font">{item.header}</p>
                  <p className="grey-text source-font text-16">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
