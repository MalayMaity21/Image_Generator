import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#ffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loading;
