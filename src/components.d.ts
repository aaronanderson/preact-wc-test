import { h } from "preact";

//Augment the preact module and add additional allowed element names.
import { JSXInternal as JSXI } from "preact/src/jsx";

declare module "preact" {

	export namespace JSXInternal {


  	interface IntrinsicElements extends JSXI.IntrinsicElements {
			["preact-wc-test"]: Partial<HTMLElement> & {
        foo: string
      };
		}
	}
}
