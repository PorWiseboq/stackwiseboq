// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
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
class FlowLayout_d64677b8 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {

  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
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
      <div className={"internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="d64677b8" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        <div className="container-fluid">
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            {this.getDataFromNotation("Blog", true).map((data, i) => {
              return (
                <div className="internal-fsb-element col-12" internal-fsb-guid="0dc16d9d" key={"item_" + i}>
                  <div className="container-fluid">
                    <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                      <div className="internal-fsb-element col-12" internal-fsb-guid="628375e3" dangerouslySetInnerHTML={{__html: CodeHelper.escape(this.getDataFromNotation("Blog[" + i + "].bid"))}}></div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="d531620d" dangerouslySetInnerHTML={{__html: CodeHelper.escape(this.getDataFromNotation("Blog[" + i + "].title"))}}></div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="8e81c57d" dangerouslySetInnerHTML={{__html: CodeHelper.escape(this.getDataFromNotation("Blog[" + i + "].description"))}}></div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="701c71d4" dangerouslySetInnerHTML={{__html: CodeHelper.escape(this.getDataFromNotation("Blog[" + i + "].keywords"))}}></div>
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
DeclarationHelper.declare('Document', 'Controls.FlowLayout_d64677b8', FlowLayout_d64677b8);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.