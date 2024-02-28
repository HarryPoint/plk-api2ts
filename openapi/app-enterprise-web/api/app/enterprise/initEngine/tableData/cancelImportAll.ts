import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16400/doc.html#/default/初始化引擎 - 表数据相关/cancelImportAllUsingPOST
*/
export default function fetchMethod(options: { data: IAllCancelImportRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/cancelImportAll",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** AllCancelImportRequestDTO */
export interface IAllCancelImportRequestDTO {
    /** 表数据ID */
    tableDataId?: string;
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

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
