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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_69085d73 extends Base {
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
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element -fsb-self-69085d73 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="69085d73")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-12.-fsb-self-4011457d(internal-fsb-guid="4011457d")
              | ผู้ต้องการสั่งซื้อ
            .internal-fsb-element.col-6.offset-3(style={padding: '0px'}, internal-fsb-guid="4151b34e")
              img(style={'display': 'block', 'width': '100%', 'marginTop': '15px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/home-repair.png")
            .internal-fsb-element.col-12.-fsb-self-5d1104e1(internal-fsb-guid="5d1104e1")
              | ไม่ว่าคุณจะเป็นผู้รับเหมาก่อสร้าง หรือเจ้าของบ้านที่สร้างเอง เราจะช่วยสืบราคาวัสดุก่อสร้าง จากร้านค้าทั่วประเทศ และนำมาเรียงลำดับจาก ต่ำสุด ไปยัง สูงสุด โดยลูกค้าสามารถเลือกราคาที่ต้องการและสั่งซื้อได้ทันที
            a.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-info.-fsb-self-856191b9.col-10.offset-1(href="/authentication", internal-fsb-guid="856191b9")
              .internal-fsb-element(internal-fsb-guid="856191b9-text")
                | เริ่มต้นใช้งาน
            a.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-info.col-10.offset-1.-fsb-preset-856191b9(style={'FsbInheritedPresets': '856191b9'}, href="/buyer", internal-fsb-guid="9328819e")
              .internal-fsb-element(internal-fsb-guid="9328819e-text")
                | เรียนรู้เพิ่มเติม
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_69085d73', FlowLayout_69085d73);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.