export const HashtagLink = ({ text }) => {
  const convertedText = text.replace(
    /#([\p{L}\p{N}_]+)/gu,
    '<a class="underline" href="/search/$1">#$1</a>'
  );
  return <span dangerouslySetInnerHTML={{ __html: convertedText }} />;
};
