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
class FlowLayout_5123ea55 extends Base {
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
    return super.getDataFromNotation(notation);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="5123ea55" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        <div className="container-fluid">
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            <div className="internal-fsb-element col-12" internal-fsb-guid="60212632">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="43729606" style={{'minHeight': '23px', 'textAlign': 'center'}}>
              ฟหกฟหกฟหก
            </div>
            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="419bab66" style={{'minHeight': '33px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="40e46c1a" style={{'textAlign': 'center', 'fontFamily': 'Archivo Narrow'}}>
                    à¸ªà¹à¸à¸£à¸²à¸¢à¸à¸²à¸£ à¹à¸à¸·à¹à¸­à¸à¸­à¸£à¸²à¸à¸²
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="79ed1d6a" style={{'background': 'rgba(247, 124, 237, 1)', 'borderTopColor': 'rgba(255, 255, 255, 1)', 'borderTopStyle': 'double', 'borderRightStyle': 'double', 'borderRightColor': 'rgba(255, 255, 255, 1)', 'borderLeftStyle': 'double', 'borderLeftColor': 'rgba(255, 255, 255, 1)', 'borderBottomStyle': 'double', 'borderBottomColor': 'rgba(255, 255, 255, 1)'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="ed0c842c" style={{'textAlign': 'center'}}>
                    CATEGORY
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="09c1e79e" style={{'background': 'rgba(247, 124, 237, 1)', 'borderTopStyle': 'double', 'borderTopColor': 'rgba(255, 255, 255, 1)', 'borderLeftStyle': 'double', 'borderLeftColor': 'rgba(255, 255, 255, 1)', 'borderRightStyle': 'double', 'borderRightColor': 'rgba(255, 255, 255, 1)', 'borderBottomStyle': 'double', 'borderBottomColor': 'rgba(255, 255, 255, 1)'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="5a7ab2c5" style={{'textAlign': 'center'}}>
                    PRODUCT LIST
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="83c5372b">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="176526aa" style={{'height': '1%', 'textAlign': 'center'}}>
                    QUANTITY
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element offset--1 offset--1 col-1 offset-0" internal-fsb-guid="b6311500">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="cb62d0ac" style={{'textAlign': 'center'}}>
                    UNIT
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-3 offset-0" internal-fsb-guid="4b5639be" style={{'minWidth': '100px', 'maxWidth': '250px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="d5655273" style={{'textAlign': 'center'}}>
                    NOTES
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="7cc6245b" style={{'textAlign': 'left'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="56aab5e4">
                    <select style={{'display': 'block', 'width': '100%'}}>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="0dbacc1a" style={{'textAlign': 'left'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="4c3d0546">
                    <select style={{'display': 'block', 'width': '100%'}}>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="9e33e27c" style={{'maxWidth': '100%', 'minWidth': '1%', 'textAlign': 'center'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element" internal-fsb-guid="4e8e63a5">
                    <input style={{'display': 'block', 'width': '100%'}} type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="c06b4ea8" style={{'textAlign': 'center'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="e4480a5d">
                    <select style={{'display': 'block', 'width': '100%'}}>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-3 offset-0" internal-fsb-guid="6da81c1e" style={{'textAlign': 'left'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="54e97a43">
                    <input style={{'display': 'block', 'width': '100%'}} type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="0c4c3d7e">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="c7adda70">
                    à¸à¸²à¸£à¸à¸±à¸à¸ªà¹à¸
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="ac7ee4e7">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element" internal-fsb-guid="c9099404">
                    <input style={{'display': 'block'}} type="checkbox" />
                  </div>
                  <div className="internal-fsb-element col-8 offset-0" internal-fsb-guid="757b9cee">
                    à¸£à¸§à¸¡à¸ªà¹à¸
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="e6c55993">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element" internal-fsb-guid="8d4d7ae1">
                    <input style={{'display': 'block'}} type="checkbox" />
                  </div>
                  <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="13a59956">
                    à¸£à¸±à¸à¹à¸­à¸
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="0ab989ae" style={{'minHeight': '40px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="d7d11203">
                    <div>
                      à¹à¸­à¸à¸ªà¸²à¸£à¹à¸à¸ 
                      <br />
                    </div>
                  </div>
                  <div className="internal-fsb-element" internal-fsb-guid="3e14ad68">
                    <input style={{'display': 'block', 'width': '100%'}} type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="54556741">
              ABC
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_5123ea55', FlowLayout_5123ea55);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

    // <--- Auto[Generating:V1]
    // PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.