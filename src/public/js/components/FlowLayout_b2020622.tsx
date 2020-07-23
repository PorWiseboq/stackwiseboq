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
  
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_b2020622 extends Base {
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
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="b2020622" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-self-180079a2" internal-fsb-guid="180079a2">
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-self-7a279686" internal-fsb-guid="7a279686">
                    ต้องการสืบราคา
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-self-4839e353" internal-fsb-guid="4839e353">
                    กรุณาตั้งชื่อรายการและรายละเอียดโดยย่อ
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="8b1a4a93">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="5a972a57">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ชื่อรายการ" />
                        </div>
                        
                        <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="607d8ee2">
                          <textarea className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginTop': '10px'}} type="text" rows="3" placeholder="รายละเอียดโดยย่อ">
                          </textarea>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-4" internal-fsb-guid="9ce000e1" style={{'marginTop': '15px'}} type="button">
                    
                    <div className="internal-fsb-element" internal-fsb-guid="9ce000e1-text">
                      ถัดไป: ระบุรายการวัสดุก่อสร้าง
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2" internal-fsb-guid="7600ca53" style={{'FsbInheritedPresets': '180079a2'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="1e4c0d68" style={{'FsbInheritedPresets': '7a279686'}}>
                    รายการวัสดุก่อสร้าง
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="65ca1989" style={{'FsbInheritedPresets': '4839e353'}}>
                    กรุณาระบุรายละเอียดสินค้า (ชื่อวัสดุ, ขนาด, ปริมาณ)
                  </div>
                  
                  <div className="internal-fsb-element col-12 offset-0 -fsb-self-97d707b7" internal-fsb-guid="97d707b7" style={{'minHeight': '22px', 'FsbReusableName': '', 'FsbReusableId': '97d707b7'}}>
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="54e20435">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="รายการ" />
                        </div>
                        
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="31894d87">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ขนาด" />
                        </div>
                        
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="b2321320">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ปริมาณ" />
                        </div>
                        <button className="internal-fsb-element internal-fsb-allow-cursor col-2 offset-0 btn btn-primary btn-sm" internal-fsb-guid="05179431" type="button">
                          
                          <div className="internal-fsb-element" internal-fsb-guid="05179431-text">
                            เพิ่ม
                          </div>
                          
                        </button>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-2" internal-fsb-guid="1bb72b1a" style={{'marginTop': '15px', 'marginRight': '10px'}} type="button">
                    
                    <div className="internal-fsb-element" internal-fsb-guid="1bb72b1a-text">
                      ย้อนกลับ
                    </div>
                    
                  </button>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-0" internal-fsb-guid="011ad9dc" style={{'marginTop': '15px', 'marginLeft': '10px'}} type="button">
                    
                    <div className="internal-fsb-element" internal-fsb-guid="011ad9dc-text">
                      ถัดไป: ระบุสินค้าเทียบเคียง
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2" internal-fsb-guid="b1a8c59c" style={{'FsbInheritedPresets': '180079a2'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="b92865ba" style={{'FsbInheritedPresets': '7a279686'}}>
                    สินค้าเทียบเคียง
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="a5bc6206" style={{'FsbInheritedPresets': '4839e353'}}>
                    กรุณาเลือกว่าในกรณีที่หาวัสดุตามที่ต้องการไม่ได้จะให้ใช้วิธีใด?
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="82a1da21">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="a60b855b" style={{'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element col-2 offset-0 -fsb-self-b6c9ad89" internal-fsb-guid="b6c9ad89">
                                <input type="radio" />
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-0 -fsb-self-b5cd72c0" internal-fsb-guid="b5cd72c0">
                                ทดแทน
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-2 -fsb-self-8050ab15" internal-fsb-guid="8050ab15">
                                สินค้าทดแทนใช้งานได้เหมือนกันแต่ประหยัดกว่า
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="7a03394d" style={{'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="a0b78888">
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" />
                              </div>
                              
                              <div className="internal-fsb-element -fsb-preset-b5cd72c0 col-10 offset-0" internal-fsb-guid="35767bbc" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                เทียบเท่า
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-2 -fsb-preset-8050ab15" internal-fsb-guid="80438932" style={{'FsbInheritedPresets': '8050ab15'}}>
                                เกรดเดียวกันหรือเทียบเท่า
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="eee57414" style={{'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="cc34eced">
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" />
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-0 -fsb-preset-b5cd72c0" internal-fsb-guid="127c0175" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                เจาะจง
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-2 -fsb-preset-8050ab15" internal-fsb-guid="8e3dd80d" style={{'FsbInheritedPresets': '8050ab15'}}>
                                เจาะจงตามที่ระบุเท่านั้น
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                      </div>
                      
                    </div>
                    
                  </div>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-2" internal-fsb-guid="88297439" style={{'marginRight': '10px'}} type="button">
                    
                    <div className="internal-fsb-element" internal-fsb-guid="88297439-text">
                      ย้อนกลับ
                    </div>
                    
                  </button>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-0" internal-fsb-guid="67c431d0" style={{'marginLeft': '10px'}} type="button">
                    
                    <div className="internal-fsb-element" internal-fsb-guid="67c431d0-text">
                      ถัดไป: ระบุข้อมูลจัดส่งและระยะเวลา
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2" internal-fsb-guid="e01619d3" style={{'FsbInheritedPresets': '180079a2'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="52a61b94" style={{'FsbInheritedPresets': '7a279686'}}>
                    ข้อมูลจัดส่งและระยะเวลา
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="a1140119" style={{'FsbInheritedPresets': '4839e353'}}>
                    กรุณาระบุระยะเวลาว่าสามารถรอคอยได้นานที่สุดแค่ไหน นำสินค้ามาส่งให้ หรือว่าจะไปรับสินค้าด้วยตนเอง
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="6d1432dc">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="9a5a06e9" style={{'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="33408187">
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="checkbox" />
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-0 -fsb-preset-b5cd72c0" internal-fsb-guid="9875301c" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                ต้องการราคาภายในเวลา
                              </div>
                              
                              <div className="internal-fsb-element -fsb-preset-8050ab15 col-10 offset-2" internal-fsb-guid="e51ca172" style={{'FsbInheritedPresets': '8050ab15'}}>
                                กรุณาระบุเป็นจำนวนเต็ม
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                        
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="230ab296">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="จำนวนชั่วโมง" />
                        </div>
                        
                        <div className="internal-fsb-element col-4 offset-0 -fsb-preset-b5cd72c0" internal-fsb-guid="1d96cc04" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                          ชั่วโมง
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="b33625ae">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="78890e54" style={{'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="babc9e30">
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="checkbox" />
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-0 -fsb-preset-b5cd72c0" internal-fsb-guid="23ba11a8" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                วันที่ต้องใช้สินค้า
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-2 -fsb-preset-8050ab15" internal-fsb-guid="b77168a5" style={{'FsbInheritedPresets': '8050ab15'}}>
                                กรุณาระบุ ddmmyyyy เช่น 15102563
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                        
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="9200d56a">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ddmmyyyy" />
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="22b7c898">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="47881859" style={{'FsbInheritedPresets': '', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element col-2 offset-0 -fsb-preset-b6c9ad89" internal-fsb-guid="12403b79">
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" />
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-0 -fsb-preset-b5cd72c0" internal-fsb-guid="b8a9d038" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                ไปรับสินค้าด้วยตนเอง
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-2 -fsb-preset-8050ab15" internal-fsb-guid="c00c3c67" style={{'FsbInheritedPresets': '8050ab15'}}>
                                กรุณาระบุหมายเลขโทรศัพท์
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                        
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="c3daa46d">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="หมายเลขโทรศัพท์" />
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="22543809">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <label className="internal-fsb-element col-4 offset-0" internal-fsb-guid="165d186a" style={{'paddingLeft': '0px', 'paddingRight': '0px'}}>
                          
                          <div className="container-fluid">
                            
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              
                              <div className="internal-fsb-element col-2 offset-0 -fsb-preset-b6c9ad89" internal-fsb-guid="0606ea02">
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" />
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-0 -fsb-preset-b5cd72c0" internal-fsb-guid="94ec51a9" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                จัดส่งสินค้ามาให้
                              </div>
                              
                              <div className="internal-fsb-element col-10 offset-2 -fsb-preset-8050ab15" internal-fsb-guid="88c6a7ee" style={{'FsbInheritedPresets': '8050ab15'}}>
                                กรุณาระบุที่อยู่สำหรับรับสินค้าและหมายเลขโทรศัพท์
                              </div>
                              
                            </div>
                            
                          </div>
                          
                        </label>
                        
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="4a397863">
                          <textarea className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ที่อยู่สำหรับจัดส่งสินค้า">
                          </textarea>
                        </div>
                        
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="915d8ec6">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="หมายเลขโทรศัพท์" />
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <button className="internal-fsb-element internal-fsb-allow-cursor col-4 offset-4 btn btn-primary btn-sm" internal-fsb-guid="0e75306a" style={{'marginTop': '15px'}} type="button">
                    
                    <div className="internal-fsb-element" internal-fsb-guid="0e75306a-text">
                      เริ่มต้นการประมูลราคา
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_b2020622', FlowLayout_b2020622);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.