import React, { useState } from "react";
import { storageService, dbService } from "../fbase";
import { v4 as uuidv4 } from "uuid";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");
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
  );
};

export default NweetFactory;
