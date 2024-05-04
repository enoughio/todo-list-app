
const ListHeader = ({listname})=> {

    function signOut(){
        console.log("sign oiut")
    }

    return (
      <div className="listheader" >
        <h1>{listname}</h1>
        <div className="buttoncontainer">
            <button className="creafte">Add New</button>
            <div className="signout" onClick="(signOut)">Sign Out</div>
        </div>
      </div>
    );
  }
  
  export default ListHeader;
  