// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Project, DeclarationHelper} from './helpers/DeclarationHelper.js';
import {HTMLHelper} from './helpers/HTMLHelper.js';
import {EventHelper} from './helpers/EventHelper.js';
import './components/LoginControl.js';
import './components/FlowLayout_535be65e.js';
import './components/FlowLayout_178431b9.js';
import './components/FlowLayout_3e6ee363.js';
import './components/FlowLayout_d22b95d9.js';
import './components/FlowLayout_570decac.js';
import './components/FlowLayout_d7dac04b.js';
import './components/FlowLayout_35ed65de.js';
import './components/FlowLayout_50a46b38.js';
import './components/FlowLayout_6e517cd5.js';
import './components/FlowLayout_a4a155ed.js';
import './components/FlowLayout_2ab933a5.js';
import './components/FlowLayout_040b1e86.js';
import './components/FlowLayout_ad9205ea.js';
import './components/FlowLayout_49934c23.js';
import './components/FlowLayout_285eea05.js';
import './components/FlowLayout_00ce1665.js';
import './components/FlowLayout_d58ae925.js';
import './components/FlowLayout_d64677b8.js';
import './components/FlowLayout_5449c278.js';
import './components/FlowLayout_a04733d3.js';

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;

let expandingPlaceholders = [...document.querySelectorAll('[internal-fsb-init-class]')];
for (let expandingPlaceholder of expandingPlaceholders) {
	let forward = JSON.parse((expandingPlaceholder.getAttribute('internal-fsb-init-forward') || '{}').replace(/'/g, '"'));
	ReactDOM.render(React.createElement(DeclarationHelper.get(expandingPlaceholder.getAttribute('internal-fsb-init-class')), {forward: forward, data: window.data || null}, null), expandingPlaceholder);
	expandingPlaceholder.parentNode.insertBefore(expandingPlaceholder.firstChild, expandingPlaceholder);
	expandingPlaceholder.parentNode.removeChild(expandingPlaceholder);
}

window.internalFsbSubmit = (guid: string, notation: string, event, callback: any) => {
	DataManipulationHelper.request(guid, notation, event, callback);
}

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.