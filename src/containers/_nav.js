import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'HairShare',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Dashboard']
  },
   
 
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Total Booking',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [


      {
        _tag: 'CSidebarNavItem',
        name: 'New Booking',
        to: '/base/new_Bookings',
      },
      
       
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Accepted Booking',
        to: '/base/accepted_Bookings',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cancelled Booking',
        to: '/base/cancelled_Bookings',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Completed Booking',
        to: '/base/completed_Bookings',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Request Order',
        to: '/base/request_order',
      },
     
      
       
  
     
      
      
      
     
       
    ],
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Pending Refund',
    to: '/base/pending_refund_Bookings',
    icon: 'cil-chart-pie'
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Refunded',
    to: '/base/refunded_Bookings',
    icon: 'cil-chart-pie'
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Userlist',
    to: '/base/userlist',
    icon: 'cil-chart-pie'
  },


   
   
   
 
 
 
 
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
