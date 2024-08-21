import {useState, useEffect} from "react";
import {useProfile} from "../../Profile/Profile.js";

import {SettingsInputBox} from "/src/ui/components/molecules/SettingsInputBox/SettingsInputBox.jsx";
import {SettingsSaveButton} from "/src/ui/components/atoms/Buttons/SettingsSaveButton/SettingsSaveButton.jsx";
import {EditProfileImgButton} from "/src/ui/components/atoms/Buttons/EditProfileImgButton/EditProfileImgButton.jsx";

import "./SettingsEditProfile.css";

export const EditProfile = () => {
  const [lastName, setLastName] = useState("");
  const {userDetails, updateLastName} = useProfile();
  const [isLoading, setIsLoading] = useState(true);

  // Logic for profile data save button
  const handleSave = async () => { // TODO: put in a separate component
    try {
      await updateLastName(lastName);
      console.log("LastName successfully updated!");
    } catch (error) {
      console.error("Error saving lastName:", error);
    }
  };

  useEffect(() => {
    if (userDetails) {
      setIsLoading(false);
    }
  }, [userDetails]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className={'edit-profile-container'}>
      <div className={'edit-profile-info-container'}>
        <div className={'edit-profile-img-box'}>
          <EditProfileImgButton/>
        </div>
        <div className={'edit-profile-info'}>
          <ul className={'edit-profile-list'}>
            <SettingsInputBox
              title={'Your Name'}
              type={'text'}
              placeholder={userDetails.firstName}
            />
            <SettingsInputBox
              title={'Last Name'}
              type={'text'}
              placeholder={userDetails?.lastName || 'enter your last name'} /* TODO: fix save user data logic */
              onChange={(e) => setLastName(e.target.value)}
            />
            <SettingsInputBox
              title={'Your Email'}
              type={'email'}
              placeholder={userDetails.email}
            />
            <SettingsInputBox
              title={'Password'}
              type={'password'}
              placeholder={'your password'}
            />
            <SettingsInputBox
              title={'Date of Birth'}
              type={'text'}
              placeholder={'your birthday'}
            />
            <SettingsInputBox
              title={'Present address'}
              type={'text'}
              placeholder={'your address'}
            />
            <SettingsInputBox
              title={'Permanent Address'}
              type={'text'}
              placeholder={'your address'}
            />
            <SettingsInputBox
              title={'City'}
              type={'text'}
              placeholder={'your city'}
            />
            <SettingsInputBox
              title={'Postal Code'}
              type={'text'}
              placeholder={'your code'}
            />
            <SettingsInputBox
              title={'Country'}
              type={'text'}
              placeholder={'your country'}
            />
          </ul>
        </div>
      </div>
      <SettingsSaveButton label={'Save'} onClick={handleSave}/>
    </div>
  )
}