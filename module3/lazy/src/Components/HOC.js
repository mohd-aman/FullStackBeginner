
const styles = {
    dark : {
        background : 'black',
        color : 'white'
    } ,

    yellow : {
        background : "yellow",
        color : 'red'
    }
}


export default function HOC(WrappedComp){
    return function(args){
        let temp = {};
        if(args.dark){
            temp = {...styles.dark}
        }
        else if(args.yellow){
            temp = {...styles.yellow}
        }
        console.log(temp);
        return <WrappedComp style = {temp}/>
    }
    
}


