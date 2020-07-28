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
enum Status {
  CREATE,
  LIST,
  SUBSTITUTE,
  DELIVERY
}

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
  status: Status;
  inserted: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  status: Status.CREATE,
  inserted: false
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
    DataManipulationHelper.register("9ce000e1", "insert", ["5a972a57","607d8ee2","5752cb4d"], {initClass: null});
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '9ce000e1')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '9ce000e1').addEventListener('success', this.onButtonSuccess_9ce000e1.bind(this));
    }
    DataManipulationHelper.register("1bc39a2b", "update", ["5a972a57","607d8ee2","5d34dc3b","5752cb4d"], {initClass: null});
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '1bc39a2b')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '1bc39a2b').addEventListener('success', this.onButtonSuccess_1bc39a2b.bind(this));
    }
    DataManipulationHelper.register("05179431", "insert", ["54e20435","31894d87","b2321320","eda631c1"], {initClass: null});
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '1bb72b1a')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '1bb72b1a').addEventListener('submitting', this.onButtonSubmitting_1bb72b1a.bind(this));
    }
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '011ad9dc')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '011ad9dc').addEventListener('submitting', this.onButtonSubmitting_011ad9dc.bind(this));
    }
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '88297439')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '88297439').addEventListener('submitting', this.onButtonSubmitting_88297439.bind(this));
    }
    DataManipulationHelper.register("67c431d0", "update", ["b6c9ad89","a0b78888","cc34eced"], {initClass: null});
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '67c431d0')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '67c431d0').addEventListener('success', this.onButtonSuccess_67c431d0.bind(this));
    }
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', 'a7592071')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', 'a7592071').addEventListener('submitting', this.onButtonSubmitting_a7592071.bind(this));
    }
    DataManipulationHelper.register("0e75306a", "update", ["33408187","230ab296","babc9e30","9200d56a","12403b79","c3daa46d","0606ea02","4a397863","915d8ec6"], {initClass: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    if (!this.state.inserted) {
      return [''];
    } else {
      let data = super.getDataFromNotation(notation, inArray);
      
      for (let i=data.length-1; i>=0; i--) {
        if (data[i] === '') {
          data.splice(i, 1);
        }
      }
      
      if (notation.split('.').length == 1 || data.length == 0) {
        data.push('');
      }
      
      return data;
    }
  }
  
  protected componentDidMount() {
    this.register();
  }
  
  private getDisplay(status: Status) {
    console.log(this.state.status == status);
    return (this.state.status == status) ? 'block' : 'none';
  }
  
  // Auto[Merging]--->
  protected onButtonSuccess_9ce000e1(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({
      status: Status.LIST,
      inserted: true
    });
    
    let quote_qid = ReactDOM.findDOMNode(this.refs.quote_qid);
    quote_qid.value = event.detail.results.results[0].keys['qid'].value;
    
    let listing_qid = ReactDOM.findDOMNode(this.refs.listing_qid);
    listing_qid.value = event.detail.results.results[0].keys['qid'].value;
    
  }

  protected onButtonSuccess_1bc39a2b(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({
      status: Status.LIST
    });
    
  }

  protected onButtonClick_1bb72b1a(event: Event) {

    // Handle the event of onButtonClick (Button 4) here:
    // 
    this.setState({
      status: Status.CREATE
    });
    
  }

  protected onButtonSubmitting_1bb72b1a(event: Event) {

    return EventHelper.cancel(event);
  }

  protected onButtonClick_011ad9dc(event: Event) {

    // Handle the event of onButtonClick (Button 5) here:
    // 
    this.setState({
      status: Status.SUBSTITUTE
    });
    
  }

  protected onButtonSubmitting_011ad9dc(event: Event) {

    // Handle the event of onButtonSubmitting (Button 5) here:
    // 
    
    return EventHelper.cancel(event);
  }

  protected onButtonClick_88297439(event: Event) {

    // Handle the event of onButtonClick (Button 6) here:
    // 
    this.setState({
      status: Status.LIST
    });
    
  }

  protected onButtonSubmitting_88297439(event: Event) {

    // Handle the event of onButtonSubmitting (Button 6) here:
    // 
    
    return EventHelper.cancel(event);
  }

  protected onButtonSuccess_67c431d0(event: Event) {

    // Handle the event of onButtonSuccess (Button 7) here:
    // 
    this.setState({
      status: Status.DELIVERY
    });
    
  }

  protected onButtonClick_a7592071(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.setState({
      status: Status.SUBSTITUTE
    });
    
  }

  protected onButtonSubmitting_a7592071(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    
    return EventHelper.cancel(event);
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="b2020622" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-self-180079a2" internal-fsb-guid="180079a2" style={{display: (()=>{return this.getDisplay(Status.CREATE);})()}}>
              
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
                        
                        {this.getDataFromNotation("Quote.title", true).map((data, i) => {
                          return (
                            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="5a972a57" key={"item_" + i}>
                              <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ชื่อรายการ" required={true} defaultValue={data} />
                            </div>
                          )
                        })}
                        
                        {this.getDataFromNotation("Quote.description", true).map((data, i) => {
                          return (
                            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="607d8ee2" key={"item_" + i}>
                              <textarea className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginTop': '10px'}} type="text" rows="3" placeholder="รายละเอียดโดยย่อ" defaultValue={data}>
                              </textarea>
                            </div>
                          )
                        })}
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  {this.getDataFromNotation("Quote.qid", true).map((data, i) => {
                    return (
                      <input className="internal-fsb-element col-12" internal-fsb-guid="5d34dc3b" key={"item_" + i} ref="quote_qid" type="hidden" defaultValue={data} />
                    )
                  })}
                  {this.getDataFromNotation("Quote.uid", true).map((data, i) => {
                    return (
                      <input className="internal-fsb-element col-12" internal-fsb-guid="5752cb4d" key={"item_" + i} type="hidden" defaultValue={data} />
                    )
                  })}
                  <input className="internal-fsb-element col-12" internal-fsb-guid="eda631c1" ref="listing_qid" type="hidden" />
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-4" internal-fsb-guid="9ce000e1" style={{'marginTop': '15px', display: (()=>{return this.state.inserted ? 'none' : 'block'})()}} type="button" onClick={((event) => { window.internalFsbSubmit('9ce000e1', 'Quote', event, ((results: any) => { this.manipulate('9ce000e1', 'Quote', results); }).bind(this)); }).bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="9ce000e1-text">
                      ถัดไป: ระบุรายการวัสดุก่อสร้าง
                    </div>
                    
                  </button>
                  
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-4" internal-fsb-guid="1bc39a2b" style={{'marginTop': '15px', display: (()=>{return this.state.inserted ? 'block' : 'none'})()}} type="button" onClick={((event) => { window.internalFsbSubmit('1bc39a2b', 'Quote', event, ((results: any) => { this.manipulate('1bc39a2b', 'Quote', results); }).bind(this)); }).bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="1bc39a2b-text">
                      ถัดไป: ระบุรายการวัสดุก่อสร้าง
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2" internal-fsb-guid="7600ca53" style={{'FsbInheritedPresets': '180079a2', display: (()=>{return this.getDisplay(Status.LIST);})()}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="1e4c0d68" style={{'FsbInheritedPresets': '7a279686'}}>
                    รายการวัสดุก่อสร้าง
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="65ca1989" style={{'FsbInheritedPresets': '4839e353', 'marginBottom': '10px'}}>
                    กรุณาระบุรายละเอียดสินค้า (ชื่อวัสดุ, ขนาด, ปริมาณ)
                  </div>
                  
                  {this.getDataFromNotation("Listing", true).map((data, i) => {
                    return (
                      <div className="internal-fsb-element col-12 offset-0 -fsb-self-97d707b7" internal-fsb-guid="97d707b7" style={{'minHeight': '22px', 'FsbReusableName': '', 'FsbReusableId': '97d707b7', 'marginTop': '5px'}} key={"item_" + i}>
                        
                        <div className="container-fluid">
                          
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            
                            {this.getDataFromNotation("Listing[" + i + "].title", true).map((data, j) => {
                              return (
                                <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="54e20435" key={"item_" + j}>
                                  <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="วัสดุ" required={true} defaultValue={data} />
                                </div>
                              )
                            })}
                            
                            {this.getDataFromNotation("Listing[" + i + "].size", true).map((data, j) => {
                              return (
                                <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="31894d87" key={"item_" + j}>
                                  <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ขนาด" required={true} defaultValue={data} />
                                </div>
                              )
                            })}
                            
                            {this.getDataFromNotation("Listing[" + i + "].quantity", true).map((data, j) => {
                              return (
                                <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="b2321320" key={"item_" + j}>
                                  <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ปริมาณ" required={true} defaultValue={data} />
                                </div>
                              )
                            })}
                            <button className="internal-fsb-element internal-fsb-allow-cursor col-2 offset-0 btn btn-primary btn-sm" internal-fsb-guid="05179431" type="button" onClick={((event) => { window.internalFsbSubmit('05179431', 'Listing', event, ((results: any) => { this.manipulate('05179431', 'Listing', results); }).bind(this)); }).bind(this)}>
                              
                              <div className="internal-fsb-element" internal-fsb-guid="05179431-text">
                                เพิ่ม
                              </div>
                              
                            </button>
                            
                          </div>
                          
                        </div>
                        
                      </div>
                    )
                  })}
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-2" internal-fsb-guid="1bb72b1a" style={{'marginTop': '15px', 'marginRight': '10px'}} type="button" onClick={this.onButtonClick_1bb72b1a.bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="1bb72b1a-text">
                      ย้อนกลับ
                    </div>
                    
                  </button>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-0" internal-fsb-guid="011ad9dc" style={{'marginTop': '15px', 'marginLeft': '10px'}} type="button" onClick={this.onButtonClick_011ad9dc.bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="011ad9dc-text">
                      ถัดไป: ระบุสินค้าเทียบเคียง
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2" internal-fsb-guid="b1a8c59c" style={{'FsbInheritedPresets': '180079a2', display: (()=>{return this.getDisplay(Status.SUBSTITUTE);})()}}>
              
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
                                <input type="radio" name="substitute" />
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
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" name="substitute" />
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
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" name="substitute" />
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
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-2" internal-fsb-guid="88297439" style={{'marginRight': '10px'}} type="button" onClick={this.onButtonClick_88297439.bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="88297439-text">
                      ย้อนกลับ
                    </div>
                    
                  </button>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-0" internal-fsb-guid="67c431d0" style={{'marginLeft': '10px'}} type="button" onClick={((event) => { window.internalFsbSubmit('67c431d0', '', event, ((results: any) => { this.manipulate('67c431d0', '', results); }).bind(this)); }).bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="67c431d0-text">
                      ถัดไป: ระบุข้อมูลจัดส่งและระยะเวลา
                    </div>
                    
                  </button>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2" internal-fsb-guid="e01619d3" style={{'FsbInheritedPresets': '180079a2', display: (()=>{return this.getDisplay(Status.DELIVERY);})()}}>
              
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
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" name="delivery" />
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
                                <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" name="delivery" />
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
                  
                  <button className="internal-fsb-element internal-fsb-allow-cursor col-4 offset-2 btn btn-primary btn-sm" internal-fsb-guid="a7592071" style={{'marginTop': '15px', 'marginRight': '10px'}} type="button" onClick={this.onButtonClick_a7592071.bind(this)}>
                    
                    <div className="internal-fsb-element" internal-fsb-guid="a7592071-text">
                      ย้อนกลับ
                    </div>
                    
                  </button>
                  <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-0" internal-fsb-guid="0e75306a" style={{'marginTop': '15px', 'marginLeft': '10px'}} type="button" onClick={((event) => { window.internalFsbSubmit('0e75306a', '', event, ((results: any) => { this.manipulate('0e75306a', '', results); }).bind(this)); }).bind(this)}>
                    
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