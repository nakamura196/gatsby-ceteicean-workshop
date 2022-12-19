import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Pb from "./Pb"
import Note from "./Note"
import PlaceName from "./PlaceName"
import Seg from "./Seg"
import Layout from "../../components/layout"

import "./ceteicean.css"
import "./style.css"

const MyCeteicean = ({pageContext}) => {

  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    "tei-note": Note,
    "tei-placename": PlaceName,
    "tei-seg": Seg,
    "tei-pb": (props) => <Pb {...props}/>,
  }

  return(
    <Layout>
      <div style={{marginTop: 24, overflowX: "auto", writingMode: "vertical-rl", width: "100%"}}>
        <Ceteicean pageContext={pageContext} routes={routes}/>
      </div>
    </Layout>
  )

}

export default MyCeteicean
