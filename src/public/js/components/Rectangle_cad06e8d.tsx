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
enum QuoteType {
  IN_CONTEST,
  OFFERING_CONSIDERATION,
  OFFERING_SUCCEEDED,
  OFFERING_FAILED,
  MISSING
}

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
  quoteType: QuoteType
});

// Auto[ClassBegin]--->
class Rectangle_cad06e8d extends Base {
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
      <div className={"internal-fsb-element internal-fsb-allow-cursor col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="cad06e8d" style={Object.assign({'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'height': '100vh', 'display': 'flex', 'background': 'linear-gradient(15deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'FsbBackgroundType': 'linear'}, this.props.forward && this.props.forward.styles || {})}>
        <div className="internal-fsb-element" internal-fsb-guid="6a56a9be" style={{'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1)'}}>
          <div className="container-fluid">
            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor" style={{'display': 'block'}}>
              <div className="internal-fsb-element offset-0" internal-fsb-guid="c6200677" style={{'fontSize': '24px', 'marginTop': '10px', 'marginLeft': '10px', 'marginBottom': '10px', 'float': 'left'}}>
                WiseBOQ
              </div>
              <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary" internal-fsb-guid="108bb2b9" style={{'paddingLeft': '15px', 'paddingRight': '15px', 'float': 'right', 'fontSize': '14px', 'marginTop': '10px', 'marginRight': '10px'}} type="button">
                <div className="internal-fsb-element" internal-fsb-guid="108bb2b9-text">
                  ออกจากระบบ
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="a30c3884" style={{'background': 'rgba(255, 255, 255, 0)', 'flexGrow': '1', 'WebkitFlexGrow': '1', 'display': 'flex'}}>
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="712e9de1" style={{'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'fontSize': '14px', 'width': '100px'}}>
            <div className="internal-fsb-element" internal-fsb-guid="74e4253b" style={{'null': 'undefined'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="04b90b11" style={{'display': 'block', 'width': '100%'}}>
                    <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-inactive.png" />
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="42b3dc9b" style={{'display': 'block', 'width': '100%'}}>
                    <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png" />
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="b6ec8d55" style={{'display': 'block', 'width': '100%'}}>
                    <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-inactive.png" />
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="40ada351" style={{'display': 'block', 'width': '100%'}}>
                    <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png" />
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="4bac7ab7" style={{'display': 'block', 'width': '100%'}}>
                    <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-inactive.png" />
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="7eb8a313" style={{'display': 'block', 'width': '100%'}}>
                    <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="3e557242" style={{'borderRightWidth': '2px', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'flexGrow': '1', 'WebkitFlexGrow': '1', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'background': 'rgba(255, 255, 255, 1)'}}>
            <div className="internal-fsb-element" internal-fsb-guid="4069ed4d">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="086a7995">
                    ABC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.Rectangle_cad06e8d', Rectangle_cad06e8d);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.