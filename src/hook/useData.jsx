import { useEffect, useState } from "react";

const useData = () => {
    const [house, setHouse] = useState([]);
    useEffect(() => {
        fetch("/house.json")
          .then((res) => res.json())
          .then((data) => setHouse(data));
      }, []);
    return [house];
};

export default useData;