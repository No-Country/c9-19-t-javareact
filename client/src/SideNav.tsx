import React from 'react'

export const SideNav = () => {
  return (
    <div className="border-end bg-blue" id="sidebar-wrapper" >
    <div className="sidebar-heading bg-red"><img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" /></div>
    <div className="list-group list-group-flush bg-blue" >
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Dashboard</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Shortcuts</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Overview</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Events</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Profile</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Status</a>
    </div>
    </div>
  )
}
