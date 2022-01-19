import { collection, getDocs } from "firebase/firestore";
import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import db from "../../../utils/firebase";
import "./GetTask.scss";

const GetTask = () => {
  const [dataTask, setDataTask] = useState([]);
  console.log(dataTask);

  useEffect(() => {
    const getData = async () => {
      try {
        const arrayTask = [];
        const querySnapshot = await getDocs(
          collection(db, "task"),
          orderBy("created", "desc")
        );
        querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
          let objTask = {
            name: doc.name,
            id: doc.id,
            data: doc.data(),
          };
          const newArrayTask = arrayTask.push(objTask);
          setDataTask(newArrayTask);
        });
      } catch (err) {
        console.throw(err);
      }
    };

    getData();
  }, []);

  return <></>;
};

export default GetTask;
