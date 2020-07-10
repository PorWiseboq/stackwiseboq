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
class FlowLayout_39be2509 extends Base {
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
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="39be2509" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout" style={{'display': 'block'}}>
            
            <div className="internal-fsb-inheriting-element" style={{'float': 'left'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout">
                  
                  <div className="internal-fsb-inheriting-element" style={{'width': '210px'}}>
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout">
                        
                        <div className="col-6 offset-0 internal-fsb-inheriting-element" style={{'textAlign': 'center', 'fontFamily': 'Roboto', 'color': 'rgba(22, 98, 250, 1)', 'fontSize': '24px', 'fontWeight': '400'}}>
                          Wise
                        </div>
                        
                        <div className="col-6 offset-0 internal-fsb-inheriting-element" style={{'textAlign': 'center', 'color': 'rgba(255, 255, 255, 1)', 'fontFamily': 'Roboto', 'fontSize': '24px', 'fontWeight': '400', 'background': 'rgba(22, 98, 250, 1)', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px'}}>
                          BOQ
                        </div>
                        
                        <div className="col-12 internal-fsb-inheriting-element" style={{'paddingLeft': '5px', 'paddingRight': '5px', 'fontFamily': 'Roboto', 'fontSize': '13px', 'textAlign': 'center', 'paddingTop': '5px'}}>
                          สืบราคา-สั่งซื้อ วัสดุก่อสร้างออนไลน์
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-inheriting-element" style={{'fontSize': '14px', 'float': 'right'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout">
                  
                  <div className="internal-fsb-inheriting-element">
                    
                    <div className="html">
                      <a href="/buyer">
                        สำหรับผู้ต้องการสั่งซื้อ
                      </a>
                    </div>
                    
                  </div>
                  
                  <div className="-fsb-self-57595ad9 internal-fsb-inheriting-element">
                  </div>
                  
                  <div className="internal-fsb-inheriting-element">
                    
                    <div className="html">
                      <a href="/bidder">
                        สำหรับร้านค้าวัสดุก่อสร้าง
                      </a>
                    </div>
                    
                  </div>
                  
                  <div className="-fsb-preset-57595ad9 internal-fsb-inheriting-element" style={{'FsbInheritedPresets': '57595ad9'}}>
                  </div>
                  
                  <div className="internal-fsb-inheriting-element">
                    
                    <div className="html">
                      <a href="/authentication">
                        เข้าสู่ระบบ
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
DeclarationHelper.declare('Site', 'Controls.FlowLayout_39be2509', FlowLayout_39be2509);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.