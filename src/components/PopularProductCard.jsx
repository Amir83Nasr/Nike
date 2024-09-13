import { star } from "../assets/icons"


const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray"> (4.5) </p>
      </div>

      <h3 className="mt-[8px] text-2xl leading-normal font-semibold font-palanquin"> {name} </h3>
      <p className="mt-[8px] text-lg leading-normal text-coral-red font-semibold font-montserrat "> {price} </p>
    </div>
  )
}

export default PopularProductCard