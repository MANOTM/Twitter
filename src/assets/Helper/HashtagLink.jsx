 
  export const HashtagLink = ({text}) => {
    const convertedText = text.replace(
        /#(\w+)/g,
        '<a class="underline" href="/search/$1">#$1</a>'
      );
      return <div dangerouslySetInnerHTML={{ __html: convertedText }} />;
  }
  

  