// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;

// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState { 
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_a0b170ee extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="a0b170ee" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            {this.getDataFromNotation("Blog", true).map((data, i) => {
              return (
                <div className="internal-fsb-element col-12" internal-fsb-guid="76514d5e" key={"item_" + i}>
                  
                  <div className="container-fluid">
                    
                    <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                      
                      {this.getDataFromNotation("Blog[" + i + "].title", true).map((data, j) => {
                        return (
                          <div className="internal-fsb-element col-12" internal-fsb-guid="181a52c5" key={"item_" + j}>
                            ABC
                          </div>
                        )
                      })}
                      
                      {this.getDataFromNotation("Blog[" + i + "].body", true).map((data, j) => {
                        return (
                          <div className="internal-fsb-element col-12" internal-fsb-guid="936c1a91" key={"item_" + j}>
                            <div className="html">
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    
                  </div>
                  
                </div>
              )
            })}
            
          </div>
          
        </div>
        
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_a0b170ee', FlowLayout_a0b170ee);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.