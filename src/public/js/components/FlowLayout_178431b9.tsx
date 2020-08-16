// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//Project['Controls'] =

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;

// <---Auto[Declare]

// Declare private static variables here:
//
Project['Controls'] = Project['Controls'] || {};

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
class FlowLayout_178431b9 extends Base {
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
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="178431b9")
        .container-fluid
          .row.internal-fsb-strict-layout(style={'display': 'block'})
            .internal-fsb-inheriting-element(style={'float': 'left', 'paddingBottom': '10px'})
              .container-fluid
                .row.internal-fsb-strict-layout
                  .internal-fsb-inheriting-element(style={'width': '210px'})
                    .container-fluid
                      .row.internal-fsb-strict-layout
                        .col-6.offset-0.internal-fsb-inheriting-element(style={'textAlign': 'center', 'fontFamily': 'Roboto', 'color': 'rgba(22, 98, 250, 1)', 'fontSize': '24px', 'fontWeight': '400'})
                          | Wise
                        .col-6.offset-0.internal-fsb-inheriting-element(style={'textAlign': 'center', 'color': 'rgba(255, 255, 255, 1)', 'fontFamily': 'Roboto', 'fontSize': '24px', 'fontWeight': '400', 'background': 'rgba(22, 98, 250, 1)', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px'})
                          | BOQ
                        .col-12.internal-fsb-inheriting-element(style={'paddingLeft': '5px', 'paddingRight': '5px', 'fontFamily': 'Roboto', 'fontSize': '13px', 'textAlign': 'center', 'paddingTop': '5px'})
                          | สืบราคา-สั่งซื้อ วัสดุก่อสร้างออนไลน์
            .internal-fsb-inheriting-element(style={'fontSize': '14px', 'float': 'right', 'marginTop': '15px', 'marginRight': '15px'})
              .container-fluid
                .row.internal-fsb-strict-layout
                  .internal-fsb-inheriting-element
                    img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/buy.png")
                  a.internal-fsb-inheriting-element(href="/buyer" target="")
                    .internal-fsb-inheriting-element
                      | สำหรับผู้ที่ต้องการสั่งซื้อ
                  .-fsb-self-57595ad9.internal-fsb-inheriting-element
                  .internal-fsb-inheriting-element
                    img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid.png")
                  a.internal-fsb-inheriting-element(href="/bidder")
                    .internal-fsb-inheriting-element
                      | สำหรับร้านค้าวัสดุก่อสร้าง
                  .-fsb-preset-57595ad9.internal-fsb-inheriting-element(style={'FsbInheritedPresets': '57595ad9'})
                  .internal-fsb-inheriting-element
                    img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/padlock.png")
                  a.internal-fsb-inheriting-element(href="/authentication")
                    .internal-fsb-inheriting-element
                      | เข้าสู่ระบบ
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_178431b9', FlowLayout_178431b9);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.