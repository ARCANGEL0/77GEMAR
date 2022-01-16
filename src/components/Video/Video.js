
import { React } from "react";
import sample from '../../assets/video/header.mp4';




export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <video className='videoTag' autoPlay loop muted >
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  );
}
