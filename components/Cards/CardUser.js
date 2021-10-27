import React from "react";
import PropTypes from "prop-types";

// components
export default function CardUser({ user }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={user.imgSrc}
          alt="..."
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">Dany Bailey</p>
        <p className="text-base text-gray-400 font-normal">Software Engineer</p>
      </div>
    </div>
  );
}

CardUser.defaultProps = {
  color: "light",
};

CardUser.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
