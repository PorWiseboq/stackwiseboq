// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import {Input} from "./DatabaseHelper.js";

interface ValidationInfo {
  name: string;
  required: boolean;
  customMessage: string;
}

const validationDict: any = {};

const ValidationHelper = {
	registerInput: (guid: string, name: string, required: boolean, customMessage: string) => {
		if (!guid || !name) throw new Error("There was an error trying to register validation info (guid or name is empty).");
		
		validationDict[guid] = {
			name: name,
			required: required,
			customMessage: customMessage
		};
	},
	attachInfo: (input: Input) => {
		input.validation = validationDict[input.guid.split("[")[0]];
	},
	validate: (data: Input[]) => {
	  if (!data) return;
	 	for (const item of data) {
	 		if (item.validation.required &&
	 			(item.value === null || item.value === undefined || item.value === "")) {
	 			throw new Error(item.validation.customMessage || `${item.validation.name} is required.`);
	 		}
	 	}
	}
};

export {ValidationInfo, ValidationHelper};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.