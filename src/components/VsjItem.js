// import vsjitem.css
import './VsjItem.css'
import VsjSubItem from './VsjSubItem';


function VsjItem(props){
    return <p className="vsj">
        <h1>{props.message}</h1>
        <img src='varanasi.jpg'/>
        <VsjSubItem message="ggjgjgjjhgg"></VsjSubItem>
    </p>
}

export default VsjItem;