import React, { useState } from "react";
import Student from "./Student";

export default function StudentList({ studentData }) {
  return (
    <>
      {studentData.map(({ id, name, age, address }) => {
        return (
          <Student key={id} id={id} name={name} age={age} address={address} />
        );
      })}
    </>
  );
}
