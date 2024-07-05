import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div>
      <div className="mt-4 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/personalskill">
          Soft Skill
        </Link>
        <Link className="btn btn-primary" to="/technicalSkill">
          Technical Skill
        </Link>
      </div>
    </div>
  );
}
