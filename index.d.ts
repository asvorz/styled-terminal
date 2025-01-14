type BaseColors =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

type Color =
  | BaseColors
  | "rand"
  | "random"
  | "random normal"
  | "random semi-bright"
  | "random bright"
  | "random semi-dark"
  | "random dark"
  | "rand normal"
  | "rand semi-bright"
  | "rand bright"
  | "rand semi-dark"
  | "rand dark"
  | "#000000"
  | "rgb(0,0,0)"
  | "hsl(0,0%,0%)";

type StyleObject = {
  weight?: "bold" | "light" | "auto";
  style?: "italic";
  decoration?: "underline" | "crossed" | "overline";
  foreground?: Color;
  background?: Color;
  color?: Color;
  bg?: Color;
  underlineColor?: Color;
  visibility?: "hidden" | "visible";
  border?: "box" | "circle";
  font?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "fraktur"
    | "gothic";
  blink?: "slow" | "fast";
  colorMode?: "auto" | "invert";
};

type Styles = { [key: string]: StyleObject };

type Colors = { [key: string]: Color };

type Data = { [key: string]: String };

type CallBack = (err: Error, res: String | undefined) => {};

type Preset = "rainbow" | "money";

interface String {
  /**
   * Styles this string with given style object.
   * Worst-Case Time complexity O(1) | O(n) - if multiple properties are not efficient.
   *
   * @param {styleObject} styleObject Style object or a name of saved style template.
   */
  style(styleObject: StyleObject): String;

  /**
   * Apply preset on this string.
   * Worst-Case Time complexity: O(preset).
   *
   * @see {@link ./lib/presets.js}
   *
   * @param {Preset} presetName Preset name.
   * @param {any[]} args Preset arguments.
   * @returns {String} Styled string.
   */
  preset(presetName: Preset, ...args: any[]): String;

  /**
   * Clears this string from any styles.
   * Worst-Case Time complexity O(|this|)
   *
   * @returns {String} Current string without any style.
   */
  clearStyle(): String;
}

/**
 * Clears a string from any styles.
 * Worst-Case Time complexity O(|str|)
 *
 * @param {String} str String.
 * @returns {String} String without any style.
 */
export function clear(str: String): String;

/**
 * Apply style on a given string.
 * Worst-Case Time complexity O(1) | O(n) - if multiple properties are not efficient.
 *
 * @param {String} str String to be styled.
 * @param {StyleObject} styleObject Style object.
 * @returns {String} Styled string.
 */
export function apply(str: String, styleObject: StyleObject): String;

/**
 * Apply preset on a given string.
 * Worst-Case Time complexity O(1) | O(|str|) - if multiple properties are not efficient.
 *
 * @see {@link ./lib/presets.js}
 *
 * @param {String} str String to be styled.
 * @param {Preset} presetName Preset name.
 * @param {any[]} args Preset arguments.
 * @returns {String} Styled string.
 */
export function preset(str: String, presetName: Preset, ...args: any[]): String;

/**
 * Saves style as template within a given name.
 * Worst-Case Time complexity O(1).
 *
 * @param {String} name Style name.
 * @param {StyleObject} styleObject Style object.
 */
export function saveStyle(name: String, styleObject: StyleObject): void;

/**
 * Saves color as template within a given name.
 * Worst-Case Time complexity O(1).
 *
 * @param {String} name Style name.
 * @param {Color} color Color in formats: (BaseColor|HEXColor|RGBColor|HSLColor)
 */
export function saveColor(name: String, color: Color): void;

/**
 * Saves multiples styles from js object.
 * Worst-Case Time complexity O(1).
 *
 * @param {Styles} styles Styles object.
 */
export function saveStyles(styles: Styles): void;

/**
 * Saves multiples color as template within a given js object.
 * Worst-Case Time complexity O(1).
 *
 * @param {Colors} colors  Colors object.
 */
export function saveColors(colors: Colors): void;

/**
 * Saves template auto detection (COLOR|STYLE)
 * Worst-Case Time complexity O(1).
 *
 * @param {String} name Style name.
 * @param {Styles & Colors} template Template
 */
export function save(name: String, template: Styles & Colors): void;

/**
 * Renders style of a txt file [Callback].
 * @param {String} file File path.
 * @param {CallBack} [cb] Callback function.
 */
export function render(file: String, cb: CallBack): void;

/**
 * Renders style of a txt file [Callback].
 * @param {String} file File path.
 * @param {Data} data Data parameters.
 * @param {CallBack} [cb] Callback function.
 */
export function render(file: String, data: Data, cb: CallBack): void;

/**
 * Renders style of a txt file [Sync].
 * @param {String} file File path.
 * @param {Data} [data] Data parameters.
 * @returns {String} Encoded string.
 */
export function renderSync(file: String, data?: Data): String;

/**
 * Renders style of a txt file [Promise].
 * @param {String} file File path.
 * @param {Data} [data] Data parameters.
 * @returns {Promise} A new promise.
 */
export function renderAsync(file: String, data?: Data): Promise<string>;
