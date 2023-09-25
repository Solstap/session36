function NoName() {
    return <p>You didn't set a name</p>
  }
  
  function MyComponent({birthday, name, age}) {  
    console.log(birthday, name, age)
    const styles = {}
  
    if(birthday) {
      styles.color = "red"
    }
  
    if(!name) {
      return <NoName/>
    }
    
    return <h1 style={styles}>Hello {name}, I am {age}</h1>
  }
  
  export default MyComponent