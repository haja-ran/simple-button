import { LitElement } from 'lit-element';
export declare enum ButtonColorEnum {
    DEFAULT = "default",
    SUCCESS = "success",
    DANGER = "danger"
}
export declare enum ButtonSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
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
        [x: string]: ButtonColorEnum | ButtonSizeEnum;
    };
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
