// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base} from './Base.js';
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
declare let pug: any;

let Button = $Button;
let Project = $Project;

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
    return pug `
      div(style=Object.assign({'null': 'undefined'}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="535be65e")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor(style={'display': 'block'})
            Project.Controls.FlowLayout_00ce1665 forward={'classes': '', 'styles': {}} 
            .internal-fsb-element(style={'fontSize': '14px', 'float': 'right', 'marginTop': '15px', 'marginRight': '15px'} internal-fsb-guid="1136ae7c")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="8eaa2c0a")
                    img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/buy.png")
                  a.internal-fsb-element.internal-fsb-allow-cursor(href="/buyer" target="" internal-fsb-guid="2934a208")
                    .internal-fsb-element(internal-fsb-guid="2934a208-text")
                      | สำหรับผู้ที่ต้องการสั่งซื้อ
                  .internal-fsb-element.internal-fsb-allow-cursor.-fsb-self-57595ad9(internal-fsb-guid="57595ad9")
                  .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="4db67171")
                    img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid.png")
                  a.internal-fsb-element.internal-fsb-allow-cursor(href="/bidder" internal-fsb-guid="7001d8c4")
                    .internal-fsb-element(internal-fsb-guid="7001d8c4-text")
                      | สำหรับร้านค้าวัสดุก่อสร้าง
                  .internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-57595ad9(style={'FsbInheritedPresets': '57595ad9'} internal-fsb-guid="48d1ac00")
                  .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="530a1666")
                    img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/padlock.png")
                  a.internal-fsb-element.internal-fsb-allow-cursor(href="/authentication" internal-fsb-guid="24c1dbd3")
                    .internal-fsb-element(internal-fsb-guid="24c1dbd3-text")
                      | เข้าสู่ระบบ
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_535be65e', FlowLayout_535be65e);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.