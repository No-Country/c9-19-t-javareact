import React from 'react'

export const SideNav = () => {
  return (
    <div className="border-end bg-blue" id="sidebar-wrapper" >
    <div className="sidebar-heading bg-red"><img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" /></div>
    <div className="list-group list-group-flush bg-blue" >
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!">Dashboard</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!">Shortcuts</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!">Overview</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!">Events</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!">Profile</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!">Status</a>
    </div>
    </div>
  )
}
