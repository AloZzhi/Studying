import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

export default function About() {
  let [route] = useSearchParams();
  let param = useParams()
  return <div>About ------{route.get("id")}
    <h4>{param.id}</h4>
  </div>;

}
