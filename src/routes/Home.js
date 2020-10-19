import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get(); // get() gives us QueryDocumentSnapshot
    dbNweets.forEach((doc) => {
      setNweet((prev) => [doc.data(), ...prev]); //setXXX 메서드에 인자값을 받으면, 갖고 있는 현재(혹은 이전)데이터를 넘겨 받을 수 있다.
    });
  };

  useEffect(() => {
    getNweets();
  }, []);

  const onSubmint = async (event) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmint}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on you mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
