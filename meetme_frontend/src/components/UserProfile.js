import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { fetchUser } from '../utils/fetchUser';

const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';

const UserProfile = () => {
  const [user, setUser] = useState();
  const [pins, setPins] = useState();
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('created');
  const navigate = useNavigate();
  const { userId } = useParams();

  const User = fetchUser()

  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    if (text === 'Created') {
      const createdPinsQuery = userCreatedPinsQuery(userId);

      client.fetch(createdPinsQuery).then((data) => {
        setPins(data);
      });
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId);

      client.fetch(savedPinsQuery).then((data) => {
        setPins(data);
      });
    }
  }, [text, userId]);

  const logout = () => {
    /*global google*/
    localStorage.clear();
    google.accounts.id.disableAutoSelect();
    navigate('/login');
  };

  if (!user) return <Spinner message="Loading Planter..." />;

  return (
    <div className="relative pb-2 h-full justify-center items-center">
    <div className="flex flex-col pb-5">
      <div className="relative flex flex-col mb-7">
        <div className="flex flex-col justify-center items-center">
          <img
            className=" w-full h-370 2xl:h-510 shadow-lg object-cover"
            src="https://source.unsplash.com/1600x900/?plants,gardening,technology"
            alt="user-pic"
          />
          <img
            className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
            src={user.image}
            alt="user-pic"
          />
        </div>
        <h1 className="font-bold text-3xl text-center mt-3">
          {user.userName}
        </h1>
        <div className="absolute top-0 z-1 right-0 p-2">
          {userId === user._id && (
                <div id = 'signOutDiv' className ="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none shadow-md" onClick={logout}> Sign out</div>
           )}
        </div>
      </div>
      <div className="text-center mb-7">
        <button
          type="button"
          onClick={(event ) => {
            setText(event.target.textContent);
            setActiveBtn('created');
          }}
          className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
        >
          Created
        </button>
        <button
          type="button"
          onClick={(event) => {
            setText(event.target.textContent);
            setActiveBtn('saved');
          }}
          className={`${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`}
        >
          Saved
        </button>
      </div>

      <div className="px-2">
        <MasonryLayout pins={pins} />
      </div>

      {pins?.length === 0 && (
      <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
        No Inspiration Found!
      </div>
      )}
    </div>

  </div>
);
};

export default UserProfile