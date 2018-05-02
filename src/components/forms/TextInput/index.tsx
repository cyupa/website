import React from "react";
import { style } from "typestyle";
import { OptionalErrorOverlay } from "../OptionalErrorOverlay";
import * as styles from "./styles";

interface Props {
  autofocus?: boolean;
  defaultValue?: string;
  error?: string;
  maxLength?: number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

export class TextInput extends React.Component<Props> {
  public render() {
    const { autofocus, defaultValue, error, maxLength, onBlur, onChange, onKeyDown, placeholder, value } = this.props;
    return (
      <OptionalErrorOverlay error={error}>
        <input
          autoFocus={autofocus}
          className={error !== undefined ? errorClassName : normalClassName}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          value={value}
        />
      </OptionalErrorOverlay>
    );
  }
}

const normalClassName = style(...styles.normal);
const errorClassName = style(...styles.error);
