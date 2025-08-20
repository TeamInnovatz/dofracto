                                                                                                                                                                                                                                                                        
import React, { useRef, useState } from "react";
import "./settings.css"; 

const AccountIcon = ({ active }) => (
  <span className="icon" style={{ color: active ? "#232323" : "#fff" }}>&#128100;</span>
);
const BellIcon = () => <span className="icon">&#128276;</span>;
const LockIcon = () => <span className="icon">&#128274;</span>;

const defaultAvatar = "https://api.dicebear.com/7.x/adventurer/svg?seed=rajesh";

const panels = {
  account: "account",
  notifications: "notifications",
  privacy: "privacy",
};

export default function SettingsPage() {
  const [panel, setPanel] = useState(panels.account);
  const [avatar, setAvatar] = useState(defaultAvatar);
  const uploadRef = useRef();

  
  const profile = {
    firstName: "Rajesh",
    lastName: "Kumar",
    phone: "+91 8976121212",
    email: "rajesh123@gmail.com",
  };

  
  const handleAvatarUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new window.FileReader();
      reader.onload = (ev) => setAvatar(ev.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleDeleteAvatar = () => setAvatar(defaultAvatar);

    let mainContent;
  if (panel === panels.account) {
    mainContent = (
      <>
        <div className="panel-header-row">
          <div style={{ flex: 1 }}></div>
          <div className="top-actions">
            <button className="cancel-btn" onClick={() => alert("Changes canceled.")}>Cancel</button>
            <button className="save-btn" onClick={() => alert("Settings saved.")}>Save</button>
          </div>
        </div>
        <div className="profile-row">
          <div className="avatar" id="avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <button className="upload-btn" onClick={() => uploadRef.current.click()}>Upload Now</button>
          <button className="delete-btn" onClick={handleDeleteAvatar}>Delete</button>
          <input
            type="file"
            ref={uploadRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleAvatarUpload}
          />
        </div>
        <div className="fields-row">
          <div className="field-box">
            <span className="field-label">First Name</span>
            <span className="field-value">{profile.firstName}</span>
          </div>
          <div className="field-box">
            <span className="field-label">Last Name</span>
            <span className="field-value">{profile.lastName}</span>
          </div>
        </div>
        <div className="fields-row">
          <div className="field-box">
            <span className="field-label">Phone Number</span>
            <span className="field-value">{profile.phone}</span>
          </div>
          <div className="field-box">
            <span className="field-label">E-mail Id</span>
            <span className="field-value">{profile.email}</span>
          </div>
        </div>
      </>
    );
  } else if (panel === panels.notifications) {
    mainContent = (
      <>
        <div className="panel-header-row">
          <div></div>
          <div className="top-actions">
            <button className="cancel-btn" onClick={() => alert("Changes canceled.")}>Cancel</button>
            <button className="save-btn" onClick={() => alert("Settings saved.")}>Save</button>
          </div>
        </div>
        <div className="section">
          <div className="notif-types">Notification Types</div>
          <div className="notif-desc">
            Each notification type has a clear purpose and actionable toggles to enable or disable them according to user preferences.
          </div>
          <div className="notif-toggle-row">
            <span className="notif-label">Earnings Alerts</span>
            <ToggleSwitch defaultChecked={true} />
          </div>
          <div className="notif-toggle-row">
            <span className="notif-label">Investment Updates</span>
            <ToggleSwitch defaultChecked={true} />
          </div>
          <div className="notif-toggle-row">
            <span className="notif-label">General Announcements</span>
            <ToggleSwitch defaultChecked={true} />
          </div>
          <hr className="divider" />
          <div className="notif-types">Delivery Preferences</div>
          <div className="notif-desc">
            Delivery Preferences section allows users to choose how they want to receive notifications from the platform.
          </div>
          <div className="notif-toggle-row">
            <span className="notif-label">Email Notifications</span>
            <ToggleSwitch defaultChecked={true} />
          </div>
          <div className="notif-toggle-row">
            <span className="notif-label">SMS Notifications</span>
            <ToggleSwitch defaultChecked={true} />
          </div>
          <div className="notif-toggle-row">
            <span className="notif-label">Push Notifications</span>
            <ToggleSwitch defaultChecked={false} />
          </div>
        </div>
      </>
    );
  } else if (panel === panels.privacy) {
    mainContent = (
      <>
        <div className="panel-header-row">
          <div></div>
          <div className="top-actions">
            <button className="cancel-btn" onClick={() => alert("Changes canceled.")}>Cancel</button>
            <button className="save-btn" onClick={() => alert("Settings saved.")}>Save</button>
          </div>
        </div>
        <div className="section">
          <div className="notif-types">Privacy</div>
          <div className="notif-desc"></div>
          <div className="privacy-row">
            <div className="privacy-label-group">
              <div className="privacy-label">Data Sharing Preferences</div>
              <div className="privacy-desc">
                Opt in to share anonymized data to help us improve our services and conduct research.
              </div>
            </div>
            <ToggleRow label="" />
          </div>
          <div className="privacy-row">
            <div className="privacy-label-group">
              <div className="privacy-label">Ad Personalization</div>
              <div className="privacy-desc">
                Enable to receive ads tailored to your interests based on your platform activity.
              </div>
            </div>
            <ToggleRow label="" />
          </div>
          <div className="privacy-row">
            <div className="privacy-label-group">
              <div className="privacy-label">Visibility</div>
              <div className="privacy-desc">
                Set your investment profile visibility to public or private.
              </div>
            </div>
            <div className="visibility-status">
              <span className="visibility-badge">Public</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="settings-header">
        <button className="back-btn" title="Back">&#8592;</button>
        <span className="settings-title">Settings</span>
      </div>
      <div className="settings-card">
        <div className="sidebar">
          <button
  className={`sidebar-btn${panel === panels.account ? " selected" : ""}`}
  onClick={() => setPanel(panels.account)}
>
  <AccountIcon active={panel === panels.account} />
  Account
</button>

<button
  className={`sidebar-btn${panel === panels.notifications ? " selected" : ""}`}
  onClick={() => setPanel(panels.notifications)}
>
  <BellIcon />
  Notification Preferences
</button>

<button
  className={`sidebar-btn${panel === panels.privacy ? " selected" : ""}`}
  onClick={() => setPanel(panels.privacy)}
>
  <LockIcon />
  Privacy
</button>

        </div>
        <div className="main-panel">
          <div className="main-content-box">{mainContent}</div>
        </div>
      </div>
    </div>
  );
} 
function ToggleSwitch({ defaultChecked }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={on} onChange={() => setOn((v) => !v)} />
      <span className="slider">
        <span className="toggle-label">{on ? "On" : "Off"}</span>
      </span>
    </label>
  );
}
 
function ToggleRow({ label }) {
  const [on, setOn] = useState(true);
  return (
    <div className="notif-toggle-row">
      <span className="notif-label">{label}</span>
      <label className="toggle-switch">
        <input type="checkbox" checked={on} onChange={() => setOn((v) => !v)} />
        <span className="slider">
          <span className="toggle-label">{on ? "On" : "Off"}</span>
        </span>
      </label>
    </div>
  );
}