import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../firebase_config'
import Moment from 'react-moment';
import './Table.css'
import {
  CBadge,
  CButton, 
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {

  const [todos,setTodos] = useState([])
  const [barbers,setBarbers] = useState([])
  const [completeOrder,setCompleteOrder] = useState([])
  const [acceptedOrder,setAcceptedOrder] = useState([])
  const [cancelOrder,setCancelOrder] = useState([])
  const [newOrder,setNewOrder] = useState([])
  const [todoInput,setTodoInput] = useState(" ")
  const [pushOrder,setPushOrder] = useState([])
  const [acceptedOrdernew,setAcceptedOrdernew] = useState([])

  useEffect(() => {
    getTodo()
    getBarber()
    getAcceptedOrder()
   
    getCancelledOrder()
    getCompletedOrder()
    getNewOrder()
  
  }, [])






  function getBarber (){
   

    db.collection("barbers").orderBy("user_name").limit(12).onSnapshot(function(querySnapshot){
      setBarbers(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          name:doc.data().user_name,
          email:doc.data().email,
          mobile:doc.data().phone_number,
          
      
        }))
      )
    })
    console.log(barbers)

  }


  function getCompletedOrder(){

   

    db.collection("allOrderList").where('product_order.status', '==', "completed").orderBy("product_order.booking_date").limit(10).onSnapshot(function(querySnapshot){
      setCompleteOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          status:doc.data().product_order.status,
          booking_date:doc.data().product_order.booking_date,
          booking_time:doc.data().product_order.booking_time,
          buyer:doc.data().product_order.buyer,
          email:doc.data().product_order.email,
          phone:doc.data().product_order.phone,
          total_fees:doc.data().product_order.total_fees,
          order_id:doc.data().orderID,
          created_date:doc.data().created_at
       
      
      
        }))


      )
    })
  
    
    

  }


  function getAcceptedOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "accepted").orderBy("product_order.booking_date").limit(10).onSnapshot(function(querySnapshot){
      setAcceptedOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          status:doc.data().product_order.status,
          booking_date:doc.data().product_order.booking_date,
          booking_time:doc.data().product_order.booking_time,
          buyer:doc.data().product_order.buyer,
          email:doc.data().product_order.email,
          phone:doc.data().product_order.phone,
          total_fees:doc.data().product_order.total_fees,
          order_id:doc.data().orderID,
          created_date:doc.data().created_at
       
      
      
        }))
      )
    })
  
    
    console.log("complete", completeOrder)

  }




  function getCancelledOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "cancelled").orderBy("product_order.booking_date").limit(10).onSnapshot(function(querySnapshot){
      setCancelOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          status:doc.data().product_order.status,
          booking_date:doc.data().product_order.booking_date,
          booking_time:doc.data().product_order.booking_time,
          buyer:doc.data().product_order.buyer,
          email:doc.data().product_order.email,
          phone:doc.data().product_order.phone,
          total_fees:doc.data().product_order.total_fees,
          order_id:doc.data().orderID,
          created_date:doc.data().created_at
       
      
      
        }))
      )
    })
  
    
    console.log("complete", completeOrder)

  }

  function getNewOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "waiting").orderBy("product_order.booking_date").limit(10).onSnapshot(function(querySnapshot){
      setNewOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          status:doc.data().product_order.status,
          booking_date:doc.data().product_order.booking_date,
          booking_time:doc.data().product_order.booking_time,
          buyer:doc.data().product_order.buyer,
          email:doc.data().product_order.email,
          phone:doc.data().product_order.phone,
          total_fees:doc.data().product_order.total_fees,
          order_id:doc.data().orderID,
          created_date:doc.data().created_at
       
      
      
        }))
      )
    })
  
    
 

  }


  const stringDateee = Date(completeOrder.created_date).toLocaleString()

 

