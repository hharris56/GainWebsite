import {getFromMasterDict} from "../../../models/artMasterList"
import { InfoCard } from "../../../components/gallery/gallery"
import "./imgView.css"

// viewImage is 'collectionName/shortName'
export default function ViewPage({ params }: { params: { viewImage: string } }){
    const collectionName = decodeURI(params.viewImage[0])
    const shortName = decodeURI(params.viewImage[1])
    let imgPath: string = getFromMasterDict(collectionName, shortName)
    return (
        imgPath == "" ?
        <div>oops, nothing was found for {collectionName} / {shortName}</div>
        :
        <div className="view-image-container">
            <img key="big image" src={`/art/${imgPath}`} className="view-image"/>
            <InfoCard name={shortName} size={0.75}/>
        </div>
    )
}