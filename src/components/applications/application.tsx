import React from 'react'

function Application() {
  return (
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>
    
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" />
        </div>
        <div>
            <label htmlFor="job-location">Job Locations</label>
            <select name="job-location" id="job-location">
                <option value="">Select a country</option>
                <option value="US">United State</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">=India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label>
                <input type='checkbox' id='terms'/>
            </label>
        </div>
        <button>Submit</button>
    </form>
  )
}
export default Application