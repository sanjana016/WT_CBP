import React from 'react'

const Upload = () => {
  return (
    <div><form>
    <div class="mb-3">
      <label for="postTitle" class="form-label">Post title</label>
      <input type="email" class="form-control" id="postTitle" aria-describedby="postTitle" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="password" class="form-control" id="description" />
    </div>
    <button type="submit" class="btn btn-primary">Upload</button>
  </form></div>
  )
}

export default Upload