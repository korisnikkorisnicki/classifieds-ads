const useShortcut = ({ text, length }) => {
  let textToShow = text;
  if (textToShow.length > length) {
    textToShow = textToShow.substring(0, length) + "...";
  }

  return { textToShow };
};

export default useShortcut;
