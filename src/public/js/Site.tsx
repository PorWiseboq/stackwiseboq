// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Project, DeclarationHelper} from './helpers/DeclarationHelper.js';
import {HTMLHelper} from './helpers/HTMLHelper.js';
import {EventHelper} from './helpers/EventHelper.js';
import './components/LoginControl.js';
import './components/FlowLayout_d58ae925.js';
import './components/FlowLayout_d64677b8.js';
import './components/FlowLayout_41288a78.js';
import './components/FlowLayout_b2020622.js';
import './components/Rectangle_cad06e8d.js';
import './components/FlowLayout_56ca37d0.js';
import './components/FlowLayout_cbb338d5.js';
import './components/RoleSelector.js';
import './components/NavigationBar.js';
import './components/Header.js';
import './components/Footer.js';

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