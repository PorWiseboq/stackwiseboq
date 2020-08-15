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
  buyerDisplayStyle: string;
  bidderDisplayStyle: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  buyerDisplayStyle: (window.location.pathname.indexOf('/buyer') == 0) ? 'none' : 'block',
  bidderDisplayStyle: (window.location.pathname.indexOf('/bidder') == 0) ? 'none' : 'block'
});

// Auto[ClassBegin]--->
class FlowLayout_a4a155ed extends Base {
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
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="a4a155ed")
        .container-fluid
          .row.internal-fsb-strict-layout
            .col-4.offset-1.-fsb-self-69085d73.internal-fsb-inheriting-element
              .container-fluid
                .row.internal-fsb-strict-layout
                  .col-12.-fsb-self-4011457d.internal-fsb-inheriting-element
                    | ผู้ต้องการสั่งซื้อ
                  .col-6.offset-3.internal-fsb-inheriting-element
                    img(style={'display': 'block', 'width': '100%', 'marginTop': '15px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/home-repair.png")
                  .col-12.-fsb-self-5d1104e1.internal-fsb-inheriting-element
                    | ไม่ว่าคุณจะเป็นผู้รับเหมาก่อสร้าง หรือเจ้าของบ้านที่สร้างเอง เราจะช่วยสืบราคาวัสดุก่อสร้าง จากร้านค้าทั่วประเทศ และนำมาเรียงลำดับจาก ต่ำสุด ไปยัง สูงสุด โดยลูกค้าสามารถเลือกราคาที่ต้องการและสั่งซื้อได้ทันที
                  a.btn.btn-info.col-10.offset-1.-fsb-self-856191b9.internal-fsb-inheriting-element(href="/authentication")
                    .internal-fsb-inheriting-element
                      | เริ่มต้นใช้งาน
                  a.btn.btn-info.col-10.offset-1.-fsb-preset-856191b9.internal-fsb-inheriting-element(style={'FsbInheritedPresets': '856191b9', display: this.state.buyerDisplayStyle} href="/buyer")
                    .internal-fsb-inheriting-element
                      | เรียนรู้เพิ่มเติม
            .col-4.offset-2.-fsb-preset-69085d73.internal-fsb-inheriting-element(style={'background': 'rgba(153, 24, 245, 1)', 'color': 'rgba(255, 255, 255, 1)', 'FsbInheritedPresets': '69085d73'})
              .container-fluid
                .row.internal-fsb-strict-layout
                  .col-12.-fsb-preset-4011457d.internal-fsb-inheriting-element(style={'FsbInheritedPresets': '4011457d'})
                    | ร้านค้าวัสดุก่อสร้าง
                  .col-6.offset-3.internal-fsb-inheriting-element
                    img(style={'display': 'block', 'width': '100%', 'minHeight': '100px', 'marginTop': '15px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/laptop-auction.png")
                  .col-12.-fsb-preset-5d1104e1.internal-fsb-inheriting-element(style={'FsbInheritedPresets': '5d1104e1'})
                    | ไม่ว่าคุณจะเป็นร้านค้าวัสดุก่อสร้าง เล็กหรือใหญ่ คุณสามารถหาลูกค้าของคุณได้มากยิ่งขึ้นจากอินเทอร์เน็ต โดยใช้ระบบประมูลราคาเพื่อดึงดูดให้ลูกค้าเลือกซื้อ โดยที่ราคาวัสดุก่อสร้างของคุณนั้นไม่สามารถเห็นได้โดยคู่แข่ง
                  a.btn.btn-info.col-10.offset-1.-fsb-preset-856191b9.internal-fsb-inheriting-element(style={'FsbInheritedPresets': '856191b9'} href="/authentication")
                    .internal-fsb-inheriting-element
                      | เข้าร่วมเป็นพาร์ทเนอร์กับเรา
                  a.btn.btn-info.col-10.offset-1.-fsb-preset-856191b9.internal-fsb-inheriting-element(style={'FsbInheritedPresets': '856191b9', display: this.state.bidderDisplayStyle} href="/bidder")
                    .internal-fsb-inheriting-element(style={'null': 'undefined'})
                      | เรียนรู้เพิ่มเติม
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_a4a155ed', FlowLayout_a4a155ed);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.