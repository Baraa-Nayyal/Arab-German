import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="bdg-[url('./assests/background')]  fixed top-0 z-[50] h-full w-full bg-cover   flex items-center justify-center">
      <CircularProgress size={90} />
    </div>
  );
};

export default Loading;
