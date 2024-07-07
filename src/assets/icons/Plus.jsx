export const Plus = (props) => {
  return (
    <div className="bg-transparent flex justify-center items-center ">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 11.25H12.75V4H11.25V11.25H4V12.75H11.25V20H12.75V12.75H20V11.25Z"
          fill={props.color}
        />
      </svg>
    </div>
  );
};
