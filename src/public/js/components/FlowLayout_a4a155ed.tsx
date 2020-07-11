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
class FlowLayout_a4a155ed extends Base {
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
  protected getDataFromNotation(notation: string): any {
    return super.getDataFromNotation(notation);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="a4a155ed" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout">
            
            <div className="col-4 offset-1 -fsb-self-69085d73 internal-fsb-inheriting-element">
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout">
                  
                  <div className="col-12 -fsb-self-4011457d internal-fsb-inheriting-element">
                    ผู้ต้องการสั่งซื้อ
                  </div>
                  
                  <div className="col-12 -fsb-self-5d1104e1 internal-fsb-inheriting-element">
                    ไม่ว่าคุณจะเป็นผู้รับเหมาก่อสร้าง หรือเจ้าของบ้านที่สร้างเอง เราจะช่วยสืบราคาวัสดุก่อสร้าง จากร้านค้าทั่วประเทศ และนำมาเรียงลำดับจาก ต่ำสุด ไปยัง สูงสุด โดยลูกค้าสามารถเลือกราคาที่ต้องการและสั่งซื้อได้ทันที
                  </div>
                  
                  <a className="btn btn-info col-10 offset-1 -fsb-self-856191b9 internal-fsb-inheriting-element" href="/authentication">
                    <div className="internal-fsb-inheriting-element">
                      เริ่มต้นใช้งาน
                    </div>
                  </a>
                  <a className="btn btn-info col-10 offset-1 -fsb-preset-856191b9 internal-fsb-inheriting-element" style={{'FsbInheritedPresets': '856191b9'}} target="/buyer">
                    <div className="internal-fsb-inheriting-element">
                      เรียนรู้เพิ่มเติม
                    </div>
                  </a>
                </div>
                
              </div>
              
            </div>
            
            <div className="col-4 offset-2 -fsb-preset-69085d73 internal-fsb-inheriting-element" style={{'background': 'rgba(153, 24, 245, 1)', 'color': 'rgba(255, 255, 255, 1)', 'FsbInheritedPresets': '69085d73'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout">
                  
                  <div className="col-12 -fsb-preset-4011457d internal-fsb-inheriting-element" style={{'FsbInheritedPresets': '4011457d'}}>
                    ร้านค้าวัสดุก่อสร้าง
                  </div>
                  
                  <div className="col-12 -fsb-preset-5d1104e1 internal-fsb-inheriting-element" style={{'FsbInheritedPresets': '5d1104e1'}}>
                    ไม่ว่าคุณจะเป็นร้านค้าวัสดุก่อสร้าง เล็กหรือใหญ่ คุณสามารถหาลูกค้าของคุณได้มากยิ่งขึ้นจากอินเทอร์เน็ต โดยใช้ระบบประมูลราคาเพื่อดึงดูดให้ลูกค้าเลือกซื้อ โดยที่ราคาวัสดุก่อสร้างของคุณนั้นไม่สามารถเห็นได้โดยคู่แข่ง
                  </div>
                  
                  <a className="btn btn-info col-10 offset-1 -fsb-preset-856191b9 internal-fsb-inheriting-element" style={{'FsbInheritedPresets': '856191b9'}} href="/authentication">
                    <div className="internal-fsb-inheriting-element">
                      เข้าร่วมเป็นพาร์ทเนอร์กับเรา
                    </div>
                  </a>
                  <a className="btn btn-info col-10 offset-1 -fsb-preset-856191b9 internal-fsb-inheriting-element" style={{'FsbInheritedPresets': '856191b9'}} href="/bidder">
                    <div className="internal-fsb-inheriting-element" style={{'null': 'undefined'}}>
                      เรียนรู้เพิ่มเติม
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
DeclarationHelper.declare('Site', 'Controls.FlowLayout_a4a155ed', FlowLayout_a4a155ed);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.