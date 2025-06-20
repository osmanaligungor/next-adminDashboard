"use client";

import { FC } from "react";
import { GoSearch } from "react-icons/go";

const Input: FC = () => {
  return (
    <form className="flex gap-2 pl-1 items-center text-gray-600">
      <button>
        <GoSearch />
      </button>

      <input type="text" className="p-1 outline-none" placeholder="ara" />
    </form>
  );
};

export default Input;
