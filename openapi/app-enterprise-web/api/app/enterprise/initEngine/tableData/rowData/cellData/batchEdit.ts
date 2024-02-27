import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/batchEditCellValueUsingPOST
*/
export default function fetchMethod(options: { data: ICellData[] }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/rowData/cellData/batchEdit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 单元格数据 */
export interface ICellData {
    /** ID */
    id?: string;
    /** 单元格下标 */
    cellIndex?: number;
    /** 值 */
    value?: string;
    /** 表格数据ID */
    tableDataId?: string;
    /** 表格数据ID */
    rowDataId?: string;
    /** 关联字段信息 */
    fieldDefine?: IAssociatedFieldDefinition1;
    /** 关联表单选项列表 */
    selectedItemList?: IAssociationFormSelectedItemInputputDTO[];
}
/** 关联字段定义_1 */
export interface IAssociatedFieldDefinition1 {
    /** undefined */
    id: string;
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
    /** undefined */
    fieldType?: EAssociatedFieldDefinition1_fieldType;
    /** undefined */
    applicationCode?: string;
}
/** AssociationFormSelectedItemInputputDTO */
export interface IAssociationFormSelectedItemInputputDTO {
    /** undefined */
    id?: string;
    /** undefined */
    showFieldValue?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EAssociatedFieldDefinition1_fieldType {
    INPUT_TEXT = "INPUT_TEXT",
    TEXTAREA = "TEXTAREA",
    NUMBER = "NUMBER",
    DATE = "DATE",
    SELECTOR = "SELECTOR",
    CHECKBOX = "CHECKBOX",
    CODE = "CODE",
    FORM_RP = "FORM_RP",
    FORM_RP_MULTI = "FORM_RP_MULTI",
    EMAIL = "EMAIL",
    MOBILE = "MOBILE",
    ID_CARD = "ID_CARD"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
