declare module '@frameable/el' {
  interface Cache {
    d: Record<string, any>;
    clear: () => void;
  }
  declare class Raw extends String {
  }
  declare class El extends HTMLElement {
    static els: Record<string, El>;
    static stash: Record<string, string>;
    static tags: Record<string, boolean>;
    static keys: WeakMap<object, any>;
    static styles: Record<string, string>;
    static deps: Record<string, any>;
    static Raw: typeof Raw;
    static _contextId: string | null;
    static style: string;
    _id: string;
    _created: boolean;
    readonly _cache: Cache;
    _queued?: number;
    created(): void;
    mounted(): void;
    unmounted(): void;
    styles(_params: Function): string;
    render(_html: Function): string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _memoize(): void;
    $update(): void;
    _update(): void;
    _unstash(): void;
    get $refs(): {};
    $watch(_: any, fn: Function): void;
    $observable(): any;
    $nextTick(): Promise<void>;
    $html(strings: Record<string, any>, ...vals: any): Raw;
    static importStyle(): string;
    static notify(path: string): void;
    static dep(path: string): true | (() => void);
    static observable(x: any, path?: string): any;
    static morph(l: any, r: any): void;
    static nextTick(f?: Function): Promise<void>;
    static zcss(...args: any[]): any;
    static escape(v: any): any;
  }
  export { El };
  export default El;
}

