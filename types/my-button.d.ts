import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyButton extends LitElement {
    static styles: import("lit-element").CSSResult;
    size: string;
    color: string;
    count: number;
    get sizeClass(): string;
    get colorClass(): string;
    get buttonClasses(): {
        [x: string]: string;
    };
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
