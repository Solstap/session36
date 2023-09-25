import MyComponent from "./MyComponents"

function Proxy(props) {
 console.log(props)
 return <div style={{border: "1px solid red"}}>
  <MyComponent {...props} birthday={false}/>
 </div>
}
export default Proxy