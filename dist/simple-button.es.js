import{LitElement as o,html as t,css as e,property as r,customElement as s}from"lit-element";var l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=(o,t,e,r)=>{for(var s,i=r>1?void 0:r?n(t,e):t,c=o.length-1;c>=0;c--)(s=o[c])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&l(t,e,i),i};let c=class extends o{constructor(){super(...arguments),this.size="small",this.color="default",this.count=0}render(){return t`
      <select @change="${this._onSizeChange}" id="select-size">
        <option value="">Select size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <select @change="${this._onColorChange}" id="select-color">
        <option value="">Select color</option>
        <option value="default">Default</option>
        <option value="success">Success</option>
        <option value="danger">Danger</option>
      </select>

      <p>Size ${this.size}</p>
      <p>Color ${this.color}</p>

      <button part="button" class="${this.sizeClass} ${this.colorClass}">
        <span class="button-text"><slot></slot></span>
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
        </svg>
      </button>
    `}_onSizeChange(o){this.size=o.target.value}_onColorChange(o){this.color=o.target.value}get sizeClass(){return this.size}get colorClass(){return this.color}};c.styles=e`
    :host .svg-icon {
      height: 1rem;
      width: 1rem;
      margin-right: -.2rem;
    }

    :host .svg-icon path {
      fill: currentColor;
    }

    :host button .button-text {
      margin-right: .25em;
    }

    :host button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      background-color: #E3F2FD;
      border: solid 1px #C2E5FB;
      color: #2B699D;
      padding: .3rem .5rem;
      border-radius: 3px;
      font-size: .8rem;
      cursor: pointer;
    }

    :host button.medium {
      font-size: 1rem;
      padding: 0.45rem .6rem;
    }

    :host button.large {
      font-size: 1.2rem;
      padding: .6rem 1rem;
    }

    :host button.large {
      background:; blue;
    }

    :host button.danger {
      background-color: #FFE7EE;
      border: solid 1px #FFCBDC;
      color: #A8365B;
    }

    :host button.success {
      background-color: #DDF7EE;
      border: solid 1px #B7F0DC;
      color: #11835B;
    }
  `,i([r()],c.prototype,"size",2),i([r()],c.prototype,"color",2),i([r({type:Number})],c.prototype,"count",2),c=i([s("my-button")],c);export{c as MyButton};
