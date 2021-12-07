type setter = React.Dispatch<React.SetStateAction<boolean>>;

export default function dismountAfterTwoSeconds(setVisibility:setter) {
  setTimeout(() => {
    setVisibility(false);
  }, 2000);
}