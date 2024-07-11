"use client";

import { useEffect, useState } from "react";

export default function dataPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
        setIsLoading(true);
      const response = await fetch('https://www.wqxr.org/playlist-daily/2024/may/18/?scheduleStation=wqxr');

      if (!response.ok) {
        setError("Failed");
        setIsLoading(false);
      }
      const data = await response.json();
      setIsLoading(false);
      setData();
    }
    fetchData();
  }, []);

if (isLoading){
    return <p>Loading...</p>;
}
if (error){
    return <p>Error</p>;
}
let dataContent;

if(data){
    dataContent = <p data={data}></p>
}

return(
    <>
        <h1>Data Page</h1>
        {dataContent}
    </>
)
}