console.log("hello",stringDateee)


  function getTodo (){
    

    
    db.collection("users").limit(10).onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          name:doc.data().user_name,
          email:doc.data().email,
          mobile:doc.data().phone_number,
          image:doc.data().profile_image,
          address:doc.data().address,
      
        }))
      )
    })
  }

 
  console.log("acceptedOrdernew", acceptedOrdernew)





  return (
    <>
      <WidgetsDropdown />
      <CCard>
     
        
      </CCard>

     

      <CRow>
        <CCol>
          <CCard>
          
            <CCardBody>
              
            
            <div class="row">

              <div className="col-md-8 "  >
                <h4>Last ten new users</h4>
              

              <table className="  ">
                <thead className=" ">
                  
                  <tr>
                     
                    
                    <th>User</th>
                    <th className="text-center">Name</th>
                    <th>Phone</th>
                    <th className="text-center">Address</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {
      todos.map((user) =>(
            <tr key={user.id}>
            <td className="text-center">
              <div className="c-avatar">
              {
                  user.image?<img src={user.image} style={{width:"60px", height:"60px",borderRadius:"50px 50px"}} alt=" i" />:
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFhUXFRUXFRUVFxUVFxcXFRUXFhUXFRgYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8QFysdHR0tLS0tLS0tLS0tLSsrLS0tLS0tKy0tLS0rLS0tLS0tLS0tLS0tLSstNy03LSstKy0tK//AABEIAOIA3wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwEEBggEBQQCAQUAAAABAAIRAwQhMUEFElFhcYEGEyKRobHB8Acy0eEUI0JS8WJygrIkklMVM0Njg//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAwADAQEAAAAAAAAAAAECEQMSIQQxQSIT/9oADAMBAAIRAxEAPwD0FCELSBCEqgalQiEAkTkhUUio6V0pSoM16pIEGIBJMYwAs/pd0mZYqYcWl9R8imwXTGLnHJokd4XjOk9J1rVU6ys/WOWxo2NAwQjvLb8Tu3+TRDqf/wBhLXctWQFZs/xOpEduzvB/pc13nC8yLIviecI7c3CO5GtPWx8RbHExWn9oYCf9oUTfiXZJh9K0MG0sb3wHLylwef3HmFJR18hO6B/CGo9hs3TvR7//AJ9X+9rm+YWxZdLWep/7dek7c17Se6ZXh1nrDWipZ5//ADLD/wBgO14K1+DsrrjTtFI7gSPGQoae6JF45YG1qZ/49vqht3Zc1wjiLh4LorB0ht7Pn1KzYvOq8O7g28ps6vQUFc9Z+mFnLQanWUzmDTqkSNjg1T2TpVY6jtVtdskwA4OZf/mAqmq2UJUIhEJUIEKRKhAiEsJEE6EIWkCEqSFAkISwhUCjtNZrGl73BrQJJOAT1wHxR0s9jWUWtOqb3H9OwAjM8buOUVyfxA0621VgaYOqxpYCZE9okmDguWaXDDzUrqh9/RLrnH353KNFZWfib90x90Gu6flA97VGRuHOE4XZ/RNBwe7MjkSpKdd4+V54SR4DFRXbBv8A4Shmz6j7eCKmdWcfnAdvMg/9mkHvKQUGn5ajqZ/qJezvHab3FABF4vHlu+x+6UuBxHDdz2KG0dW3WmjAc4lpw7QqMI2tJlrkv/qAqfqdSdtY5+rzaTdy7kjbSWGIDmuxYfldx/a7f3qC32QBvW0iSw4g/Mx37XD1V0I7TVrsPae4zeHa0hw2g+imo6UcRDwHDeL+RBVey2q4hw1mnFp8xsO9MtVn1SC0y0/Kc94O8Sibeh9GOl/UMOs91Sm0XUyCXNE/pdjq7iIHiup0f8QLFVHzOaYvDheNuGO26bl4lRrFpkFXbWesb1jbnsHbAukfvbwzGSH2+gKGkKbgHNqMc03hwc0gg4GZVltQExN4vhfPVg03Ua0sJlpxGAJ/dudvGOa6TQ/TKqzVY86xaPynExIw1XE7sJzaAdqJp7GkXJdDuln4gvpViG1GkubfALZvF8XtJHJw2FdaiBCEIJkFCAtIAlQhAIKEIpF5B8T9KCpW6ppJFM3iABrRBJOJXr5Xg3TGmBaqoLtY65kmMc+WShGGwCb+5PnZf5BGqfpinG+cfT+UaN5d6bKkDCU6vZi1rXZOkcCPsQpRHrqW45eh71AAVO0qLD2CM+/3fzSkTmDs2jjuTA12335pC7u34fZBDXacDyPoYy2FNsdqLHEkSCIqNOD2m6/f9lMXb7jiDh3jNVKjYP8AqdozCqJNJ2EU3B7DNN4lh82neLxyTrE4P/LdgflOMOGH0U+jajXtdZ3nsuvYf2v3bj6LMaC0kG4g38kCuaQ4tOIN/EYqSz1S1wcP5GYU1sEuDxnE8QPfcog2/h5ZqiK0NhxjDEcCpaBkavMbj9/oi0M7IOwxyN4971FSKifrQsOkXU6jKoglpBIIkOyIcNhBg8V12iOlj6Dw+mXOYfms73S0jEuoOPyOF/ZwK4aqe0d9/eJ9VpaNdI1XfJIa6MWz8jm7CDI5wo0950bb6dekytSdrMeJBwO8EZEGQRtCtLzD4Z6TdStNSx1Dc/WczYKjRLtXc5t/IL06FWEyVCAtoUISohQIkSpECEr540tX169R/wC6o8jK4uMe9y926R2s0rLWqDEMMcT2R4leE0qclzr7sOJMLNaxRMZvKsU7MTkprDZNZbtlsBAnEmIH2hZtbkYLbPESPRXnWXXstQRLqZa8bY+V/mtKpYiJdEjM45bQpNAAdb1bvle0tdva4Rj3XLO104uizgrDKJ2TyU7rCadR1Ii9riN92e4fVaVlshuvjfj3RmtWpIyhZM8PD0UNWjG/v9V0TrKcgSBn6k+irVLNIkTHdeT4qbXTnXH39YxULoIj1m9a1rscYG/l/Czn04ynvCrOlUiIO+VPbu1FTbc7jt8/BRlqWgQZacDd78CqiXFg94KHWv4nzuT6XykZglQ03XzsWkqxaG9iP6o8/ooKTZU9ouaG8PKfUpLMz374IfqK0Yj+0eZWhYHdmoJiWjvY4PHi0KjaR2iNkDuEHxlWbGMRE9k/RSrGvYqpp22hUaZIfRM7paxw7hHNe6FeDaLpl9opi8zVptB/zAXvRRKmQEqFtkBBQhQIiEqEVyPxLtepZAz/AMjwOTQXHxDV5lZrL+Q522oG8g1xPkF1/wASbX1tZtJvy0hfs13wSOQDecrKstD/AIjLsax7g3Fc8q3jEmhbDhMYYQulp2UAXjfdhuu9Nyr6Gs23+Oey9b5pXe8lytddMC12XccL595+5WFVpargWg3HZduE3LsrTRxKyjompVuYyRPBoPEnwCm9LJv6Y/SiyjWp2ho+cBrj/UB9P9U2ysERlEmfvgujtOg6/wCHcx7QSL2lrtbC8AxBWDo6SMI43eCdpVuFlO/BxBxz2DmMVHUs0/UC4cBtWrSpzeb8b+Pvglq2fdyNwjH6JtLHKW+z35xlwWDa2wZAu8V21po4898GVzekrNEyL10xrFjnXApjsfedynqMUDmrbCQfNx+qgswvA5nknMd5j7pKA7RVRZrCXRv9/wAqWi2CTkPf0VehUkzKs1qkADaqio691+JP3K17FSGs45RHff8AVZtmpSVtUji0DK87zFw5SOaVY2egdjNS2UzkzWed0Ds+OqvW1y3QLQxo0eteIfVgx+1mI78eELqgiVOEISrTIQhIoFWdpvSPU05F73XMG/MncMe4Zq5aK7WNLnG4ewBvXLWh5qvL3Dc0TgMgueefVvDHbmbXZDBJkkmXEzeTiTvU1KkPw7AMqrsBj2fFadvoCD/CjslGaMZCpM8r1w7bd9L+jaYDQOH8rRL7lUsjbvfipn7ys3JrHHZ1x+Y3DFUrTaqlUatM6lMYRcT9lNXEgNycfBZmm9N06P5YaSYvIFw5rlldvXxY9ZtVZpV1mqgdZrNcQC0mTeYkKLSWqLQXNuD+1dhrYO+vNQWCzis7rDTc0AyHPgFxy1RsG1aNqsksnNp1h6ph5U5rvFYs5kfSApns9yoLE64K3Fy7PKyLZTxy95Z7Fzmk2zPiTeuqtbbj4Z4rm9JgC4YLUrNjlrSzkqxoE5Fa9Wz33DzW90f0ED23tuyBz3rdy1GJhtwdWkQopxK7/pJoMauswDeBcuBqMguC1hn2TPDqSg7PYrIOscfU+CqE4BWabro8l0c1mi6+AL+/2V2/Qfo/17+sePyWOkjJzsQwbhnxjO7mujOhn2ms2kyYxe+JDG+xcvbtH2FlGm2lTbDGiAPMk5km8lBYQlCAiLCEBC0gUVortYJcfqdwVa16Ra06re07wHH6LMqEvOs4yfLcFw5OaY/Ttx8Vy9R2y0Oquk3AYDZx3prKcKcMSFeS53KvVOPUVbRRBUdlo9hw3gieI+ivaqaGC8bR7807J1DG3Khbq0XLRpYLN0o24ncVK6YxLa2OL2aouvHkFyenLTUsh1qsG+4EEzJuhegWKoAxs46ox4LC6QWbrq1A6rXCm4uMkf43Z3qS++u1t14v2ay61Nj3YuAMYRySmhcrFmDiJd3J9Vly1i5Zsiz0dVxbH3VpzE+qMCnhly3a46ZVeyl92A2n0hZVu0I8i50mMCF1D2qEtU7Vro4yyaIqa4a4c11dGmGiNiUiE1z1nLK1vHCRDbKYcF5j0nsHV1DGBXplaos2v0WfbQHAhrQYk57YC3wb2588nV5ZC6Xot0Ur2shzW6tOb6jsIGOqMz4L0DRfw8oMg1e3H6ZOrtwEXbiV2dKmGgNaAANly9jxbUNB6FpWWn1dJsZuObjtJzWihCIRLCJQFQ+tXa0S4x5ngFmWu3Odc2Wjbn9lXOO/bmlZTXkz57fJ49eHBJ9mU6KnaxSManuXmtemRWeo1M9qgcUlUspHJmsnTKbZsI0qrbWSDwVhOhWVYoUbZqwHAxt4LQsj6b+0wCNu3nmlbTbsCk1wBdctSFyTOqAKnXryR72plaqqFR/aad6052r+tkpA+5V2uTnFZ26aOqPCVjgVlaQrFolYVfS5MtDoMRjBSTaW6dhVcwZgbiQqFoZAkLidIdc5slxcQDlel6O9Inmp1VQyPlE5bF0/z3Nxj/XV1XYMoa12ZIHfcuxs9AMa1jRc0QPquX0N26rAMjrH/G/zhdcuvBPK4fJy9kIkSlIvQ8xEJYQgRCVCDhqfTWzZsqjkwj/ZaFm6UWN13W6v97XN8YjxXl9xwPqmPadvouV+PhXec+cexUtL2Y/LaKJ2fmMnzV4YSLxtF/ivCnF2xSWfSFWmexUez+1xb5Lnfiz8rc+Tf2Pa6ip2hea2Hpla2G+p1g2VBreOPiut0R0npWjskdXUP6SZB/tdmd3muOfBli7Yc+OXjVD5UjXqk18EhSCouWnapy5P6xUxW8yFBXtUAqz7ZrT6xN1xtWay1XXFSOrea3HJLWfOaoWioZ5jlyUr6n0996pVK+8ffEk+a0Nqm5SAqsw3INVYrrFbTFzSVw+k6wLdYXOa7K7G71XZaRqy0hYrdBtcCTeSt4ees5y3xyw0hVZiI2R8rtl2XJUdHmrVtDdRpL3PENHFd5W0G0tiJ3LsOjfQ2z2UioG61WL3EyATjqjLYvRhd78eTklx0udHdEmgyXx1jsY/SP271roSrrJqONtt3SQhKhVCFIlKECBCRCD5+FLilBI/UU7WTXKqUPdxSmo04gJrUsKA6lpwKY6m5p9+/e5KIzCkbUI2kbFdrp1PR/S7qg1ahl7bgTi5uU7SPotx9defWWtqPa8ZG8bs11z68jlI814efDV3Hu4M+2Or+LtS0Q53I94j0VCvaZ1r/eKrW61QQf6fI/dZIt/YcZxN3esYY79azy037JayVb/ETzwXMWK0XY+q1Kdc43zszvwuW7i5ytNzyZG73OxU61SBdf7vSU6pzN2zEzvIVK3VxgIuygEYyrIW+Opsr5aL8kPVLQVaaeeJUttrQFzs9dMbtFXIJACuWWjKp6Js3WHWOe/AZLao2bVOMq6dNJLJZvzGCP1A9158l0srJ0eJqDc0nyHqtYr08M/l4PkX+tBCELs4BJKEFAIQkQCRCER8/SkcVCCnCoq0klKJUYcnNcoHoBQSUgRT4nit6w2maTdo7JHAR5QufViz14kYSOW5c+TDtHXjz61Jpi2QN8eayWVuwBtSaSJLr1nVasHks44ahnnutyxWmIxuN32WtTrgxF20Ll6Ffvy+yv06pzzxvlMsTHJvfigMoyxTA7WzumePBZrHyb9mCsU60bgBMrGm3Q6KrQHTcLsfGUtr0xS/dOXvcuRt+k3OGozDOMz9FnB5Ai/mk4t+0vLZ5HQ2XSjyYpVCxwwB1XNN+8Suz6O6bNRn5oh7SWuGwj0z5rL+Euhy91W01GA09U0mawBDiSNe44gQB3jIrtanRWiXazXPYD+lpBHKQSFrLi39GHyNX1Y0MdYufs7I8z6LVUVms7abQxogDD1JOZUq64Y9Zpw5Mu2VoSJQhaYIhCEAkSpCgRCUpqqPnVKHJiUop4KUOTJTlFTNKcCoA5SAoqRODlGCntcglfLmOZkbxOTsiNh4YrmLUxzXEOEEe5G5dNKr2+x9Y3Y4YH0KI59jyr1GsY9yqBBBINxFxClpuUsI3adSWwJk8PNXrNZmi95k+A+qybFUDePJbHR7Qle31yym7VpsA6yocpyjMmMNy5dbfHWZSet7ozo5lW102lgc0hxeCLtXUcDPeBzXV0Ph9ZA/Wcaj2/8AjeWlvAkNBcOfGVq9H+j1Kyt7MueRDqjsSJmAMAOG5bC6Y46nrOee74hsllZSY2nTaGsaIa1ogAY3KVCFpzCEFIiBCVIihCEiBUkJUIGoTkiI+cBxTpUcpSFVSSklNlOUDgUa2xMKc1FSA3qVjlACpGuRU8qVhVcFSNcgZpGwCqJAAeBcdu4rn9UtMOuIuIXTNnFQ2ywMqkEnVNw1okR/UMwiMqz03Pc1jQS9xAa0YkkwAF7z0J0ALHZhTN73nXqn+ogXcBgs7oP0NoWVorBwq1XARVxDWnKnsnM4+S7BE2VIhCIRCVIgCUIhIgVCQIlAFKUkolAAoQEKhUiVIoPm1ATUSrVPlLKYllA8FOBUcpQVBICnApjSpGgZqqkaCnl0cs8FXdXm5t58PumCnN7jJQif8SP0gu4Yd5UjXPM9lo4mfRRtgKRj1B0vRHpPVsrg2pfRJ7QEkNn9TcxHcV661wIBBkEAgjAg4FeAsqXr0/4e6b6yn+Hd81NssO1mEf4kxwIQsdgiUIVZAQhNQKiUFIoFlBSIRQhCEQICEBAqRBSSivmtqBiUqFQjUo9UqEDkBCFA6mn2nDmEIV/AgwUw9EIUUgT2oQqJGrrPh4f+Yz+2p/ofoEIUX8eqpUIVYCRCEUiEISoEFCEAlCEIBIhCihyRIhRH/9k=" style={{width:"60px", height:"60px",borderRadius:"50px 50px"}} alt=" i" />

                }
              </div>
            </td>
          
            <td className="text-center">
              <strong>{user.name}</strong>
            </td>
           
            <td className="text-center">
              <strong>{user.mobile}</strong>
            </td>
            <td>
               
              <div className="text-center">
                <strong>{user.address}</strong> 
              </div>
            </td>

            <td className="text-center">
              <strong>{user.email}</strong>
            </td>
          </tr>


      ))
    }
                  
                  
                  
               
                </tbody>
              </table>

           
                </div>
                

                  <div className="col-md-4  "  >
          
            <h4 className="text-center">Last ten new Barbers</h4>
            <table  >
              <thead  >
                
                
                <tr>
                   
             
                  <th className="text-center">UserName</th>
                  <th className="text-center">Phone</th>
                  

                </tr>

              </thead>
              <tbody>

              {
                
                  barbers.map( bab =>(

                    <tr key={bab.id}>
                 
                <td className="text-center">
                    <strong>{bab.name}</strong>
                  </td>
                  <td className="text-center">
                    <strong>{bab.mobile}</strong>
                  </td>
                 
                  
                </tr>

                  ))
                }
                

              
             
                
                
                
                
             
              </tbody>
            </table>
             </div>
             

              </div>
              
               <div class="row">

         
           

          
         </div>
           
            </CCardBody>


            
          </CCard>




          <CCard>
          
          <CCardBody>
            
          
         
         
          </CCardBody>


          
        </CCard>










          <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>Last ten new bookings  </h4>
            

              <table className="  ">
              <thead className=" ">
                
                <tr>
                   
                  
                  <th>Buyer</th>
                  <th>Order Id</th>
                  <th className="text-center">Created Date</th>
                  <th>Phone</th>
                  <th className="text-center">Booking Date</th>
                  <th className="text-center">Booking 
                  Time</th>
                  <th className="text-center">Total-Fee</th>
                  <th className="text-center">Status</th>
                </tr>


              </thead>
              <tbody>
                {newOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.order_id}</strong>
                       </td>
                       <td className="text-center">
                   
                   <strong>{new Date(corder.created_date).toLocaleString()}</strong>
                 </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
               
        
                 
        
              </tbody>
            </table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
       


        <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>Last ten  accepted booking</h4>
            

            <table>
              <thead>
                
                <tr>
                   
                  
                  <th>Buyer</th>
                  <th>Order Id</th>
                  <th className="text-center">Created Date</th>
                  <th>Phone</th>
                  <th className="text-center">Booking Date</th>
                  <th className="text-center">Booking 
                  Time</th>
                  <th className="text-center">Total-Fee</th>
                  <th className="text-center">Status</th>
                </tr>


              </thead>
              <tbody>
                {acceptedOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.order_id}</strong>
                       </td>
                       <td className="text-center">
                   
                         <strong>{new Date(corder.created_date).toLocaleString()}</strong>
                       </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
               
        
                 
        
              </tbody>
            </table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
       
       


        <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>Last ten completed Orders</h4>
            

              <table >
              <thead  >
                
                <tr>
                   
                  
                  <th>Buyer</th>
                  <th>Order Id</th>
                  <th className="text-center">Created Date</th>
                  <th>Phone</th>
                  <th className="text-center">Booking Date</th>
                  <th className="text-center">Booking 
                  Time</th>
                  <th className="text-center">Total-Fee</th>
                  <th className="text-center">Status</th>
                </tr>


              </thead>
              <tbody>
                {completeOrder.map( corder =>(
                  <>
                  
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.order_id}</strong>
                       </td>
                       <td className="text-center">
                   
                         <strong>{new Date(corder.created_date).toLocaleString()}</strong>
                       </td>
                     
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                     </>

                ))}
               
        
                 
        
              </tbody>
            </table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
       

        <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>Last ten cancelled Orders</h4>
            

             


                        <table>
<thead>
<tr>
                   
                  
                  <th>Buyer</th>
                  <th>Order Id</th>
                  <th className="text-center">Created Date</th>

                  <th>Phone</th>
                  <th className="text-center">Booking Date</th>
                  <th className="text-center">Booking 
                  Time</th>
                  <th className="text-center">Total-Fee</th>
                  <th className="text-center">Status</th>
                </tr>
</thead>
<tbody>
  {cancelOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.order_id}</strong>
                       </td>
                       <td className="text-center">
                   
                         <strong>{new Date(corder.created_date).toLocaleString()}</strong>
                       </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
</tbody>
</table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
        </CCol>
      </CRow>



      
    </>
  )
}

export default Dashboard
