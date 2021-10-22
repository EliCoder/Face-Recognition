 const Rank = ({Name, Entries}) => {
 return (
  <div>
   <div className="f3  white center">
   {`${Name}, your current rank is:`}
   </div>
   <div className="f1 white center">
    {`#${Entries}`}
   </div>
  </div>
 )
}

export default Rank
