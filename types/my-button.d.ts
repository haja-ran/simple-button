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
    render(): import("lit-element").TemplateResult;
    private _onSizeChange;
    private _onColorChange;
    get sizeClass(): string;
    get colorClass(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
