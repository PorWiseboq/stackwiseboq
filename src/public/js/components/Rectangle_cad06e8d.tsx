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
  protected onTextElementClick_ace3bb6e(event: Event) {

    // Handle the event of onTextElementClick (TextElement 9) here:
    // 
    
  }

  protected onTextElementClick_e74704d9(event: Event) {

    // Handle the event of onTextElementClick (TextElement 15) here:
    // 
    
  }

  protected onTextElementClick_2bd1dcc9(event: Event) {

    // Handle the event of onTextElementClick (TextElement 16) here:
    // 
    
  }

  protected onTextElementClick_c329c985(event: Event) {

    // Handle the event of onTextElementClick (TextElement 17) here:
    // 
    
  }

  protected onTextElementClick_a34c7ebb(event: Event) {

    // Handle the event of onTextElementClick (TextElement 18) here:
    // 
    
  }

  protected onTextElementClick_ea959a68(event: Event) {

    // Handle the event of onTextElementClick (TextElement 19) here:
    // 
    
  }
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
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="712e9de1" style={{'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'width': '225px', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'fontSize': '14px', 'paddingTop': '13px'}}>
            <div className="internal-fsb-element" internal-fsb-guid="74e4253b">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 -fsb-self-de97b569" internal-fsb-guid="de97b569">
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12 -fsb-self-ace3bb6e" internal-fsb-guid="ace3bb6e" onClick={this.onTextElementClick_ace3bb6e.bind(this)}>
                          งานประมูลใหม่
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element col-12 -fsb-self-e93085e4 -fsb-preset-de97b569" internal-fsb-guid="e93085e4" style={{'FsbReusableName': '', 'FsbReusableId': 'e93085e4', 'FsbInheritedPresets': 'de97b569'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12 -fsb-preset-ace3bb6e" internal-fsb-guid="e74704d9" style={{'FsbInheritedPresets': 'ace3bb6e', 'marginBottom': '5px'}} onClick={this.onTextElementClick_e74704d9.bind(this)}>
                          งานที่ประมูลมาได้สำเร็จ
                        </div>
                        <div className="internal-fsb-element col-11 offset-1 -fsb-self-2bd1dcc9" internal-fsb-guid="2bd1dcc9" onClick={this.onTextElementClick_2bd1dcc9.bind(this)}>
                          กำลังคุยกับลูกค้า
                        </div>
                        <div className="internal-fsb-element col-11 offset-1 -fsb-preset-2bd1dcc9" internal-fsb-guid="c329c985" style={{'FsbInheritedPresets': '2bd1dcc9'}} onClick={this.onTextElementClick_c329c985.bind(this)}>
                          จัดซื้อสำเร็จ
                        </div>
                        <div className="internal-fsb-element col-11 offset-1 -fsb-preset-2bd1dcc9" internal-fsb-guid="a34c7ebb" style={{'FsbInheritedPresets': '2bd1dcc9'}} onClick={this.onTextElementClick_a34c7ebb.bind(this)}>
                          จัดซื้อไม่สำเร็จ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element col-12 -fsb-preset-de97b569" internal-fsb-guid="56c4c00b" style={{'FsbInheritedPresets': 'de97b569'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12 offset-0 -fsb-preset-ace3bb6e" internal-fsb-guid="ea959a68" style={{'FsbInheritedPresets': 'ace3bb6e'}} onClick={this.onTextElementClick_ea959a68.bind(this)}>
                          งานที่ประมูลไม่สำเร็จ
                        </div>
                      </div>
                    </div>
                  </div>
                  <input className="internal-fsb-element col-12" internal-fsb-guid="7db28ea1" ref="navigateValue" type="hidden" />
                  <button className="internal-fsb-element internal-fsb-allow-cursor d-none d-sm-none d-md-none d-lg-none d-xl-none" internal-fsb-guid="cb1d6cd3" ref="navigateButton" type="button">
                    <div className="internal-fsb-element" internal-fsb-guid="cb1d6cd3-text">
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="01507cb4" style={{'borderRightColor': 'rgba(22, 98, 250, 1)', 'borderRightStyle': 'solid', 'borderRightWidth': '2px', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'width': '250px', 'background': 'rgba(255, 255, 255, 1)', 'paddingTop': '3px', 'paddingLeft': '3px', 'paddingRight': '3px', 'paddingBottom': '3px'}}>
            <div className="internal-fsb-element" internal-fsb-guid="07624387">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 -fsb-self-99c51e64" internal-fsb-guid="99c51e64">
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12" internal-fsb-guid="74625904" style={{'fontWeight': 'bold', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(22, 98, 250, 1)', 'fontSize': '14px'}}>
                          หัวข้อเรื่อง
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="039885e7" style={{'paddingRight': '0px', 'paddingLeft': '0px', 'color': 'rgba(69, 69, 69, 1)'}}>
                          รายละเอียดโดยย่อ
                        </div>
                      </div>
                    </div>
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
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="cd80007c" style={{'overflowY': 'auto', 'MsOverflowY': 'auto', 'width': '200px', 'background': 'rgba(255, 255, 255, 1)'}}>
            <div className="internal-fsb-element" internal-fsb-guid="11b29659">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="95ac12ce">
                    Sidebar
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