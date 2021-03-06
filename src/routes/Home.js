import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import Nweet from "../components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  // 5. home에서 userObje를 받는다.
  const [nweets, setNweets] = useState([]);

  // 이전 방식의 get
  //   const getNweets = async () => {
  //     const dbNweets = await dbService.collection("nweets").get(); // get() gives us QueryDocumentSnapshot
  //     dbNweets.forEach((doc) => {
  //       const nweetObject = {
  //         ...doc.data(),
  //         id: doc.id,
  //       };
  //       setNweets((prev) => [nweetObject, ...prev]); //setXXX 메서드에 인자값을 받으면, 갖고 있는 현재(혹은 이전)데이터를 넘겨 받을 수 있다.
  //     });
  //   };

  useEffect(() => {
    // getNweets(); ->옛날 방식... oonSnapshot을 사용하자 (query 대신에 snapshot을 사용)
    //onSnapshot을 사용하면 re-render하지 않는다. 한번에 가져온다.
    dbService.collection("nweets").onSnapshot((snapshot) => {
      //실시간!!!
      //read, create, delete, update 할때마다
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
