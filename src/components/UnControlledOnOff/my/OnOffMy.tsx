import React from 'react';
import css from './OnOff.module.css';

type activationType = {
    activation: boolean
}

export const OnOffMy = (props: activationType) => {
    return (
        <div>
            <Button value={props.activation} />
        </div>
    )
}
type valueType = {
    value: boolean
}
export function Button(props: valueType) {
    if (props.value) {
        return (
            <div className={css.wrapper}>
                <button className={css.onIndicator}>ON</button>
                <button>OFF</button>
                <div className={`${css.indicator} ${css.onIndicator}`}></div>
            </div>
        )
    } else {
        return (
            <div className={css.wrapper}>
                <button>ON</button>
                <button className={css.offIdicator}>OFF</button>
                <div className={`${css.indicator} ${css.offIdicator}`}></div>
            </div>
        )
    }
}