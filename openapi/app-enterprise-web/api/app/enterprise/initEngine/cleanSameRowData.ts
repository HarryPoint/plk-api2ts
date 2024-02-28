import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎/cleanSameRowDataUsingPOST
*/
export default function fetchMethod(options: { data: ICleanSameRowDataInputDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/cleanSameRowData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** CleanSameRowDataInputDTO */
export interface ICleanSameRowDataInputDTO {
    /** 表数据ID */
    tableDataId?: string;
    /** 行数据ID */
    rowId?: string;
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
