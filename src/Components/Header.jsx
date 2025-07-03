import { FaFolderPlus, FaUpload, FaUser } from "react-icons/fa"
import UserProfile from "./UserProfile"
import { useEffect, useState } from "react"
import { URL } from "../constants"

const DriveHeader = ({
  setCreateDirModel,
  filesInput,
  handleUpload,
  dirName,
  disabled,
  openUserProfile,
  setOpenUserProfile,
}) => {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" })







  useEffect(()=>{
    if(!disabled){
      console.log("disabled =>", disabled)
      getUserDetails()
    }
  },[])


  const handleOpenProfile = (e) => {
    e.stopPropagation()
    setOpenUserProfile((prev) => !prev)
  }

  const getUserDetails = async () => {
    const res = await fetch(URL + "/user", {
      credentials: "include",
    })

    const { data, status } = await res.json()
    if (status === 200) {
      setUserDetails(data)
    }
  }

  return (
    <div className="flex relative justify-between items-center px-2 py-4 border-b">
      <h1 className="text-2xl font-semibold text-gray-800">
        {dirName || "My Drive"}
      </h1>
      <div className="flex space-x-6">
        <button
          title="Create Folder"
          className="text-blue-600 hover:text-blue-800 text-2xl cursor-pointer disabled:text-blue-300"
          onClick={() => {
            setCreateDirModel(true)
          }}
          disabled={disabled}
        >
          <FaFolderPlus />
        </button>
        <button
          title="Upload File"
          className="text-blue-600 hover:text-blue-800 text-2xl cursor-pointer disabled:text-blue-300"
          onClick={() => filesInput.current.click()}
          disabled={disabled}
        >
          <FaUpload />
        </button>
        <button
          title="Upload File"
          className="text-blue-600 hover:text-blue-800 text-2xl cursor-pointer disabled:text-blue-300"
          onClick={handleOpenProfile}
          disabled={disabled}
        >
          <FaUser />
        </button>

        <input
          type="file"
          multiple
          className="hidden"
          ref={filesInput}
          onChange={handleUpload}
        />
        {openUserProfile && <UserProfile userDetails={userDetails} />}
      </div>
    </div>
  )
}

export default DriveHeader
