'use strict';
((window, document) => {
	class Load extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.innerHTML = `
            <style>
                :host {
                    background-color: #09111a;
                    color:#fff;
                    display:flex;
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    position: absolute;
                    flex-wrap: nowrap;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    align-content: center;
                    padding: 0.75rem 1rem;
                    font-size: 0.9rem;
                    font-family: sans-serif;
                    user-select: none;
                    overflow:hidden;
                    z-index: 1000;
                }

                :host #spin {
									display: inline-block;
									width: 60px;
									height: 60px;
									border-radius: 100%;
									border: 1px solid white;
									border-top-color: rgba(255,255,255,0.1);
									border-right-color: rgba(255,255,255,0.4);
									border-bottom-color: rgba(255,255,255,0.7);
									animation: spinner .4s linear infinite;
                }
                
                @keyframes spinner {
                	from {
                		transform: rotate(0deg);
                	}
                	to {
                		transform: rotate(360deg);
                	}
                }
                
            </style>
            <div id="__load__">
                <span id="spin"></span>
            </div>
            `;
		}
	}
	window.customElements.define('loader-tag', Load);
})(this, document);
