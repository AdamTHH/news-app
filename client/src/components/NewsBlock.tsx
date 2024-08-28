import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";


const NewsBlock = ({ children, section, date, likes, comments, dark}: any) => {

  function sectionColor(section: string) {
    switch (section) {
      case 'money':
        return 'text-green-600';
      case 'politics':
        return 'text-red-600';
      case 'sport':
        return 'text-blue-600';
      case 'world':
        return 'text-orange-600';
    }
  }

  return (
    <div className={`p-6 ${dark ? 'bg-transparent' : 'bg-black bg-opacity-30'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${dark ? 'text-black' : 'text-white'}`}>
            <span className={`font-bold ${sectionColor(section)}`}>| </span>
            {section}
          </h2>
      <p className={`text-3xl font-semibold ${dark ? 'text-black' : 'text-white'}`}>{children}</p>
      <p className={`pt-4 text-sm ${dark ? 'text-black' : 'text-white'}`}><span>{date}<AiFillLike className="ml-4 mr-2 inline-block" />{likes}  <FaComment className="ml-2 mr-2 inline-block" />{comments}</span></p>
    </div>
  )
}

export default NewsBlock;