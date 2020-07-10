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
class FlowLayout_570decac extends Base {
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
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="570decac" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            <div className="internal-fsb-element col-4 offset-1 -fsb-self-69085d73" internal-fsb-guid="69085d73">
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-self-4011457d" internal-fsb-guid="4011457d">
                    ผู้ต้องการสั่งซื้อ
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-self-5d1104e1" internal-fsb-guid="5d1104e1">
                    ไม่ว่าคุณจะเป็นผู้รับเหมาก่อสร้าง หรือเจ้าของบ้านที่สร้างเอง เราจะช่วยสืบราคาวัสดุก่อสร้าง จากร้านค้าทั่วประเทศ และนำมาเรียงลำดับจาก ต่ำสุด ไปยัง สูงสุด โดยลูกค้าสามารถเลือกราคาที่ต้องการและสั่งซื้อได้ทันที
                  </div>
                  
                  <div className="internal-fsb-element -fsb-self-79320772 col-10 offset-1" internal-fsb-guid="79320772">
                    
                    <div className="html">
                      <a className="btn btn-info col" href="/authentication?role=buyer">
                        เริ่มต้นใช้งาน
                      </a>
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element -fsb-preset-79320772 col-10 offset-1" internal-fsb-guid="a3a9c4d5" style={{'FsbInheritedPresets': '79320772'}}>
                    
                    <div className="html">
                      <a className="btn btn-info col" href="/buyer">
                        เรียนรู้เพิ่มเติม
                      </a>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-4 offset-2 -fsb-preset-69085d73" internal-fsb-guid="741d5692" style={{'background': 'rgba(153, 24, 245, 1)', 'color': 'rgba(255, 255, 255, 1)', 'FsbInheritedPresets': '69085d73'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4011457d" internal-fsb-guid="39317018" style={{'FsbInheritedPresets': '4011457d'}}>
                    ร้านค้าวัสดุก่อสร้าง
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-5d1104e1" internal-fsb-guid="5453a7a0" style={{'FsbInheritedPresets': '5d1104e1'}}>
                    ไม่ว่าคุณจะเป็นร้านค้าวัสดุก่อสร้าง เล็กหรือใหญ่ คุณสามารถหาลูกค้าของคุณได้มากยิ่งขึ้นจากอินเทอร์เน็ต โดยใช้ระบบประมูลราคาเพื่อดึงดูดให้ลูกค้าเลือกซื้อ โดยที่ราคาวัสดุก่อสร้างของคุณนั้นไม่สามารถเห็นได้โดยคู่แข่ง
                  </div>
                  
                  <div className="internal-fsb-element -fsb-preset-79320772 col-10 offset-1" internal-fsb-guid="13414417" style={{'FsbInheritedPresets': '79320772'}}>
                    
                    <div className="html">
                      <a className="btn btn-info col" href="/authentication?role=bidder">
                        เข้าร่วมเป็นพาร์ทเนอร์กับเรา
                      </a>
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element -fsb-preset-79320772 col-10 offset-1" internal-fsb-guid="3dec8e00" style={{'FsbInheritedPresets': '79320772'}}>
                    
                    <div className="html">
                      <a className="btn btn-info col" href="/bidder">
                        เรียนรู้เพิ่มเติม
                      </a>
                    </div>
                    
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
DeclarationHelper.declare('Site', 'Controls.FlowLayout_570decac', FlowLayout_570decac);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.