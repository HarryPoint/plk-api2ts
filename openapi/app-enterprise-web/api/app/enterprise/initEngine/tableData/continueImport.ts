import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/continueImportUsingPOST
*/
export default function fetchMethod(options: { data: ITableDataContinueImportRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/continueImport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** TableDataContinueImportRequestDTO */
export interface ITableDataContinueImportRequestDTO {
    /** undefined */
    tableDataId?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
