import React, { useState, useEffect } from 'react';
import { account } from "../../appwrite/appwriteConfig";

const ProtectedRoute = ({ children }) => {
    const [userdetail, setUserDetail] = useState(null);

    useEffect(() => {
      const promise = account.get();
  
      promise.then(
        function (response) {
          setUserDetail(response);
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }, []);
   
    if(Boolean(userdetail)) return children;
    return (
      <div>
        You are not authorized for this action.
      </div>
    );
}

export default ProtectedRoute;
