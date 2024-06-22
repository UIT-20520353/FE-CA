import React, { useCallback, useEffect, useState } from "react";
import profileApi from "../../api/profileApi";
import UpdateProfileModal from "./update-profile-modal";

const Profile = () => {
  const [profile, setProfile] = useState(undefined);
  const [isShowUpdateModal, setShowUpdateModal] = useState(false);

  const getProfile = useCallback(async () => {
    const res = await profileApi.getProfile();
    if (res.status === 200) {
      setProfile(res.data);
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <main className="flex flex-col relative">
      <div className="w-full h-24 bg-blue-600" />
      <div className="px-20 mt-5">
        <div className="w-full flex items-center justify-between">
          <h1
            className="text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
          >
            Profile
          </h1>

          <button
            onClick={() => setShowUpdateModal(true)}
            className="bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
          >
            Update profile
          </button>
        </div>
        <div className="w-full grid grid-cols-3 mt-5 gap-3">
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">First name:</p>
            <p className="text-base ">{profile?.firstName}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">Last name:</p>
            <p className="text-base ">{profile?.lastName}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">Email:</p>
            <p className="text-base ">{profile?.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">Phone:</p>
            <p className="text-base ">{profile?.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">Address:</p>
            <p className="text-base ">{profile?.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">City:</p>
            <p className="text-base ">{profile?.city}</p>
          </div>
        </div>
      </div>

      <UpdateProfileModal
        open={isShowUpdateModal}
        onClose={() => setShowUpdateModal(false)}
      />
    </main>
  );
};

export default Profile;
