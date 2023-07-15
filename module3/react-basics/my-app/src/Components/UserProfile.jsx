
export default function UserProfile(props){
    // console.log(props);
    // console.log(props.name);
    // console.log(props.occupation);
    let {name,age,occupation} = props;
    // props.name = "Updated Name"; // props are immutable, it's not allowed 
    return(
        <h3>Name : {name}, Age : {age},
                     Occupation : {occupation}</h3>
    )
}