import React, { useState } from "react";
import profileApi from "../../api/profileApi";

export default function UpdateProfileModal({ open, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const onChangeValue = (e, key) => {
    e.preventDefault();
    setError("");
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const onCloseModal = () => {
    setError("");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await profileApi.updateProfile(form);
    console.log(res);
    if (res.status !== 204 && res.status !== 200) {
      setError("Update fail! Please try again");
    } else {
      onCloseModal();
      location.reload();
    }
  };

  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-[99999]">
            <div className="relative my-6 mx-auto w-[50vw] md:w-[100vw]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"></h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onCloseModal}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 pb-0 flex-auto">
                  <h3 className="text-xl font-normal text-center">
                    Update your profile
                  </h3>
                  <p className="text-center text-red-500">
                    {error ? error : ""}
                  </p>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="firstName"
                        >
                          First name
                        </label>
                        <input
                          type="firstName"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="First name"
                          style={{ transition: "all .15s ease" }}
                          value={form.firstName}
                          onChange={(e) => onChangeValue(e, "firstName")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="lastName"
                        >
                          lastName
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Last name"
                          style={{ transition: "all .15s ease" }}
                          value={form.lastName}
                          onChange={(e) => onChangeValue(e, "lastName")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <input
                          type="address"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="First name"
                          style={{ transition: "all .15s ease" }}
                          value={form.address}
                          onChange={(e) => onChangeValue(e, "address")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          type="city"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="First name"
                          style={{ transition: "all .15s ease" }}
                          value={form.city}
                          onChange={(e) => onChangeValue(e, "city")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          type="phone"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="First name"
                          style={{ transition: "all .15s ease" }}
                          value={form.phone}
                          onChange={(e) => onChangeValue(e, "phone")}
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Submit
                        </button>
                        <button
                          className="bg-sky-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={onCloseModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
