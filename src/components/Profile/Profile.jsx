import "./Profile.css"

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="gridContent">
          <div className="item">
            <h3>Welcome, "{"Username"}"</h3>

            <div className="data">
              <div className="element">
                <div className="profileImg">
                  <img src="" alt="pofile image" />
                </div>
                <div className="name">
                  <h3>Username Name</h3>
                </div>
              </div>

              <div className="elementData">
                <form action="#" autoComplete="off" className="profileForm" method="post">
                  <div className="group">
                    <label htmlFor="username">Username to edit</label>
                    <input type="text" id="username" placeholder="Username" className="input" />
                  </div>
                  <div className="group">
                    <label htmlFor="name">name to edit</label>
                    <input type="text" id="name" placeholder="Name" className="input" />
                  </div>
                  <div className="group">
                    <label htmlFor="email">Email to edit</label>
                    <input type="email" autoComplete="off" id="email" placeholder="Email@example.com" className="input" />
                  </div>

                  <button className="button p-3 bg-slate-400">Update</button>
                </form>
              </div>
            </div>
          </div>

          <div className="item">
            <h3>Password</h3>
            <form action="/profile" method="post">
              <div className="group">
                <label htmlFor="oldPassword">Old Password</label>
                <input type="password" name="oldpassword" id="oldPassword" placeholder="Old password" className="input" />
              </div>
              <div className="group">
                <label htmlFor="newPassword">New Password</label>
                <input type="password" name="newpassword" id="newPassword" placeholder="New password" className="input" />
              </div>
              <div className="group">
                <label htmlFor="ConfirmPassword">Old Password</label>
                <input type="password" name="confirmpassword" id="ConfirmPassword" placeholder="Confirm password" className="input" />
              </div>
              <button className="button p-3">Update password</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile