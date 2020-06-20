// Auto[Generating:V1]--->
    // PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.
    
// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
// ABC

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;

// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState { 
  data: any[];
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
class AbsoluteLayout_2ebbadbe extends Base {
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
  protected getDataFromNotation(notation: string): any[] {
    return super.getDataFromNotation(notation, this.state.data);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="2ebbadbe" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        <div className="container-fluid">
          <div className="row internal-fsb-absolute-layout internal-fsb-allow-cursor" style={{'minHeight': '41px'}}>
            <div className="internal-fsb-element" internal-fsb-guid="3d19935b" style={{'left': '640px', 'top': '15px', 'width': '150px'}}>
              Demo
            </div>
            <div className="internal-fsb-element" internal-fsb-guid="8c6c308a" style={{'left': '530px', 'top': '14px', 'width': '150px'}}>
              ABC
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Site', 'top-header.AbsoluteLayout_2ebbadbe', AbsoluteLayout_2ebbadbe);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

    // <--- Auto[Generating:V1]
    // PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.