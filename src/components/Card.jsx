import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, author }) => {
  return (
    <div className="border-2 rounded-xl p-3 border-sky-500 w-[200px] flex flex-col justify-center items-center">
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
      />
      <div className="text-center py-2">
        <h1 className=" font-bold ">{title}</h1>
        <p className="mb-3">{author}</p>
        <Link
          href="/dashboard/details"
          className="button-sm bg-sky-500 hover:bg-sky-700 text-white  py-2 px-4 rounded-lg text-center"
        >
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
