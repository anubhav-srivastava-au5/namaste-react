import Button from "./Button"

const ButtonList = () =>{
    const List=["All","Music","Action Thrillers","Trailers","T-Series","Kapil Sharma","Dramedy","Akshay Kumar","Live"]
    return (
        <div className="flex">
            {
           List.map ((val,i) => (
 <Button key={i} name={val}/>
           ))
        }
        {/* <Button name="All" />
        <Button name="Music" />
        <Button name="Action Thrillers" />
        <Button name="Trailers" />
        <Button name="T-Series" />
        <Button name="Kapil Sharma" />
        <Button name="Dramedy" />
        <Button name="Akshay Kumar" />
        <Button name="Live" /> */}
        {/* <Button name="Bollywood Movies" /> */}
        </div>
    )
}

export default ButtonList