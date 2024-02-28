import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/exportNewTableDataAndImportResultUsingPOST
*/
export default function fetchMethod(options: { data: ISearchRowData, params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/importResult/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 搜索行数据 */
export interface ISearchRowData {
    /** 表数据ID */
    tableDataId?: string;
    /** 字段查询条件 */
    fieldQueryCondition?: Record<string, string>;
    /** 空数据 */
    existsEmptyData?: ESearchRowData_existsEmptyData;
    /** 错误数据 */
    existsErrorData?: ESearchRowData_existsErrorData;
    /** 存在重复的数据 */
    existsRepeatData?: ESearchRowData_existsRepeatData;
    /** 校验状态 */
    verificationStatus?: ESearchRowData_verificationStatus;
    /** 操作模式 */
    operationMode?: ESearchRowData_operationMode;
    /** 生效状态 */
    importStatus?: ESearchRowData_importStatus;
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

export enum ESearchRowData_existsEmptyData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESearchRowData_existsErrorData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESearchRowData_existsRepeatData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESearchRowData_verificationStatus {
    /** 未校验 */
    NOT = "NOT",
    /** 未通过校验 */
    FAILED_VERIFICATION = "FAILED_VERIFICATION",
    /** 已通过校验 */
    VERIFICATION_PASSED = "VERIFICATION_PASSED"
}

export enum ESearchRowData_operationMode {
    /** 覆盖导入 */
    OVERRIDE_IMPORT = "OVERRIDE_IMPORT",
    /** 取消导入 */
    CANCEL_IMPORT = "CANCEL_IMPORT"
}

export enum ESearchRowData_importStatus {
    /** 未导入 */
    NOT_IMPORTED = "NOT_IMPORTED",
    /** 已导入 */
    IMPORTED = "IMPORTED",
    /** 导入失败 */
    IMPORT_FAIL = "IMPORT_FAIL"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
