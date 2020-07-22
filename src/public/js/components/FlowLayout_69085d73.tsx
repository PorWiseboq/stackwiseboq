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
class FlowLayout_69085d73 extends Base {
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
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[onFlowLayoutClick_69085d73:Begin]--->
  protected onFlowLayoutClick_69085d73(event: Event) {
    // <---Auto[onFlowLayoutClick_69085d73:Begin]

    // Handle the event of onFlowLayoutClick (buyer) here:
    // 
    alert("Hello World!");
    
    // Auto[onFlowLayoutClick_69085d73:End]--->
  }
  // <---Auto[onFlowLayoutClick_69085d73:End]

  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element col-4 offset-1 -fsb-self-69085d73 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="69085d73" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})} onClick={this.onFlowLayoutClick_69085d73.bind(this)}>
        
                
        <div className="container-fluid">
          
                    
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
                        
            <div className="internal-fsb-element col-12 -fsb-self-4011457d" internal-fsb-guid="4011457d">
              ผู้ต้องการสั่งซื้อ
            </div>
            
                        
            <div className="internal-fsb-element col-12 -fsb-self-5d1104e1" internal-fsb-guid="5d1104e1">
              ไม่ว่าคุณจะเป็นผู้รับเหมาก่อสร้าง หรือเจ้าของบ้านที่สร้างเอง เราจะช่วยสืบราคาวัสดุก่อสร้าง จากร้านค้าทั่วประเทศ และนำมาเรียงลำดับจาก ต่ำสุด ไปยัง สูงสุด โดยลูกค้าสามารถเลือกราคาที่ต้องการและสั่งซื้อได้ทันที
            </div>
            


                        
            <a className="internal-fsb-element internal-fsb-allow-cursor btn btn-info col-10 offset-1 -fsb-self-856191b9" internal-fsb-guid="856191b9" href="/authentication">
              
                            
              <div className="internal-fsb-element" internal-fsb-guid="856191b9-text">
                เริ่มต้นใช้งาน
              </div>
              
                        
            </a>
            <a className="internal-fsb-element internal-fsb-allow-cursor btn btn-info col-10 offset-1 -fsb-preset-856191b9" internal-fsb-guid="9328819e" style={{'FsbInheritedPresets': '856191b9', display: this.state.buyerDisplayStyle}} href="/buyer">
              
                            
              <div className="internal-fsb-element" internal-fsb-guid="9328819e-text">
                เรียนรู้เพิ่มเติม
              </div>
              
                        
            </a>
            
                    
          </div>
          
                
        </div>
        
            
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_69085d73', FlowLayout_69085d73);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};



// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.