function Slots({children, footer, header = 'header'}) {
    return (
     <div>
      {header}
      {children}
      {footer}
     </div>
    )
   }
   
   export default Slots