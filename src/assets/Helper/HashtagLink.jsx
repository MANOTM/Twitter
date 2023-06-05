import React from 'react';

export const HashtagLink = ({ text }) => {
  if (!text) {
    return null; // or handle the case when text is undefined/null
  }

  const convertedText = text.replace(
    /#([\p{L}\p{N}_-]+)/gu,
    '<a class="underline" href="/search/$1">#$1</a>'
  );

  return <span dangerouslySetInnerHTML={{ __html: convertedText }} />;
};


// import { Link } from 'react-router-dom';

// export const HashtagLink = ({ text }) => {
//   const convertedText = text.replace(
//     /#([\p{L}\p{N}_-]+)/gu,
//     (match, hashtag) => (
//       <Link key={hashtag} className="underline" to={`/search/${hashtag}`}>
//         #{hashtag}
//       </Link>
//     )
//   );

//   const renderConvertedText = () => {
//     const parts = convertedText.split(/(#\p{L}\p{N}_-+)/gu);
//     return parts.map((part, index) => {
//       if (part.startsWith("#")) {
//         return <React.Fragment key={index}>{React.cloneElement(part, { key: index })}</React.Fragment>;
//       }
//       return part;
//     });
//   };

//   return <span>{renderConvertedText()}</span>;
// };
