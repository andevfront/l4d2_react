export const formatDescription = (text) => {
  return text.split("\n\n").map((paragraph, index) => (
    <p className="mt-3" key={index}>
      {paragraph}
    </p>
  ));
};
