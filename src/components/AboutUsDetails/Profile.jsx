import React from "react";


export default function Profile({profile}) {


  return (
    <div className="col-md-4 shadow profile p-4 rounded">
      <img src={profile.img} alt="" className="w-50 rounded" />
      <h4 className="mt-4 profile-name">{profile.name}</h4>
      <p>{profile.designation}</p>

      <small>{profile.email}</small> <br />

      <small> {profile.phone}</small>

      <div className="social-icon d-flex mt-4 justify-content-center">
        <div className="profile-icon">
          <a href={profile.fb} target="”_blank”">
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <div className="profile-icon">
          <a
            href={profile.linkedin}
            target="”_blank”"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
