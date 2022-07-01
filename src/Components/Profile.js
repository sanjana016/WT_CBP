import React from "react";

const Profile = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="profile" class="form-label">
            Enter Your Bio
          </label>
          <input
            type="text"
            class="form-control"
            id="profile"
            aria-describedby="profile"
          />
        </div>
        <div class="mb-3">
          <label for="linkedIn" class="form-label">
            Linkedin Handle
          </label>
          <input type="text" class="form-control" id="linkedIn" />
        </div>
        <div class="mb-3">
          <label class="websiteUrl" for="exampleCheck1">
            Website URL
          </label>
          <input type="text" class="form-check-input" id="websiteUrl" />
        </div>
        <div class="mb-3">
          <label class="otherUrl" for="otherUrl">
            Other URL
          </label>
          <input type="text" class="form-check-input" id="otherUrl" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
