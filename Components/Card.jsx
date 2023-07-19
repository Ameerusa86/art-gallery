import Image from "next/image";

const Card = ({ title, content, image, createdAt }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          src={image}
          width={250}
          height={250}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="category text-center"> {title} </div>
      <div className="heading text-center">
        {" "}
        {content}
        {/* <div className="author text-center">
          {" "}
          By <span className="name text-center">Ameer</span> {createdAt}
        </div> */}
      </div>
    </div>
  );
};

export default Card;
