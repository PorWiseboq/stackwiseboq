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

// TODO: Remove this after StackBlend have a fix to recursively include nested component files.
Project['Controls'] = Project['Controls'] || {};

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
class FlowLayout_535be65e extends Base {
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
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string): any {
    return super.getDataFromNotation(notation);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="535be65e" style={Object.assign({'null': 'undefined'}, this.props.forward && this.props.forward.styles || {})}>
        <div className="container-fluid">
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor" style={{'display': 'block'}}>
            <Project.Controls.FlowLayout_00ce1665 forward={{'classes': '', 'styles': {}}} />
            <div className="internal-fsb-element" internal-fsb-guid="1136ae7c" style={{'fontSize': '14px', 'float': 'right', 'marginTop': '15px', 'marginRight': '15px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element" internal-fsb-guid="8eaa2c0a" style={{'display': 'block', 'width': '20px', 'marginRight': '5px'}}>
                    <img style={{'display': 'block', 'width': '20px', 'marginRight': '5px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/buy.png" />
                  </div>
                  <a className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="2934a208" href="/buyer" target="">
                    <div className="internal-fsb-element" internal-fsb-guid="2934a208-text">
                      สำหรับผู้ที่ต้องการสั่งซื้อ
                    </div>
                  </a>
                  <div className="internal-fsb-element internal-fsb-allow-cursor -fsb-self-57595ad9" internal-fsb-guid="57595ad9">
                  </div>
                  <div className="internal-fsb-element" internal-fsb-guid="4db67171" style={{'display': 'block', 'width': '20px', 'marginRight': '5px'}}>
                    <img style={{'display': 'block', 'width': '20px', 'marginRight': '5px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid.png" />
                  </div>
                  <a className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="7001d8c4" href="/bidder">
                    <div className="internal-fsb-element" internal-fsb-guid="7001d8c4-text">
                      สำหรับร้านค้าวัสดุก่อสร้าง
                    </div>
                  </a>
                  <div className="internal-fsb-element internal-fsb-allow-cursor -fsb-preset-57595ad9" internal-fsb-guid="48d1ac00" style={{'FsbInheritedPresets': '57595ad9'}}>
                  </div>
                  <div className="internal-fsb-element" internal-fsb-guid="530a1666" style={{'display': 'block', 'width': '20px', 'marginRight': '5px'}}>
                    <img style={{'display': 'block', 'width': '20px', 'marginRight': '5px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/padlock.png" />
                  </div>
                  <a className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="24c1dbd3" href="/authentication">
                    <div className="internal-fsb-element" internal-fsb-guid="24c1dbd3-text">
                      เข้าสู่ระบบ
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_535be65e', FlowLayout_535be65e);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.