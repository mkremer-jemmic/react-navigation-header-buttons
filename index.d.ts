import { Component, ComponentType, ReactNode } from 'react';
import { TextStyle, ViewStyle, View } from 'react-native';

interface CommonHeaderButtonProps {
  /**
   * Function to call on press.
   *
   * If this is a falsy value, the button won't react to touches.
   */
  onPress?: () => void;
  /**
   * Title for the button.
   */
  title: string;
  /**
   * Optional React element to show as button. Use this for completely custom buttons.
   *
   * If neither `IconComponent` nor this is defined, will render text with the `title`.
   */
  ButtonElement?: ReactNode;
  /**
   * Icon name, used together with the `IconComponent` property.
   */
  iconName?: string;
  /**
   * Style to apply to the button (icon and text).
   */
  buttonStyle?: TextStyle | ViewStyle;
  /**
   * Style to apply to the touchable element that wraps the button.
   */
  buttonWrapperStyle?: ViewStyle;
  /**
   * ID to locate the view in e2e tests.
   *
   * `testID` of the overflow button is exported under `OVERFLOW_BUTTON_TEST_ID`.
   */
  testID?: string;
  /**
   * Support additional properties, but loses type checking.
   */
  [prop: string]: any;
}

// From HeaderButton.js
interface HeaderButtonProps extends CommonHeaderButtonProps {
  /**
   * Component to use for the icons, for example from `react-native-vector-icons`.
   */
  IconComponent?: ReactNode;
  /**
   * Icon size.
   */
  iconSize?: number;
  /**
   * Color of icons and buttons.
   */
  color?: string;
  /**
   * Property for different ripple effects.
   */
  background?: any;
}

export class HeaderButton extends Component<HeaderButtonProps> {
}

// From HeaderButtons.js as ItemProps
interface HeaderItemProps extends CommonHeaderButtonProps {
  /**
   * String specifying if the icon should be shown or hidden in overflow menu.
   * @default "always"
   */
  show?: 'always' | 'never';
}

export interface onOverflowMenuPressParams {
  hiddenButtons: Array<ReactNode>,
  overflowButtonRef?: View,
}

interface HeaderButtonsProps {
  /**
   * Whether the `HeaderButtons` are on the left from header title.
   * @default false
   */
  left?: boolean;
  /**
   * Component that renders the buttons.
   *
   * Typically, you'll want to provide a component that wraps `HeaderButton`
   * provided by this package, as seen in the quick example.
   * However, you're free to use your own component (see `HeaderButton` for reference).
   */
  HeaderButtonComponent?: ComponentType<any>;
  /**
   * React element for the overflow icon.
   *
   * You need to provide this only if you need an overflow icon.
   */
  OverflowIcon?: ReactNode;
  /**
   * Optional styles for overflow button.
   *
   * There are some default styles set, as seen in `OverflowButton.js`
   */
  overflowButtonWrapperStyle?: ViewStyle;
  /**
   * Function that is called when overflow menu is pressed.
   *
   * This will override the default handler.
   */
  onOverflowMenuPress?: (options: onOverflowMenuPressParams) => any;
  /**
   * Title for the cancel button shown in overflow menus on iOS.
   *
   * This will override the default title 'cancel'.
   */
  overflowCancelButtonTitle?: string;
}

declare class HeaderButtons extends Component<HeaderButtonsProps> {
  static Item: ComponentType<HeaderItemProps>;
}

export default HeaderButtons;
