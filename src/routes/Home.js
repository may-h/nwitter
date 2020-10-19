import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import Nweet from "../components/Nweet";
import { v4 as uuidv4 } from "uuid";

const Home = ({ userObj }) => {
  // 5. home에서 userObje를 받는다.
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");

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

  const onSubmint = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      //사진 첨부 안할 수 도 있으니까.
      const attachmentRef = await storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`); //랜덤이름을 만들고자 npm install uuid 해줌.
      const response = await attachmentRef.putString(attachment, "data_url"); //실제 업로드.
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };

    await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event) => {
    //console.log(event.target.files);
    const {
      target: { files },
    } = event;
    const theFile = files[0];

    const reader = new FileReader(); //파일을 읽어주는 API
    reader.onloadend = (finishedEvent) => {
      //2. 읽는데 시간이 걸려서 다 읽으면 이벤트리스너 호출
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile); //1. 읽기 시작하고
  };

  const onClearAttachment = () => setAttachment(null);

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
        <input type="file" onChange={onFileChange} accept="image/*" />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img src={attachment} alt="" width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>{" "}
          </div>
        )}
      </form>
      <div>
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
