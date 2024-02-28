import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/初始化引擎 - 表数据相关/changeHeaderUsingPOST
*/
export default function fetchMethod(options: { data: ITableHeaderChangesTheInput, params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/header/change",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 表头变更输入 */
export interface ITableHeaderChangesTheInput {
    /** undefined */
    id?: string;
    /** 源字段编码 */
    originalFieldCode?: string;
    /** 目标字段编码 */
    targetFieldCode?: string;
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
