import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/初始化引擎 - 表数据相关/updateImportModeUsingPOST
*/
export default function fetchMethod(options: { data: IRowDataImportModeInputDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/rowData/importMode/change",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** RowDataImportModeInputDTO */
export interface IRowDataImportModeInputDTO {
    /** 行数据ID */
    id?: string;
    /** 操作模式 */
    operationMode?: ERowDataImportModeInputDTO_operationMode;
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

export enum ERowDataImportModeInputDTO_operationMode {
    /** 覆盖导入 */
    OVERRIDE_IMPORT = "OVERRIDE_IMPORT",
    /** 取消导入 */
    CANCEL_IMPORT = "CANCEL_IMPORT"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
