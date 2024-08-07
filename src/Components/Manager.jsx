import { useEffect, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Manager = () => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" mx-auto max-w-4xl  py-14">
        <h1 className="text-4xl font-bold text-center">
          {" "}
          <span className="text-green-500"> &lt;</span>Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>
        <div className=" flex-col flex p-4 gap-8">
          <input
            onChange={handleChange}
            value={form.site}
            name="site"
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 outline-none text-black px-4 py-1"
            type="text"
          />
          <div className="flex w-full gap-8 ">
            <input
              onChange={handleChange}
              value={form.username}
              name="username"
              placeholder="Enter username"
              className="rounded-full w-1/2 border border-green-500 outline-none text-black px-4 py-1"
              type="text"
            />
            <div className="relative w-1/2">
              <input
                onChange={handleChange}
                value={form.password}
                name="password"
                placeholder="Enter password"
                className="rounded-full w-full border border-green-500 outline-none text-black px-4 py-1"
                type={showPass ? "text" : "password"}
              />
              {showPass ? (
                <span
                  onClick={showPassword}
                  className="absolute right-4 text-green-700 top-[7px] cursor-pointer
              "
                >
                  <FaEyeSlash size={20} />
                </span>
              ) : (
                <span
                  onClick={showPassword}
                  className="absolute right-4 text-green-700 top-[7px] cursor-pointer
              "
                >
                  <FaRegEye size={20} />
                </span>
              )}
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-300 hover:bg-green-200 rounded-full px-6 py-2 w-fit font-semibold  mx-auto gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="password">
          <h1 className=" font-bold text-xl mt-7 mb-4">Your Password</h1>
          {passwordArray.length === 0 ? (
            <div>No passwords to show</div>
          ) : (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, idx) => (
                  <tr key={idx}>
                    <td className="text-center py-2 border border-white min-w-32 flex space-x-2 justify-center  items-center  ">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                      <button onClick={() => copyText(item.site)}>
                        <img
                          className="w-6 cursor-pointer"
                          src="https://media.lordicon.com/icons/system/regular/99-copy.svg"
                          alt=""
                        />
                      </button>
                    </td>
                    <td className="text-center py-2 border border-white min-w-32     items-center">
                      <div className="flex space-x-2 justify-center  items-center">
                        <p>{item.username}</p>

                        <button onClick={() => copyText(item.username)}>
                          <img
                            className="w-6 cursor-pointer"
                            src="https://media.lordicon.com/icons/system/regular/99-copy.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </td>
                    <td className="text-center py-2 border border-white min-w-32   ">
                      <div className="flex space-x-2 justify-center  items-center">
                        <p>{item.password}</p>

                        <button onClick={() => copyText(item.password)}>
                          <img
                            className="w-6 cursor-pointer"
                            src="https://media.lordicon.com/icons/system/regular/99-copy.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
