import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { auth } from "firebase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null); //다른 곳에서도 쓰일 수 있는 데이터는 on top 에 있는게 좋다. 그래야 라우터로 보내고 컴포넌트로 보낼 수 있으니까~

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        }); // 1.로그인되면 userObj에 set해준다.
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        /> //2. userObj가 router로 넘겨진다.
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
