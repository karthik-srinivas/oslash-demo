import React from "react";

const PanelBody: React.FC = ({children}) => {
    return <div className="panel__body">
        {children}
    </div>
}


export default PanelBody;