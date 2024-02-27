import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/getTableResumeByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultTableData>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/getTableResumeById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«表格数据» */
export interface IJSONResultTableData {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITabularData;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 表格数据 */
export interface ITabularData {
    /** ID */
    id?: string;
    /** 表定义 */
    tableDefine?: IAssociationTableDefinition1;
    /** 模板 */
    template?: IAssociationTemplate;
    /** 文件ID */
    fileId?: string;
    /** 状态 */
    verificationStatus?: ETabularData_verificationStatus;
    /** 数据导入状态 */
    importStatus?: ETabularData_importStatus;
    /** 消息 */
    message?: string;
    /** 描述 */
    desc?: string;
    /** 自定义列标题 */
    customColumnTitle?: Record<string, ITitleDefineDTO>;
    /** 重复数据数量 */
    repeatDataQuantity?: string;
    /** 重复数据中的覆盖导入数量 */
    overrideImportQuantityInRepeat?: string;
    /** 重复数据中的取消导入数据 */
    cancelImportQuantityInRepeat?: string;
    /** 错误数据数量 */
    errorQuantity?: string;
    /** 可以导入的数量 */
    importsQuantity?: string;
}
/** 关联表定义_1 */
export interface IAssociationTableDefinition1 {
    /** undefined */
    id?: string;
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
}
/** 关联模板 */
export interface IAssociationTemplate {
    /** undefined */
    id: string;
    /** undefined */
    code: string;
    /** undefined */
    name?: string;
}
/** TitleDefineDTO */
export interface ITitleDefineDTO {
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
}

export enum ETabularData_verificationStatus {
    /** 未校验 */
    NOT_VERIFIED = "NOT_VERIFIED",
    /** 校验中 */
    CHECKING = "CHECKING",
    /** 校验完成 */
    VERIFIED = "VERIFIED",
    /** 校验失败 */
    VERIFIED_FAIL = "VERIFIED_FAIL"
}

export enum ETabularData_importStatus {
    /** 未导入 */
    NOT = "NOT",
    /** 完成导入 */
    COMPLETE = "COMPLETE",
    /** 导入中 */
    IMPORTING = "IMPORTING",
    /** 导入失败 */
    IMPORT_FAIL = "IMPORT_FAIL"
}
