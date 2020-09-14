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
class FlowLayout_d2d6431e extends Base {
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
      div(style=Object.assign({'marginTop': '30px'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-10 offset-1 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="d2d6431e")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            each data, i in this.getDataFromNotation("Quote", true)
              .internal-fsb-element.col-12(key="item_" + i, internal-fsb-guid="902975e1")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="d54358d0")
                      | ชื่อโครงการ
                    .internal-fsb-element.col-10.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Quote.title"))}, internal-fsb-guid="e4dbc285")
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="5292953d")
                      | สร้างขึ้นโดย
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.firstName"))}, internal-fsb-guid="cdbeabc5")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.lastName"))}, internal-fsb-guid="a9b815bd")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.contactNumber"))}, internal-fsb-guid="64380520")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.taxerContactNumber"))}, internal-fsb-guid="a41b6097")
                    .internal-fsb-element.col-4.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.email"))}, internal-fsb-guid="05673426")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.contactNumber"))}, internal-fsb-guid="33162851")
                    .internal-fsb-element.col-10.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Quote.description"))}, internal-fsb-guid="b5278c27")
                    .internal-fsb-element.col-11.offset-1(internal-fsb-guid="93c1d2a1")
                      | รายการวัสดุ
                    each data, j in this.getDataFromNotation("Quote[" + i + "].Listing", true)
                      .internal-fsb-element.col-11.offset-1(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + j, internal-fsb-guid="e1eca1c8")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            .internal-fsb-element.col-4.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Listing[" + j + "].title"))}, internal-fsb-guid="be4558d8")
                            .internal-fsb-element.col-1.offset-0(internal-fsb-guid="93dc28b2")
                              | #{this.getDataFromNotation('Quote.Listing[i].quantity')}
                            .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Listing[" + j + "].unit"))}, internal-fsb-guid="cee6162b")
                    each data, j in this.getDataFromNotation("Quote[" + i + "].Auction", true)
                      .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + j, internal-fsb-guid="7d4eb9c6")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            .internal-fsb-element.col-2.offset-1(internal-fsb-guid="7a6344dc")
                              | ประมูลโดย
                            .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.name"))}, internal-fsb-guid="e4b4b486")
                            .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.contactNumber"))}, internal-fsb-guid="9e0a5431")
                            .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.taxerContactNumber"))}, internal-fsb-guid="49e497ea")
                            .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.email"))}, internal-fsb-guid="558c91e7")
                            .internal-fsb-element.col-11.offset-1(internal-fsb-guid="eeecb473")
                              | รายการวัสดุ
                            each data, k in this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute", true)
                              .internal-fsb-element.col-11.offset-1(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + k, internal-fsb-guid="5b477135")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute[" + k + "].type"))}, internal-fsb-guid="0a7052b6")
                                    .internal-fsb-element.col-4.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute[" + k + "].title"))}, internal-fsb-guid="e5107496")
                                    .internal-fsb-element.col-1.offset-0(internal-fsb-guid="49ac23b6")
                                      | #{this.getDataFromNotation('Quote.Auction[i].Substitute[j].quantity')}
                                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute[" + k + "].unit"))}, internal-fsb-guid="514d7609")
                                    .internal-fsb-element.col-1.offset-0(internal-fsb-guid="7b17d4cc")
                                      | หน่วยละ
                                    .internal-fsb-element.col-1.offset-0(internal-fsb-guid="b7a81420")
                                      | #{this.getDataFromNotation('Quote.Auction[i].Substitute[j].price')}
                                    .internal-fsb-element.col-1.offset-0(internal-fsb-guid="6806e183")
                                      | บาท
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_d2d6431e', FlowLayout_d2d6431e);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.