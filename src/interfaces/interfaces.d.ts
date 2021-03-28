import {ButtonSize, ButtonTypes} from "../global/ButtonDefinitions";
import {ReactElement} from "react";
import {InfoWrapperTypes} from "../global/InfoWrapperTypes";

interface IDataTableProps {
    headings : any,
    rows: any
    onSort: any
}

interface IInfoWrapperProps {
    title: string,
    info: string,
    type: InfoWrapperTypes,
    hidden?: boolean
}

interface IFormProps {
    initalValues? : object,
    listValues? : any
    closeAction? : any,
    history? : any
}

interface ITitleProps {
    title?: string
}

interface IButtonProps {
    onClick?: any,
    type: any,
    disabled?: boolean,
    buttonType?: ButtonTypes,
    buttonSize?: ButtonSize,
    className?: string
}

interface IFormErrorProps {
    name: string
}

interface IFormInfoWrapperProps {
    info: string | ReactElement,
    type: InfoWrapperTypes,
    hidden?: boolean
}

interface ISelectListProps {
    options: any,
    class: string,
    onChange: any,
    selectedValue?: any,
    properties? : any,
    defaultText? : string
}

interface ICitiesSelectListProps {
    options: any,
    onChange: any,
    selectedValue?: any
}

interface ISelectListFormProps {
    options: any,
    selectClassName?: string,
    selectedValue?: any,
    defaultText? : string,
    defaultValue? : string,
    selectName: string,
    onChange? : any,
    form? : any,
    field? : any
}