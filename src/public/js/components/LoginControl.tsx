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
  signning_mode: string
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  signning_mode: 'signning_in'
});

// Auto[ClassBegin]--->
class LoginControl extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("e968c824", "navigate", ["74d75b70","74b67c1e"], {initClass: null});
    DataManipulationHelper.register("da229546", "navigate", ["74d75b70","74b67c1e","d40a4961"], {initClass: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string): any[] {
    return super.getDataFromNotation(notation);
  }
  
  protected componentDidMount() {
    this.register();
  }
  
  // Auto[Merging]--->
  protected onTextElementClick_44677dd0(event: Event) {

    // Handle the event of onTextElementClick (TextElement 6) here:
    // 
    this.setState({
      signning_mode: 'signning_in'
    });
    
  }

  protected onTextElementClick_880115b3(event: Event) {

    // Handle the event of onTextElementClick (TextElement 7) here:
    // 
    this.setState({
      signning_mode: 'signning_up'
    });
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="7aee6ed8" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            <div className="internal-fsb-element col-12" internal-fsb-guid="100b12a4" style={{'textAlign': 'center'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="68a04e8d" ref="signning_out_navigation">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <div className="internal-fsb-element col-8 offset-2" internal-fsb-guid="699b92eb" style={{'borderBottomColor': 'rgba(0, 123, 255, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '2px', 'paddingBottom': '5px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="44677dd0" style={{'cursor': 'pointer', fontWeight: (()=>{return (this.state.signning_mode == 'signning_in') ? "bold" : "";})()}} onClick={this.onTextElementClick_44677dd0.bind(this)}>
                                เข้าสู่ระบบ
                              </div>
                              
                              <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="880115b3" style={{'cursor': 'pointer', fontWeight: (()=>{return (this.state.signning_mode == 'signning_up') ? "bold" : "";})()}} onClick={this.onTextElementClick_880115b3.bind(this)}>
                                สมัครสมาชิก
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="25cdd095" style={{'marginTop': '20px'}}>
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <div className="internal-fsb-element col-8 offset-2" internal-fsb-guid="cdd9262a">
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element col-12" internal-fsb-guid="54d4b112">
                                
                                <div className="container-fluid">
                                  
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    
                                    <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="2d523027" style={{'textAlign': 'right', 'paddingRight': '10px', 'paddingTop': '7px'}}>
                                      ที่อยู่อีเมล์
                                    </div>
                                    
                                    <div className="internal-fsb-element col-7 offset-0" internal-fsb-guid="74d75b70">
                                      <input className="form-control" style={{'display': 'block', 'width': '100%'}} ref="email" type="text" placeholder="ที่อยู่@โดเมน.com" required={true} />
                                    </div>
                                    
                                  </div>
                                  
                                </div>
                                
                              </div>
                              
                              <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="9e7545c8" style={{'marginTop': '10px'}}>
                                
                                <div className="container-fluid">
                                  
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    
                                    <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="028366b0" style={{'textAlign': 'right', 'paddingRight': '10px', 'paddingTop': '7px'}}>
                                      รหัสผ่าน
                                    </div>
                                    
                                    <div className="internal-fsb-element col-7 offset-0" internal-fsb-guid="74b67c1e">
                                      <input className="form-control" style={{'display': 'block', 'width': '100%'}} ref="password" type="password" placeholder="รหัสผ่าน" required={true} />
                                    </div>
                                    
                                  </div>
                                  
                                </div>
                                
                              </div>
                              
                              <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="b6e4592d" style={{'marginTop': '10px', display: (()=>{return (this.state.signning_mode == 'signning_up') ? 'block' : 'none';})()}}>
                                
                                <div className="container-fluid">
                                  
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    
                                    <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="aacee6b3" style={{'textAlign': 'right', 'paddingRight': '10px', 'paddingTop': '7px'}}>
                                      ยืนยันรหัสผ่าน
                                    </div>
                                    
                                    <div className="internal-fsb-element col-7 offset-0" internal-fsb-guid="d40a4961">
                                      <input className="form-control" style={{'display': 'block', 'width': '100%'}} ref="confirm" type="password" placeholder="ยืนยันรหัสผ่าน" required={true} />
                                    </div>
                                    
                                  </div>
                                  
                                </div>
                                
                              </div>
                              
                              <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="437e47b4" style={{'paddingTop': '20px'}}>
                                
                                <div className="container-fluid">
                                  
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary col-12 offset-0" internal-fsb-guid="e968c824" style={{display: (()=>{return (this.state.signning_mode == 'signning_in') ? 'block' : 'none';})()}} type="button" onClick={((event) => { window.internalFsbSubmit('e968c824', '', event, ((results: any) => { this.manipulate('e968c824', '', results); }).bind(this)); }).bind(this)}>
                                      
                                      <div className="internal-fsb-element" internal-fsb-guid="e968c824-text">
                                        ถัดไป
                                      </div>
                                      
                                    </button>
                                    <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary col-12 offset-0" internal-fsb-guid="da229546" style={{display: (()=>{return (this.state.signning_mode == 'signning_up') ? 'block' : 'none';})()}} type="button" onClick={((event) => { window.internalFsbSubmit('da229546', '', event, ((results: any) => { this.manipulate('da229546', '', results); }).bind(this)); }).bind(this)}>
                                      
                                      <div className="internal-fsb-element" internal-fsb-guid="da229546-text">
                                        ถัดไป
                                      </div>
                                      
                                    </button>
                                  </div>
                                  
                                </div>
                                
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </div>
                        
                      </div>
                      
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
DeclarationHelper.declare('Site', 'Controls.LoginControl', LoginControl);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.