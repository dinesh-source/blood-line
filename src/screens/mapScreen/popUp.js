import mapboxgl from "mapbox-gl";
export const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<div class="card-container">
      <h1>Request</h1>
      <p>Send request to the this user</p>
      <div class="card-body">
        <table cellSpacing="10" >
          <tr>
            <th >Blood Group</th>
            <td>O+</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>20</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
        </table>
        <button class="user-request-btn" >Send Request</button>
      </div>
    </div>
  `
);
