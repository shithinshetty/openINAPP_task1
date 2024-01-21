import React from "react";
import Image from "next/image";
import revenue from "../public/revenue.png";
import users from "../public/users.png";
import transaction from "../public/transaction.png";
import like from "../public/like.png";
import vector from "../public/Vector.png";

const Card = () => {
  return (
    <div id="card-div">
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative border-2 border-slate-300">
        <Image
          src={revenue}
          width={36}
          height={36}
          className="my-2 p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#7FCD93] "
          alt="Card"
        />
        <p>Total Revenues</p>

        <h2 className="text-[1.53em] font-bold">$ 2,129,430</h2>
        <Image src={vector} alt="vector" className=" absolute left-[180px] " />
        <h2 className="absolute bottom-6 right-5 text-[.53em] font-bold bg-[#E9F9EB] p-1 text-[#4AD15F] rounded-[10px]">
          + 2.5%
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative border-2 border-slate-300">
        <Image
          src={transaction}
          width={36}
          height={36}
          className="my-2 p-2 rounded-[20px] cursor-pointer  transition duration-500 bg-[#DEBF85]"
          alt="Card"
        />
        <p>Total Transactions</p>
        <h2 className="text-[1.53em] font-bold">1520</h2>
        <h2 className="absolute bottom-6 right-5 text-[.53em] font-bold bg-[#E9F9EB] p-1 text-[#4AD15F] rounded-[10px]">
          + 1.7%
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative border-2 border-slate-300">
        <Image
          src={like}
          width={36}
          height={36}
          color="#FFF"
          className="my-2 p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#ECA4A4]"
          alt="Card"
        />
        <p>Total Likes</p>
        <h2 className="text-[1.53em] font-bold">9721</h2>
        <h2 className="absolute bottom-5 right-5 text-[.53em] font-bold bg-[#E9F9EB] p-1 text-[#4AD15F] rounded-[10px]">
          + 1.4%
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative border-2 border-slate-300">
        <Image
          src={users}
          width={36}
          height={36}
          className="my-2 p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#A9B0E5]"
          alt="Card"
        />
        <p>Total Users</p>
        <h2 className="text-[1.53em] font-bold">9721</h2>
        <h2 className="absolute bottom-5 right-5 text-[.53em] font-bold bg-[#E9F9EB] p-1 text-[#4AD15F] rounded-[10px]">
          + 4.2%
        </h2>
      </div>
    </div>
  );
};

export default Card;
