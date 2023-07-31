import React from "react";
import "./list.css";

export const List = () => {
  return (
    <div>
      <ul className="list">
        <li className="list-item"><i class="list-icon"></i><span className="list-text">Product discovery and building what matters</span></li>
        <li className="list-item"><i class="list-icon"></i><span className="list-text">Measuring to ensure updates are a success</span></li>
        <li className="list-item"><i class="list-icon"></i><span className="list-text">And much more!</span></li>


      </ul>


    </div>
  );
};


{/* <ul class="fa-ul">
<li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>List icons can</li>
<li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>be used to</li>
<li><span class="fa-li"><i class="fa-solid fa-spinner fa-pulse"></i></span>replace bullets</li>
<li><span class="fa-li"><i class="fa-regular fa-square"></i></span>in lists</li>
</ul> */}
