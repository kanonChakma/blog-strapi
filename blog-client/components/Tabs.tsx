import { ICategory } from "@/types";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IPropTypes {
  categories: ICategory[];
}

const Tabs: NextPage<IPropTypes> = ({ categories }) => {
  const router = useRouter();
  const isActiveLink = (categorie: ICategory) => {
    return categorie.attributes.slug === router.query.category;
  };

  return (
    <div className="my-8 flex justify-between items-center border-b-2 border-gray-100">
      <ul className="flex items-center">
        <li
          className={
            "mr-6 border-b-4 pb-6 rounded-sm" +
            `${
              router.pathname === "/"
                ? "border-b-4 border-primary text-primary"
                : "border-white border-b-4 text-gray-400"
            }`
          }
        >
          <Link href="#">Recent</Link>
        </li>
        {categories.map((categorie) => {
          return (
            <li
              key={categorie.id}
              className={
                "mr-6 border-b-4 pb-6 rounded-sm border-primary" +
                `${
                  isActiveLink(categorie)
                    ? " border-b-4 border-primary text-primary"
                    : "border-b-4 border-white text-gray-400"
                }`
              }
            >
              <Link href="#">{categorie.attributes.Title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
