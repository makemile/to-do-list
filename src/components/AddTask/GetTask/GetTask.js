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
          let id = doc.id;
          let name = doc.data().name;
          let object = { id, name };

          arrayTask.push(object);
        });
        setDataTask(arrayTask);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return <></>;
};

export default GetTask;
