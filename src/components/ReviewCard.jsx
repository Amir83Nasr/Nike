import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <h3 className="font-palanquin text-3xl font-bold text-center mt-1">
        {" "}
        {customerName}{" "}
      </h3>
      <p className="info-text text-center max-w-sm mt-4"> {feedback} </p>
      
      <div className="flex flex-row gap-2.5 mt-3 justify-center items-center">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="text-slate-gray font-montserrat text-xl"> ({rating}) </p>
      </div>
    </div>
  );
};

export default ReviewCard;
