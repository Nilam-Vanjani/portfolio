"use client";
import { useState, useEffect } from "react";

export default async function Projects() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>{data.message}</h1>
    </>
  );
}
